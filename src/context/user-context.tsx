'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useUser as useAuthUser } from '@/firebase';
import { useDoc } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';

interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'farmer' | 'driver' | 'owner' | 'admin';
}

interface UserContextType {
  user: UserProfile | null;
  loading: boolean;
  error?: Error;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { user: authUser, loading: authLoading, error: authError } = useAuthUser();
  const firestore = useFirestore();

  const userDocRef = authUser && firestore ? doc(firestore, 'users', authUser.uid) : null;
  const { data: userProfile, loading: profileLoading, error: profileError } = useDoc<UserProfile>(userDocRef);

  const loading = authLoading || profileLoading;
  const error = authError || profileError;

  return (
    <UserContext.Provider value={{ user: userProfile, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

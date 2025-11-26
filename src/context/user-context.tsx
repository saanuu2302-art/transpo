'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'farmer' | 'driver' | 'owner' | 'admin';
}

// Mock user data
const mockUser: UserProfile = {
    uid: 'fake-user-id',
    email: 'farmer@example.com',
    displayName: 'Sample Farmer',
    role: 'farmer'
};

interface UserContextType {
  user: UserProfile | null;
  loading: boolean;
  error?: Error;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    // Simulate fetching user data
    setLoading(true);
    const timer = setTimeout(() => {
        setUser(mockUser);
        setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
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

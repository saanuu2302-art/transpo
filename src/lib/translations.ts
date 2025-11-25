export const translations = {
  en: {
    language: {
        switchLanguage: 'ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ'
    },
    login: {
      signIn: {
        title: 'Welcome Back',
        description: 'Sign in to access your dashboard',
        button: 'Sign In',
        prompt: 'No account?',
        switch: 'Sign Up',
      },
      signUp: {
        title: 'Create Account',
        description: 'Enter your details to get started',
        button: 'Sign Up',
        prompt: 'Already have an account?',
        switch: 'Sign In',
      },
      fullName: 'Full Name',
      yourNamePlaceholder: 'Your Name',
      email: 'Email',
      password: 'Password',
      userType: {
        label: 'User Type',
        placeholder: 'Select user type',
        farmer: 'Farmer',
        machineOwner: 'Machine Owner',
        driver: 'Driver',
      },
    },
    nav: {
      dashboard: 'Dashboard',
      vehicleBooking: 'Vehicle Booking',
      machineBooking: 'Machine Booking',
aiExpert: 'AI Expert',
      profile: 'Profile',
      logout: 'Logout',
    },
    dashboard: {
      title: 'Farmer Dashboard',
      description: 'Manage your farm operations efficiently.',
      features: {
        vehicleBooking: {
          title: 'Vehicle Booking',
          description: 'Transport your crops with ease.',
        },
        machineBooking: {
          title: 'Machine Booking',
          description: 'Rent the best farming equipment.',
        },
        aiExpert: {
          title: 'AI Expert',
          description: 'Get instant farming advice.',
        },
      },
      access: 'Access',
      recentActivity: {
        title: 'Recent Activity',
        noActivity: 'No recent activity to show.',
      },
    },
    vehicleBooking: {
      title: 'Vehicle Booking',
      description: 'Book a vehicle to transport your crops.',
      bookNow: 'Book Now',
      findNearest: 'Find Nearest Vehicle',
      nearest: 'Nearest',
      locationError: {
        title: 'Location Error',
        notSupported: 'Geolocation is not supported by this browser.',
        permissionDenied: 'Permission to access location was denied.',
      },
    },
    machineBooking: {
      title: 'Machine Booking',
      description: 'Rent equipment or view your booking history.',
      available: 'Available',
      busy: 'Busy',
      owner: 'Owner',
      bookNow: 'Book Now',
      tabs: {
        bookMachine: 'Book Machine',
        bookingHistory: 'Booking History',
      },
      history: {
        item: 'Item',
        date: 'Date',
        cost: 'Cost',
        status: 'Status',
      },
    },
    aiExpert: {
      title: 'AI Expert',
      description: 'Ask any farming-related question.',
      initialMessage: 'Hello! How can I help you with your farming today?',
      placeholder: 'Type your question here...',
      thinking: 'Thinking...',
      errorTitle: 'Error',
    },
    chat: {
        playAudio: 'Play Audio'
    },
    profile: {
        title: 'Profile',
        description: 'View and edit your personal information.',
        details: {
            title: 'Your Details',
            description: 'Keep your profile information up to date.',
            changePhoto: 'Change Photo',
            fullName: 'Full Name',
            phoneNumber: 'Phone Number',
            email: 'Email',
            location: 'Location',
            updateProfile: 'Update Profile'
        }
    },
    confirmation: {
      title: 'Confirm Booking',
      description: (item: string) => `Are you sure you want to book the ${item}?`,
      cancel: 'Cancel',
      confirm: 'Confirm',
      success: {
          title: 'Booking Successful!',
          description: 'has been booked.'
      },
      details: {
        owner: 'Owner',
        price: 'Price',
        liveTracking: 'Live Tracking',
        trackingPlaceholder: 'Map will be shown here',
        payment: 'Payment Method',
        cod: 'Cash on Delivery',
        upi: 'UPI / Online',
        pickupLocation: 'Pickup Location',
        pickupPlaceholder: 'Enter pickup address',
        destination: 'Destination',
        destinationPlaceholder: 'Enter destination address',
        cropType: 'Type of Crop',
        cropPlaceholder: 'e.g., Rice, Wheat, Sugarcane',
      },
    }
  },
  kn: {
    language: {
        switchLanguage: 'Switch to English'
    },
    login: {
      signIn: {
        title: 'ಮತ್ತೆ ಸ್ವಾಗತ',
        description: 'ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಲು ಸೈನ್ ಇನ್ ಮಾಡಿ',
        button: 'ಸೈನ್ ಇನ್ ಮಾಡಿ',
        prompt: 'ಖಾತೆ ಇಲ್ವೇ?',
        switch: 'ಸೈನ್ ಅಪ್ ಮಾಡಿ',
      },
      signUp: {
        title: 'ಖಾತೆ ತೆರೆಯಿರಿ',
        description: 'ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
        button: 'ಸೈನ್ ಅಪ್ ಮಾಡಿ',
        prompt: 'ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೆ?',
        switch: 'ಸೈನ್ ಇನ್ ಮಾಡಿ',
      },
      fullName: 'ಪೂರ್ಣ ಹೆಸರು',
      yourNamePlaceholder: 'ನಿಮ್ಮ ಹೆಸರು',
      email: 'ಇಮೇಲ್',
      password: 'ಪಾಸ್ವರ್ಡ್',
      userType: {
        label: 'ಬಳಕೆದಾರರ ಪ್ರಕಾರ',
        placeholder: 'ಬಳಕೆದಾರರ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
        farmer: 'ರೈತ',
        machineOwner: 'ಯಂತ್ರ ಮಾಲೀಕ',
        driver: 'ಚಾಲಕ',
      },
    },
    nav: {
      dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      vehicleBooking: 'ವಾಹನ ಬುಕಿಂಗ್',
      machineBooking: 'ಯಂತ್ರ ಬುಕಿಂಗ್',
      aiExpert: 'AI ತಜ್ಞ',
      profile: 'ಪ್ರೊಫೈಲ್',
      logout: 'ಲಾಗೌಟ್',
    },
    dashboard: {
      title: 'ರೈತರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      description: 'ನಿಮ್ಮ ಕೃಷಿ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ದಕ್ಷತೆಯಿಂದ ನಿರ್ವಹಿಸಿ.',
      features: {
        vehicleBooking: {
          title: 'ವಾಹನ ಬುಕಿಂಗ್',
          description: 'ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಸುಲಭವಾಗಿ ಸಾಗಿಸಿ.',
        },
        machineBooking: {
          title: 'ಯಂತ್ರ ಬುಕಿಂಗ್',
          description: 'ಅತ್ಯುತ್ತಮ ಕೃಷಿ ಉಪಕರಣಗಳನ್ನು ಬಾಡಿಗೆಗೆ ಪಡೆಯಿರಿ.',
        },
        aiExpert: {
          title: 'AI ತಜ್ಞ',
          description: 'ತక్షణ ಕೃಷಿ ಸಲಹೆ ಪಡೆಯಿರಿ.',
        },
      },
      access: 'ಪ್ರವೇಶಿಸಿ',
      recentActivity: {
        title: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',
        noActivity: 'ತೋರಿಸಲು ಯಾವುದೇ ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ ಇಲ್ಲ.',
      },
    },
    vehicleBooking: {
      title: 'ವಾಹನ ಬುಕಿಂಗ್',
      description: 'ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಸಾಗಿಸಲು ವಾಹನವನ್ನು ಬುಕ್ ಮಾಡಿ.',
      bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
      findNearest: 'ಹತ್ತಿರದ ವಾಹನವನ್ನು ಹುಡುಕಿ',
      nearest: 'ಹತ್ತಿರದ',
      locationError: {
        title: 'ಸ್ಥಳ ದೋಷ',
        notSupported: 'ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಜಿಯೋಲೋಕೇಶನ್ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.',
        permissionDenied: 'ಸ್ಥಳವನ್ನು ಪ್ರವೇಶಿಸಲು ಅನುಮತಿಯನ್ನು ನಿರಾಕರಿಸಲಾಗಿದೆ.',
      },
    },
    machineBooking: {
      title: 'ಯಂತ್ರ ಬುಕಿಂಗ್',
      description: 'ಉಪಕರಣಗಳನ್ನು ಬಾಡಿಗೆಗೆ ಪಡೆಯಿರಿ ಅಥವಾ ನಿಮ್ಮ ಬುಕಿಂಗ್ ಇತಿಹಾಸವನ್ನು ವೀಕ್ಷಿಸಿ.',
      available: 'ಲಭ್ಯವಿದೆ',
      busy: 'ಕಾರ್ಯನಿರತವಾಗಿದೆ',
      owner: 'ಮಾಲೀಕರು',
      bookNow: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
      tabs: {
        bookMachine: 'ಯಂತ್ರವನ್ನು ಬುಕ್ ಮಾಡಿ',
        bookingHistory: 'ಬುಕಿಂಗ್ ಇತಿಹಾಸ',
      },
      history: {
        item: 'ವಸ್ತು',
        date: 'ದಿನಾಂಕ',
        cost: 'ವೆಚ್ಚ',
        status: 'ಸ್ಥಿತಿ',
      },
    },
    aiExpert: {
      title: 'AI ತಜ್ಞ',
      description: 'ಕೃಷಿಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ.',
      initialMessage: 'ನಮಸ್ಕಾರ! ಇಂದು ನಿಮ್ಮ ಕೃಷಿಗೆ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
      placeholder: 'ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...',
      thinking: 'ಯೋಚಿಸುತ್ತಿದೆ...',
      errorTitle: 'ದೋಷ',
    },
    chat: {
        playAudio: 'ಆಡಿಯೋ ಪ್ಲೇ ಮಾಡಿ'
    },
    profile: {
        title: 'ಪ್ರೊಫೈಲ್',
        description: 'ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ಸಂಪಾದಿಸಿ.',
        details: {
            title: 'ನಿಮ್ಮ ವಿವರಗಳು',
            description: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿಯನ್ನು ಅಪ್-ಟು-ಡೇಟ್ ಆಗಿ ಇರಿಸಿ.',
            changePhoto: 'ಫೋಟೋ ಬದಲಾಯಿಸಿ',
            fullName: 'ಪೂರ್ಣ ಹೆಸರು',
            phoneNumber: 'ಫೋನ್ ಸಂಖ್ಯೆ',
            email: 'ಇಮೇಲ್',
            location: 'ಸ್ಥಳ',
            updateProfile: 'ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ'
        }
    },
    confirmation: {
        title: 'ಬುಕಿಂಗ್ ಖಚಿತಪಡಿಸಿ',
        description: (item: string) => `ನೀವು ಖಚಿತವಾಗಿ ${item} ಅನ್ನು ಬುಕ್ ಮಾಡಲು ಬಯಸುತ್ತೀರಾ?`,
        cancel: 'ರದ್ದುಮಾಡಿ',
        confirm: 'ಖಚಿತಪಡಿಸಿ',
        success: {
            title: 'ಬುಕಿಂಗ್ ಯಶಸ್ವಿಯಾಗಿದೆ!',
            description: 'ಅನ್ನು ಬುಕ್ ಮಾಡಲಾಗಿದೆ.'
        },
        details: {
            owner: 'ಮಾಲೀಕರು',
            price: 'ಬೆಲೆ',
            liveTracking: 'ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್',
            trackingPlaceholder: 'ನಕ್ಷೆಯನ್ನು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ',
            payment: 'ಪಾವತಿ ವಿಧಾನ',
            cod: 'ಕ್ಯಾಶ್ ಆನ್ ಡೆಲಿವರಿ',
            upi: 'ಯುಪಿಐ / ಆನ್‌ಲೈನ್',
            pickupLocation: 'ಪಿಕ್ಅಪ್ ಸ್ಥಳ',
            pickupPlaceholder: 'ಪಿಕ್ಅಪ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
            destination: 'ಗಮ್ಯಸ್ಥಾನ',
            destinationPlaceholder: 'ಗಮ್ಯಸ್ಥಾನ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
            cropType: 'ಬೆಳೆಯ ಪ್ರಕಾರ',
            cropPlaceholder: 'ಉದಾ., ಅಕ್ಕಿ, ಗೋಧಿ, ಕಬ್ಬು',
        },
      }
  },
};

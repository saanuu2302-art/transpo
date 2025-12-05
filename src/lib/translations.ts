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
        admin: 'Admin',
      },
    },
    nav: {
      dashboard: 'Dashboard',
      vehicleBooking: 'Vehicle Booking',
      machineBooking: 'Machine Booking',
      aiExpert: 'Gemini',
      profile: 'Profile',
      logout: 'Logout',
      driver: {
        dashboard: 'Dashboard',
        tasks: 'My Tasks',
        earnings: 'My Earnings',
        profile: 'My Profile',
        logout: 'Logout'
      },
      owner: {
        dashboard: 'Dashboard',
        machines: 'My Machines',
        requests: 'Booking Requests',
        transactions: 'Transactions',
        profile: 'Profile',
        logout: 'Logout'
      },
       admin: {
        dashboard: 'Dashboard',
        farmers: 'Farmers',
        drivers: 'Drivers',
        machineOwners: 'Machine Owners',
        vehicleBookings: 'Vehicle Bookings',
        machineryBookings: 'Machinery Bookings',
        aiExpertLogs: 'AI Expert Logs',
        reports: 'Reports',
        systemSettings: 'System Settings',
        logout: 'Logout'
      }
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
          title: 'Ask Gemini',
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
      usageHours: 'Usage Hours',
      usageDescription: 'Live tracking of machine usage will be shown here.',
      liveUsagePlaceholder: 'Live usage tracking will be available here',
    },
    aiExpert: {
      title: 'Gemini Assistant',
      description: 'Ask any farming-related question in English or Kannada. The AI will respond in the language of your query.',
      initialMessage: 'Hello! I am Gemini. How can I help you with your farming needs today?',
      placeholder: 'Ask Gemini about farming...',
      thinking: 'Thinking...',
      errorTitle: 'Error',
      speechError: {
        title: 'Speech Recognition Error',
        notSupported: 'Speech recognition is not supported in your browser.',
        micBlocked: 'Microphone access is blocked. Please enable it in your browser settings.',
      }
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
            updateProfile: 'Update Profile',
            updateSuccessTitle: 'Profile Updated',
            updateSuccessDescription: 'Your profile information has been successfully updated.',
        }
    },
    confirmation: {
      title: 'Confirm Booking',
      description: (item: string) => `Are you sure you want to book the ${'\'\'\''}${item}${'\'\'\''}?`,
      cancel: 'Cancel',
      confirm: 'Confirm',
      success: {
          title: 'Booking Successful!',
          description: 'has been booked.',
          pinDescription: (pin: string) => `Your booking is confirmed! Your verification PIN is ${'\'\'\''}${pin}${'\'\'\''}.`,
      },
      details: {
        owner: 'Owner',
        price: 'Price',
        liveTracking: 'Live Tracking',
        trackingPlaceholder: 'Map will be shown here',
        pickupLocation: 'Pickup Location',
        pickupPlaceholder: 'Enter pickup address',
        destination: 'Destination',
        destinationPlaceholder: 'Enter destination address',
        cropType: 'Type of Crop',
        cropPlaceholder: 'e.g., Rice, Wheat, Sugarcane',
        date: 'Date',
        datePlaceholder: 'Pick a date',
        location: 'Location',
        locationPlaceholder: 'Enter farm location',
      },
    },
    tracking: {
      title: 'Live Tracking',
      description: 'Your vehicle is on its way.',
      mapPlaceholder: 'Live map will be shown here',
      status: 'Status',
      enRoute: 'En Route',
      eta: 'ETA',
      minutes: 'mins',
      goToPayment: 'Payment',
      verificationCode: 'Verification Code'
    },
    payment: {
        title: 'Complete Your Payment',
        description: 'Choose your preferred payment method.',
        total: 'Total Amount',
        cash: 'Pay with Cash',
        upi: 'Pay with UPI',
        card: 'Pay with Credit/Debit Card',
        success: {
            title: 'Payment Successful',
            description: (method: string) => `Paid successfully using ${'\'\'\''}${method}${'\'\'\''}.`,
        },
    },
    driver: {
        dashboard: {
            title: 'Driver Dashboard',
            description: 'Check your current status and availability.',
            available: 'Available',
            unavailable: 'Unavailable',
            currentTask: 'Current Task',
            currentTaskDescription: 'Details of your next assigned trip.',
            noCurrentTask: 'No current task assigned.',
            startTrip: 'Start Trip',
            viewAllTasks: 'View All Tasks',
        },
        tasks: {
            title: 'My Tasks',
            description: 'View and manage incoming ride requests.',
            noTasks: 'No new ride requests available.',
            pickup: 'Pickup',
            destination: 'Destination',
            fare: 'Fare',
            cropType: 'Crop Type',
            accept: 'Accept',
            reject: 'Reject',
            tripDetails: 'Trip Details',
            farmer: 'Farmer',
            startTrip: 'Start Trip',
            endTrip: 'End Trip',
            tripEnded: 'Trip Ended',
            tripEndedDescription: 'The trip has been successfully completed.',
        },
        earnings: {
            title: 'My Earnings',
            description: 'Track your earnings and payment history.',
            totalEarnings: 'Total Earnings',
            withdraw: 'Withdraw',
            recentTransactions: 'Recent Transactions',
        },
        profile: {
            title: 'Driver Profile',
            description: 'View and manage your profile and vehicle details.',
            personal: {
                title: 'Personal Details',
                description: 'Your personal information.',
                name: 'Full Name',
                phone: 'Phone Number',
                license: 'Driving License No.',
            },
            vehicle: {
                title: 'Vehicle Details',
                description: 'Your vehicle information.',
                model: 'Vehicle Model',
                registration: 'Vehicle Registration No.',
                type: 'Vehicle Type',
            },
            update: 'Update Profile',
        }
    },
    owner: {
        dashboard: {
            title: 'Machine Owner Dashboard',
            description: 'Manage your machines and view booking requests.',
            machinesStatus: 'Machines Status',
            totalMachines: 'Total Machines',
            available: 'Available',
            busy: 'Busy',
            recentRequests: 'Recent Booking Requests',
            noRequests: 'No new booking requests.',
            viewAll: 'View All',
        },
        machines: {
            title: 'My Machines',
            description: 'Add new machines and manage their availability.',
            addMachine: 'Add New Machine',
            availability: 'Availability',
            available: 'Available',
            busy: 'Busy',
        },
        requests: {
            title: 'Booking Requests',
            description: 'Review and respond to rental requests from farmers.',
            noRequests: 'No pending booking requests.',
            farmer: 'Farmer',
            date: 'Date',
            approve: 'Approve',
            reject: 'Reject',
        },
        transactions: {
            title: 'Transactions',
            description: 'View your transaction history.',
            noTransactions: 'No transactions yet.',
        },
        profile: {
            title: 'Owner Profile',
            description: 'Update your personal and business information.',
            editProfile: 'Edit Profile',
            totalMachines: 'Total Machines',
            machinesRegistered: 'Machines registered',
            totalEarnings: 'Total Earnings',
            lifetimeEarnings: 'Lifetime earnings',
            backToProfile: 'Back to Profile',
            editDescription: 'Update your name and account details.',
            changePhoto: 'Change Photo',
            ownerName: 'Owner Name',
            emailAddress: 'Email Address',
            saveChanges: 'Save Changes'
        }
    },
    admin: {
      dashboard: {
        title: 'Admin Dashboard',
        description: 'Full control and visibility over the Transpo system.',
        totalFarmers: 'Total Farmers',
        totalDrivers: 'Total Drivers',
        totalMachineOwners: 'Total Machine Owners',
        totalVehicleBookings: 'Total Vehicle Bookings',
        totalMachineryBookings: 'Total Machinery Bookings',
        aiExpertMessages: 'AI Expert Messages',
        activeUsersToday: 'Active Users Today',
        totalRevenue: 'Total Revenue'
      },
       farmers: {
        title: 'Farmer Data',
        description: 'Manage all farmer information.',
        id: 'Farmer ID',
        name: 'Name',
        phone: 'Phone Number',
        location: 'Location',
        totalBookings: 'Total Bookings',
        lastActive: 'Last Active',
        viewDetails: 'View Details',
      },
      drivers: {
        title: 'Driver Data',
        description: 'Manage all driver information.',
        id: 'Driver ID',
        name: 'Name',
        vehicleType: 'Vehicle Type',
        phone: 'Phone',
        rating: 'Rating',
        status: 'Status',
        completedTrips: 'Completed Trips',
        viewEdit: 'View / Edit'
      },
      machineOwners: {
        title: 'Machine Owner Data',
        description: 'Manage all machine owner information.',
        id: 'Owner ID',
        name: 'Owner Name',
        machineType: 'Machine Type',
        machineImage: 'Machine Image',
        availability: 'Availability',
        price: 'Rental Price',
        approvalStatus: 'Approval Status',
        viewDetails: 'View Details'
      },
      vehicleBookings: {
        title: 'Vehicle Bookings',
        bookingId: 'Booking ID',
        farmer: 'Farmer',
        driver: 'Driver',
        pickup: 'Pickup',
        dropoff: 'Dropoff',
        fare: 'Fare',
        status: 'Status'
      },
      machineryBookings: {
        title: 'Machinery Bookings',
        bookingId: 'Booking ID',
        farmer: 'Farmer',
        owner: 'Owner',
        machine: 'Machine',
        duration: 'Duration',
        cost: 'Cost',
        status: 'Status',
        actions: 'Actions',
        approve: 'Approve',
        reject: 'Reject'
      },
      marketplace: {
        title: 'Marketplace Management',
        description: 'Monitor all product listings and activities.',
        product: 'Product',
        seller: 'Seller',
        price: 'Price',
        stockStatus: 'Stock Status',
        approvalStatus: 'Approval Status',
        actions: 'Actions',
        approve: 'Approve',
        reject: 'Reject'
      },
      aiExpertLogs: {
        title: 'AI Expert Logs',
        description: 'Review interactions with the AI assistant.',
        logId: 'Log ID',
        query: 'Query',
        language: 'Language',
        timestamp: 'Timestamp'
      },
      reports: {
        title: 'Reports & Analytics',
        description: 'Generate and view reports on system activity.',
        generate: {
          title: 'Generate Report',
          description: 'Select report type and date range.',
          reportType: 'Report Type',
          userActivity: 'User Activity',
          bookingRevenue: 'Booking Revenue',
          transportDemand: 'Transport Demand',
          dateRange: 'Date Range',
          generateButton: 'Generate Report'
        },
        charts: {
            placeholder: 'Chart will be displayed here.',
            bookings: {
                title: 'Bookings Overview'
            },
            revenue: {
                title: 'Revenue by Category'
            },
            userGrowth: {
                title: 'User Growth'
            }
        }
      },
      systemSettings: {
          title: 'System Settings',
          description: 'Configure system-wide settings and feature flags.',
          featureFlags: {
              title: 'Feature Flags',
              description: 'Enable or disable features across the platform.',
              marketplace: 'Marketplace',
              aiExpert: 'AI Expert'
          },
          financial: {
              title: 'Financial Settings',
              description: 'Manage commission rates and payment gateways.',
              commissionRate: 'Commission Rate (%)',
              paymentGateway: 'Payment Gateway',
              cashOnly: 'Cash Only'
          },
          save: {
              saveButton: 'Save Changes',
              successTitle: 'Settings Saved',
              successDescription: 'System settings have been updated.'
          }
      }
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
        admin: 'ನಿರ್ವಾಹಕ',
      },
    },
    nav: {
      dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      vehicleBooking: 'ವಾಹನ ಬುಕಿಂಗ್',
      machineBooking: 'ಯಂತ್ರ ಬುಕಿಂಗ್',
      aiExpert: 'ಜೆಮಿನಿ',
      profile: 'ಪ್ರೊಫೈಲ್',
      logout: 'ಲಾಗೌಟ್',
      driver: {
        dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
        tasks: 'ನನ್ನ ಕಾರ್ಯಗಳು',
        earnings: 'ನನ್ನ ಗಳಿಕೆಗಳು',
        profile: 'ನನ್ನ ಪ್ರೊಫೈಲ್',
        logout: 'ಲಾಗೌಟ್'
      },
      owner: {
        dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
        machines: 'ನನ್ನ ಯಂತ್ರಗಳು',
        requests: 'ಬುಕಿಂಗ್ ವಿನಂತಿಗಳು',
        transactions: 'ವಹಿವಾಟುಗಳು',
        profile: 'ಪ್ರೊಫೈಲ್',
        logout: 'ಲಾಗೌಟ್'
      },
       admin: {
        dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
        farmers: 'ರೈತರು',
        drivers: 'ಚಾಲಕರು',
        machineOwners: 'ಯಂತ್ರ ಮಾಲೀಕರು',
        vehicleBookings: 'ವಾಹನ ಬುಕಿಂಗ್‌ಗಳು',
        machineryBookings: 'ಯಂತ್ರೋಪಕರಣ ಬುಕಿಂಗ್‌ಗಳು',
        aiExpertLogs: 'AI ತಜ್ಞರ ದಾಖಲೆಗಳು',
        reports: 'ವರದಿಗಳು',
        systemSettings: 'ಸಿಸ್ಟಮ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
        logout: 'ಲಾಗ್ ಔಟ್'
      }
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
          title: 'ಜೆಮಿನಿಯನ್ನು ಕೇಳಿ',
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
      usageHours: 'ಬಳಕೆಯ ಗಂಟೆಗಳು',
      usageDescription: 'ಯಂತ್ರದ ಬಳಕೆಯ ನೇರ ಟ್ರ್ಯಾಕಿಂಗ್ ಇಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ.',
      liveUsagePlaceholder: 'ಲೈವ್ ಬಳಕೆಯ ಟ್ರ್ಯಾಕಿಂಗ್ ಇಲ್ಲಿ ಲಭ್ಯವಿರುತ್ತದೆ',
    },
    aiExpert: {
      title: 'ಜೆಮಿನಿ ಸಹಾಯಕ',
      description: 'ಕೃಷಿಗೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಇಂಗ್ಲಿಷ್ ಅಥವಾ ಕನ್ನಡದಲ್ಲಿ ಕೇಳಿ. AI ನಿಮ್ಮ ಪ್ರಶ್ನೆಯ ಭಾಷೆಯಲ್ಲಿ ಉತ್ತರಿಸುತ್ತದೆ.',
      initialMessage: 'ನಮಸ್ಕಾರ! ನಾನು ಜೆಮಿನಿ. ಇಂದು ನಿಮ್ಮ ಕೃಷಿ ಅಗತ್ಯಗಳಿಗೆ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
      placeholder: 'ಕೃಷಿಯ ಬಗ್ಗೆ ಜೆಮಿನಿಯನ್ನು ಕೇಳಿ...',
      thinking: 'ಯೋಚಿಸುತ್ತಿದೆ...',
      errorTitle: 'ದೋಷ',
      speechError: {
        title: 'ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ದೋಷ',
        notSupported: 'ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಗುರುತಿಸುವಿಕೆ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.',
        micBlocked: 'ಮೈಕ್ರೊಫೋನ್ ಪ್ರವೇಶವನ್ನು ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಬ್ರೌಸರ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಅದನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ.',
      }
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
            updateProfile: 'ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ',
            updateSuccessTitle: 'ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಲಾಗಿದೆ',
            updateSuccessDescription: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮಾಹಿತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ.',
        }
    },
    confirmation: {
        title: 'ಬುಕಿಂಗ್ ಖಚಿತಪಡಿಸಿ',
        description: (item: string) => `ನೀವು ಖಚಿತವಾಗಿ ${'\'\'\''}${item}${'\'\'\''}-ಅನ್ನು ಬುಕ್ ಮಾಡಲು ಬಯಸುತ್ತೀರಾ?`,
        cancel: 'ರದ್ದುಮಾಡಿ',
        confirm: 'ಖಚಿತಪಡಿಸಿ',
        success: {
            title: 'ಬುಕಿಂಗ್ ಯಶಸ್ವಿಯಾಗಿದೆ!',
            description: '-ಅನ್ನು ಬುಕ್ ಮಾಡಲಾಗಿದೆ.',
            pinDescription: (pin: string) => `ನಿಮ್ಮ ಬುಕಿಂಗ್ ಖಚಿತವಾಗಿದೆ! ನಿಮ್ಮ ಪರಿಶೀಲನಾ ಪಿನ್ ${'\'\'\''}${pin}${'\'\'\''}.`,
        },
        details: {
            owner: 'ಮಾಲೀಕರು',
            price: 'ಬೆಲೆ',
            liveTracking: 'ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್',
            trackingPlaceholder: 'ನಕ್ಷೆಯನ್ನು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ',
            pickupLocation: 'ಪಿಕ್ಅಪ್ ಸ್ಥಳ',
            pickupPlaceholder: 'ಪಿಕ್ಅಪ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
            destination: 'ಗಮ್ಯಸ್ಥಾನ',
            destinationPlaceholder: 'ಗಮ್ಯಸ್ಥಾನ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
            cropType: 'ಬೆಳೆಯ ಪ್ರಕಾರ',
            cropPlaceholder: 'ಉದಾ., ಅಕ್ಕಿ, ಗೋಧಿ, ಕಬ್ಬು',
            date: 'ದಿನಾಂಕ',
            datePlaceholder: 'ದಿನಾಂಕವನ್ನು ಆರಿಸಿ',
            location: 'ಸ್ಥಳ',
            locationPlaceholder: 'ಫಾರ್ಮ್ ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ',
        },
    },
    tracking: {
      title: 'ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್',
      description: 'ನಿಮ್ಮ ವಾಹನ ದಾರಿಯಲ್ಲಿದೆ.',
      mapPlaceholder: 'ಲೈವ್ ನಕ್ಷೆಯನ್ನು ಇಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ',
      status: 'ಸ್ಥಿತಿ',
      enRoute: 'ದಾರಿಯಲ್ಲಿದೆ',
      eta: 'ಅಂದಾಜು ಸಮಯ',
      minutes: 'ನಿಮಿಷಗಳು',
      goToPayment: 'ಪಾವತಿ',
      verificationCode: 'ಪರಿಶೀಲನೆ ಕೋಡ್'
    },
    payment: {
        title: 'ನಿಮ್ಮ ಪಾವತಿಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ',
        description: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಪಾವತಿ ವಿಧಾನವನ್ನು ಆರಿಸಿ.',
        total: 'ಒಟ್ಟು ಮೊತ್ತ',
        cash: 'ನಗದಿನೊಂದಿಗೆ ಪಾವತಿಸಿ',
        upi: 'ಯುಪಿಐನೊಂದಿಗೆ ಪಾವತಿಸಿ',
        card: 'ಕ್ರೆಡಿಟ್/ಡೆಬಿಟ್ ಕಾರ್ಡ್‌ನೊಂದಿಗೆ ಪಾವತಿಸಿ',
        success: {
            title: 'ಪಾವತಿ ಯಶಸ್ವಿಯಾಗಿದೆ',
            description: (method: string) => `${'\'\'\''}${method}${'\'\'\''}-ಬಳಸಿ ಯಶಸ್ವಿಯಾಗಿ ಪಾವತಿಸಲಾಗಿದೆ.`,
        },
    },
    driver: {
        dashboard: {
            title: 'ಚಾಲಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
            description: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ ಮತ್ತು ಲಭ್ಯತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.',
            available: 'ಲಭ್ಯವಿದೆ',
            unavailable: 'ಲಭ್ಯವಿಲ್ಲ',
            currentTask: 'ಪ್ರಸ್ತುತ ಕಾರ್ಯ',
            currentTaskDescription: 'ನಿಮ್ಮ ಮುಂದಿನ ನಿಯೋಜಿತ ಟ್ರಿಪ್‌ನ ವಿವರಗಳು.',
            noCurrentTask: 'ಯಾವುದೇ ಪ್ರಸ್ತುತ ಕಾರ್ಯ ನಿಯೋಜಿಸಲಾಗಿಲ್ಲ.',
            startTrip: 'ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ',
            viewAllTasks: 'ಎಲ್ಲಾ ಕಾರ್ಯಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
        },
        tasks: {
            title: 'ನನ್ನ ಕಾರ್ಯಗಳು',
            description: 'ಒಳಬರುವ ರೈಡ್ ವಿನಂತಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.',
            noTasks: 'ಯಾವುದೇ ಹೊಸ ರೈಡ್ ವinಂತಿಗಳು ಲಭ್ಯವಿಲ್ಲ.',
            pickup: 'ಪಿಕ್ಅಪ್',
            destination: 'ಗಮ್ಯಸ್ಥಾನ',
            fare: 'ಶುಲ್ಕ',
            cropType: 'ಬೆಳೆ ಪ್ರಕಾರ',
            accept: 'ಸ್ವೀಕರಿಸಿ',
            reject: 'ತಿರಸ್ಕರಿಸಿ',
            tripDetails: 'ಟ್ರಿಪ್ ವಿವರಗಳು',
            farmer: 'ರೈತ',
            startTrip: 'ಟ್ರಿಪ್ ಪ್ರಾರಂಭಿಸಿ',
            endTrip: 'ಟ್ರಿಪ್ ಮುಗಿಸಿ',
            tripEnded: 'ಟ್ರಿಪ್ ಮುಗಿದಿದೆ',
            tripEndedDescription: 'ಟ್ರಿಪ್ ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಂಡಿದೆ.',
        },
        earnings: {
            title: 'ನನ್ನ ಗಳಿಕೆಗಳು',
            description: 'ನಿಮ್ಮ ಗಳಿಕೆಗಳು ಮತ್ತು ಪಾವತಿ ಇತಿಹಾಸವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.',
            totalEarnings: 'ಒಟ್ಟು ಗಳಿಕೆಗಳು',
            withdraw: 'ಹಿಂಪಡೆಯಿರಿ',
            recentTransactions: 'ಇತ್ತೀಚಿನ ವಹಿವಾಟುಗಳು',
        },
        profile: {
            title: 'ಚಾಲಕ ಪ್ರೊಫೈಲ್',
            description: 'ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಮತ್ತು ವಾಹನದ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.',
            personal: {
                title: 'ವೈಯಕ್ತಿಕ ವಿವರಗಳು',
                description: 'ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ.',
                name: 'ಪೂರ್ಣ ಹೆಸರು',
                phone: 'ಫೋನ್ ಸಂಖ್ಯೆ',
                license: 'ಚಾಲನಾ ಪರವานಗಿ ಸಂಖ್ಯೆ',
            },
            vehicle: {
                title: 'ವಾಹನದ ವಿವರಗಳು',
                description: 'ನಿಮ್ಮ ವಾಹನದ ಮಾಹಿತಿ.',
                model: 'ವಾಹನ ಮಾದರಿ',
                registration: 'ವಾಹನ ನೋಂದಣಿ ಸಂಖ್ಯೆ',
                type: 'ವಾಹನದ ಪ್ರಕಾರ',
            },
            update: 'ಪ್ರೊಫೈಲ್ ನವೀಕರಿಸಿ',
        }
    },
    owner: {
        dashboard: {
            title: 'Machine Owner Dashboard',
            description: 'Manage your machines and view booking requests.',
            machinesStatus: 'Machines Status',
            totalMachines: 'Total Machines',
            available: 'Available',
            busy: 'Busy',
            recentRequests: 'Recent Booking Requests',
            noRequests: 'No new booking requests.',
            viewAll: 'View All',
        },
        machines: {
            title: 'My Machines',
            description: 'Add new machines and manage their availability.',
            addMachine: 'Add New Machine',
            availability: 'Availability',
            available: 'Available',
            busy: 'Busy',
        },
        requests: {
            title: 'Booking Requests',
            description: 'Review and respond to rental requests from farmers.',
            noRequests: 'No pending booking requests.',
            farmer: 'Farmer',
            date: 'Date',
            approve: 'Approve',
            reject: 'Reject',
        },
        transactions: {
            title: 'Transactions',
            description: 'View your transaction history.',
            noTransactions: 'No transactions yet.',
        },
        profile: {
            title: 'Owner Profile',
            description: 'Update your personal and business information.',
            editProfile: 'Edit Profile',
            totalMachines: 'Total Machines',
            machinesRegistered: 'Machines registered',
            totalEarnings: 'Total Earnings',
            lifetimeEarnings: 'Lifetime earnings',
            backToProfile: 'Back to Profile',
            editDescription: 'Update your name and account details.',
            changePhoto: 'Change Photo',
            ownerName: 'Owner Name',
            emailAddress: 'Email Address',
            saveChanges: 'Save Changes'
        }
    },
    admin: {
      dashboard: {
        title: 'Admin Dashboard',
        description: 'Full control and visibility over the Transpo system.',
        totalFarmers: 'Total Farmers',
        totalDrivers: 'Total Drivers',
        totalMachineOwners: 'Total Machine Owners',
        totalVehicleBookings: 'Total Vehicle Bookings',
        totalMachineryBookings: 'Total Machinery Bookings',
        aiExpertMessages: 'AI Expert Messages',
        activeUsersToday: 'Active Users Today',
        totalRevenue: 'Total Revenue'
      },
       farmers: {
        title: 'Farmer Data',
        description: 'Manage all farmer information.',
        id: 'Farmer ID',
        name: 'Name',
        phone: 'Phone Number',
        location: 'Location',
        totalBookings: 'Total Bookings',
        lastActive: 'Last Active',
        viewDetails: 'View Details',
      },
      drivers: {
        title: 'Driver Data',
        description: 'Manage all driver information.',
        id: 'Driver ID',
        name: 'Name',
        vehicleType: 'Vehicle Type',
        phone: 'Phone',
        rating: 'Rating',
        status: 'Status',
        completedTrips: 'Completed Trips',
        viewEdit: 'View / Edit'
      },
      machineOwners: {
        title: 'Machine Owner Data',
        description: 'Manage all machine owner information.',
        id: 'Owner ID',
        name: 'Owner Name',
        machineType: 'Machine Type',
        machineImage: 'Machine Image',
        availability: 'Availability',
        price: 'Rental Price',
        approvalStatus: 'Approval Status',
        viewDetails: 'View Details'
      },
      vehicleBookings: {
        title: 'Vehicle Bookings',
        bookingId: 'Booking ID',
        farmer: 'Farmer',
        driver: 'Driver',
        pickup: 'Pickup',
        dropoff: 'Dropoff',
        fare: 'Fare',
        status: 'Status'
      },
      machineryBookings: {
        title: 'Machinery Bookings',
        bookingId: 'Booking ID',
        farmer: 'Farmer',
        owner: 'Owner',
        machine: 'Machine',
        duration: 'Duration',
        cost: 'Cost',
        status: 'Status',
        actions: 'Actions',
        approve: 'Approve',
        reject: 'Reject'
      },
      marketplace: {
        title: 'Marketplace Management',
        description: 'Monitor all product listings and activities.',
        product: 'Product',
        seller: 'Seller',
        price: 'Price',
        stockStatus: 'Stock Status',
        approvalStatus: 'Approval Status',
        actions: 'Actions',
        approve: 'Approve',
        reject: 'Reject'
      },
      aiExpertLogs: {
        title: 'AI ತಜ್ಞರ ದಾಖಲೆಗಳು',
        description: 'AI ಸಹಾಯಕನೊಂದಿಗಿನ ಸಂವಾದಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
        logId: 'ದಾಖಲೆ ID',
        query: 'ಪ್ರಶ್ನೆ',
        language: 'ಭಾಷೆ',
        timestamp: 'ಸಮಯ'
      },
      reports: {
        title: 'ವರದಿಗಳು ಮತ್ತು ವಿಶ್ಲೇಷಣೆ',
        description: 'ಸಿಸ್ಟಮ್ ಚಟುವಟಿಕೆಯ ಮೇಲೆ ವರದಿಗಳನ್ನು ರಚಿಸಿ ಮತ್ತು ವೀಕ್ಷಿಸಿ.',
        generate: {
          title: 'ವರದಿ ರಚಿಸಿ',
          description: 'ವರದಿ ಪ್ರಕಾರ ಮತ್ತು ದಿನಾಂಕ ಶ್ರೇಣಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
          reportType: 'ವರದಿ ಪ್ರಕಾರ',
          userActivity: 'ಬಳಕೆದಾರರ ಚಟುವಟಿಕೆ',
          bookingRevenue: 'ಬುಕಿಂಗ್ ಆದಾಯ',
          transportDemand: 'ಸಾರಿಗೆ ಬೇಡಿಕೆ',
          dateRange: 'ದಿನಾಂಕ ಶ್ರೇಣಿ',
          generateButton: 'ವರದಿ ರಚಿಸಿ'
        },
        charts: {
            placeholder: 'ಚಾರ್ಟ್ ಇಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.',
            bookings: {
                title: 'ಬುಕಿಂಗ್‌ಗಳ ಅವಲೋಕನ'
            },
            revenue: {
                title: 'ವರ್ಗದ ಪ್ರಕಾರ ಆದಾಯ'
            },
            userGrowth: {
                title: 'ಬಳಕೆದಾರರ ಬೆಳವಣಿಗೆ'
            }
        }
      },
      systemSettings: {
          title: 'ಸಿಸ್ಟಮ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
          description: 'ಸಿಸ್ಟಮ್-ವ್ಯಾಪಕ ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಮತ್ತು ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ.',
          featureFlags: {
              title: 'ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು',
              description: 'ವೇದಿಕೆಯಾದ್ಯಂತ ಫೀಚರ್‌ಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ ಅಥವಾ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಿ.',
              marketplace: 'ಮಾರುಕಟ್ಟೆ',
              aiExpert: 'AI ತಜ್ಞ'
          },
          financial: {
              title: 'ಹಣಕಾಸು ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
              description: 'ಕಮಿಷನ್ ದರಗಳು ಮತ್ತು ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ನಿರ್ವಹಿಸಿ.',
              commissionRate: 'ಕಮಿಷನ್ ದರ (%)',
              paymentGateway: 'ಪಾವತಿ ಗೇಟ್‌ವೇ',
              cashOnly: 'ನಗದು ಮಾತ್ರ'
          },
          save: {
              saveButton: 'ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ',
              successTitle: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ',
              successDescription: 'ಸಿಸ್ಟಮ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ನವೀಕರಿಸಲಾಗಿದೆ.'
          }
      }
    }
  },
};

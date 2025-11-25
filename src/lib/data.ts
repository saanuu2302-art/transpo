
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export const vehicles = [
  {
    id: '1',
    name: 'Mini-Truck',
    kannadaName: 'ಮಿನಿ ಟ್ರಕ್',
    image: getImage('minitruck-vehicle'),
    cost: '800 / trip',
    rating: 4.2,
    lat: 12.55,
    lng: 76.9,
    owner: 'Ravi Kumar',
  },
  {
    id: '2',
    name: 'Heavy Duty Truck',
    kannadaName: 'ಹೆವಿ ಡ್ಯೂಟಿ ಟ್ರಕ್',
    image: getImage('heavy-duty-truck-vehicle'),
    cost: '2500 / trip',
    rating: 4.8,
    lat: 12.52,
    lng: 76.89,
    owner: 'Anand Reddy',
  },
  {
    id: '3',
    name: 'Lorry',
    kannadaName: 'ಲಾರಿ',
    image: getImage('lorry-vehicle'),
    cost: '2200 / trip',
    rating: 4.6,
    lat: 12.5,
    lng: 76.88,
    owner: 'Prakash Gowda',
  },
  {
    id: '4',
    name: 'Luggage Auto',
    kannadaName: 'ಲಗೇಜ್ ಆಟೋ',
    image: getImage('luggage-auto-vehicle'),
    cost: '500 / trip',
    rating: 4.3,
    lat: 12.53,
    lng: 76.91,
    owner: 'Santosh',
  },
];

export const machines = [
  {
    id: 'm1',
    name: 'Tractor',
    kannadaName: 'ಟ್ರಾಕ್ಟರ್',
    image: getImage('tractor-machine'),
    cost: '1200 / hr',
    owner: 'Ramesh',
    availability: true,
  },
  {
    id: 'm2',
    name: 'Tiller',
    kannadaName: 'ಟಿಲ್ಲರ್',
    image: getImage('tiller-machine'),
    cost: '500 / hr',
    owner: 'Suresh',
    availability: true,
  },
  {
    id: 'm3',
    name: 'Harvester',
    kannadaName: 'ಕೊಯ್ಲು ಯಂತ್ರ',
    image: getImage('harvester-machine'),
    cost: '2500 / hr',
    owner: 'Mahesh',
    availability: false,
  },
  {
    id: 'm4',
    name: 'Sprayer',
    kannadaName: 'ಸಿಂಪರಣಾ ಯಂತ್ರ',
    image: getImage('sprayer-machine'),
    cost: '300 / hr',
    owner: 'Ganesh',
    availability: true,
  },
];

export const bookingHistory: Booking[] = [
  {
    id: 'h1',
    item: 'Tractor',
    kannadaItem: 'ಟ್ರಾಕ್ಟರ್',
    date: '2023-10-26',
    cost: '₹1200',
    status: 'Completed',
    kannadaStatus: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
  },
  {
    id: 'h2',
    item: 'Harvester',
    kannadaItem: 'ಕೊಯ್ಲು ಯಂತ್ರ',
    date: '2023-10-28',
    cost: '₹5000',
    status: 'Completed',
    kannadaStatus: 'ಪೂರ್ಣಗೊಂಡಿದೆ',
  },
  {
    id: 'h3',
    item: 'Mini-Truck',
    kannadaItem: 'ಮಿನಿ ಟ್ರಕ್',
    date: '2023-11-02',
    cost: '₹800',
    status: 'Cancelled',
    kannadaStatus: 'ರದ್ದುಪಡಿಸಲಾಗಿದೆ',
  },
];

export const driverTasks = [
  {
    id: 't1',
    farmerName: 'Siddharth',
    kannadaFarmerName: 'ಸಿದ್ಧಾರ್ಥ್',
    pickup: 'Farm in Mandya',
    kannadaPickup: 'ಮಂಡ್ಯದಲ್ಲಿರುವ ಫಾರ್ಮ್',
    destination: 'Mandya Market',
    kannadaDestination: 'ಮಂಡ್ಯ ಮಾರುಕಟ್ಟೆ',
    fare: '₹ 800',
    kannadaFare: '₹ ೮೦೦',
    cropType: 'Sugarcane',
    kannadaCropType: 'ಕಬ್ಬು',
  },
  {
    id: 't2',
    farmerName: 'Priya',
    kannadaFarmerName: 'ಪ್ರಿಯಾ',
    pickup: 'Field near Srirangapatna',
    kannadaPickup: 'ಶ್ರೀರಂಗಪಟ್ಟಣದ ಸಮೀಪದ ಜಮೀನು',
    destination: 'Mysore APMC Yard',
    kannadaDestination: 'ಮೈಸೂರು ಎಪಿಎಂಸಿ ಯಾರ್ಡ್',
    fare: '₹ 1200',
    kannadaFare: '₹ ೧೨೦೦',
    cropType: 'Rice',
    kannadaCropType: 'ಭತ್ತ',
  },
];

export const driverEarnings = {
    total: 25600,
    kannadaTotal: '೨೫೬೦೦',
    transactions: [
        { id: 'tx1', date: '2023-11-15', amount: 800, description: 'Trip to Mandya Market', kannadaDescription: 'ಮಂಡ್ಯ ಮಾರುಕಟ್ಟೆಗೆ ಟ್ರಿಪ್' },
        { id: 'tx2', date: '2023-11-14', amount: 1200, description: 'Trip to Mysore APMC', kannadaDescription: 'ಮೈಸೂರು ಎಪಿಎಂಸಿಗೆ ಟ್ರಿಪ್' },
        { id: 'tx3', date: '2023-11-12', amount: 950, description: 'Trip to Ramanagara', kannadaDescription: 'ರಾಮನಗರಕ್ಕೆ ಟ್ರಿಪ್' },
    ]
};

export const ownerMachines = [
  {
    id: 'm1',
    name: 'Tractor',
    kannadaName: 'ಟ್ರಾಕ್ಟರ್',
    image: getImage('tractor-machine'),
    cost: '1200 / hr',
    availability: true,
  },
  {
    id: 'm2',
    name: 'Tiller',
    kannadaName: 'ಟಿಲ್ಲರ್',
    image: getImage('tiller-machine'),
    cost: '500 / hr',
    availability: true,
  },
  {
    id: 'm3',
    name: 'Harvester',
    kannadaName: 'ಕೊಯ್ಲು ಯಂತ್ರ',
    image: getImage('harvester-machine'),
    cost: '2500 / hr',
    availability: false,
  },
];

export const ownerRequests = [
    {
        id: 'r1',
        farmerName: 'Gopal',
        kannadaFarmerName: 'ಗೋಪಾಲ್',
        machineName: 'Tractor',
        kannadaMachineName: 'ಟ್ರಾಕ್ಟರ್',
        date: '2023-12-01',
    },
    {
        id: 'r2',
        farmerName: 'Lakshmi',
        kannadaFarmerName: 'ಲಕ್ಷ್ಮಿ',
        machineName: 'Tiller',
        kannadaMachineName: 'ಟಿಲ್ಲರ್',
        date: '2023-12-02',
    }
];

export const adminVehicleBookings = [
  {
    id: 'VB001',
    farmer: 'Srinivas',
    driver: 'Ravi Kumar',
    pickup: 'Mandya Farm',
    dropoff: 'Mysuru Market',
    fare: '₹1500',
    status: 'Completed',
    kannadaStatus: 'ಪೂರ್ಣಗೊಂಡಿದೆ'
  },
  {
    id: 'VB002',
    farmer: 'Lakshmi',
    driver: 'Anand Reddy',
    pickup: 'Channapatna',
    dropoff: 'Bengaluru KR Market',
    fare: '₹2500',
    status: 'Pending',
    kannadaStatus: 'ಬಾಕಿಯಿದೆ'
  },
  {
    id: 'VB003',
    farmer: 'Gopal',
    driver: 'Santosh',
    pickup: 'Nanjangud',
    dropoff: 'Ooty Market',
    fare: '₹3000',
    status: 'Cancelled',
    kannadaStatus: 'ರದ್ದುಪಡಿಸಲಾಗಿದೆ'
  },
];

export const adminMachineryBookings = [
    {
        id: 'MB001',
        farmer: 'Srinivas',
        owner: 'Ramesh',
        machine: 'Tractor',
        duration: '4 hours',
        cost: '₹4800',
        status: 'Completed',
        kannadaStatus: 'ಪೂರ್ಣಗೊಂಡಿದೆ'
    },
    {
        id: 'MB002',
        farmer: 'Lakshmi',
        owner: 'Suresh',
        machine: 'Tiller',
        duration: '2 hours',
        cost: '₹1000',
        status: 'Pending',
        kannadaStatus: 'ಬಾಕಿಯಿದೆ'
    },
    {
        id: 'MB003',
        farmer: 'Gopal',
        owner: 'Ganesh',
        machine: 'Sprayer',
        duration: '3 hours',
        cost: '₹900',
        status: 'Pending',
        kannadaStatus: 'ಬಾಕಿಯಿದೆ'
    }
]

export type Vehicle = typeof vehicles[0];
export type Machine = typeof machines[0];
export type Booking = {
    id: string;
    item: string;
    kannadaItem: string;
    date: string;
    cost: string;
    status: 'Completed' | 'Cancelled';
    kannadaStatus: 'ಪೂರ್ಣಗೊಂಡಿದೆ' | 'ರದ್ದುಪಡಿಸಲಾಗಿದೆ';
};
export type DriverTask = typeof driverTasks[0];
export type DriverEarnings = typeof driverEarnings;
export type OwnerMachine = typeof ownerMachines[0];
export type OwnerRequest = typeof ownerRequests[0];
export type AdminVehicleBooking = typeof adminVehicleBookings[0];
export type AdminMachineryBooking = typeof adminMachineryBookings[0];

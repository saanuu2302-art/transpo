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

export const bookingHistory = [
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

export type Vehicle = typeof vehicles[0];
export type Machine = typeof machines[0];
export type Booking = typeof bookingHistory[0];


import { Location, Guest, TeamMember, ChoiceItem, BudgetItem } from './types.ts';

export const LOCATIONS: Location[] = [
  {
    id: 'grand-palais',
    name: 'Grand Palais',
    previewUrl: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&q=80&w=1000',
    surfaceArea: 13500,
    rentCost: 45000,
    description: 'Iconic historic site with a magnificent glass dome and Beaux-Arts architecture.',
    legalRules: [
      'No drilling into structure',
      'Maximum noise level 85dB after midnight',
      'Security personnel mandatory every 50 guests',
      'Insurance coverage min €10M required'
    ]
  },
  {
    id: 'palais-de-tokyo',
    name: 'Palais de Tokyo',
    previewUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
    surfaceArea: 22000,
    rentCost: 30000,
    description: 'A contemporary art powerhouse offering a raw, industrial aesthetic.',
    legalRules: [
      'Specific art installation approvals required',
      'Load-in only between 2AM and 7AM',
      'Heritage preservation constraints apply',
      'No open flames in the main hall'
    ]
  },
  {
    id: 'opera-garnier',
    name: 'Palais Garnier - Opéra National',
    previewUrl: 'https://images.unsplash.com/photo-1596701062351-be5f6a200264?auto=format&fit=crop&q=80&w=1000',
    surfaceArea: 1200,
    rentCost: 50000,
    description: 'The pinnacle of French architectural opulence, perfect for gala dinners.',
    legalRules: [
      'Grand Escalier access restricted for equipment',
      'Formal attire required for all staff',
      'Catering restricted to approved partners',
      'Max capacity 500 for seated dinners'
    ]
  }
];

export const INITIAL_GUESTS: Guest[] = [
  { id: '1', name: 'Sophia Loren', email: 'sophia@example.com', status: 'attending', checkedIn: false },
  { id: '2', name: 'Jean-Pierre Jeunet', email: 'jp@movies.fr', status: 'pending', checkedIn: false },
  { id: '3', name: 'Marion Cotillard', email: 'marion@paris.com', status: 'attending', checkedIn: true },
  { id: '4', name: 'Daft Punk', email: 'robots@electronic.com', status: 'declined', checkedIn: false },
];

export const INITIAL_TEAM: TeamMember[] = [
  { id: 't1', name: 'Marc', role: 'Head Coordinator', lat: 48.8566, lng: 2.3522, lastActive: 'Now' },
  { id: 't2', name: 'Chloé', role: 'Logistics Lead', lat: 48.8606, lng: 2.3376, lastActive: '2m ago' },
  { id: 't3', name: 'Antoine', role: 'AV Technician', lat: 48.8698, lng: 2.3079, lastActive: 'Just now' },
];

export const INITIAL_CHOICES: ChoiceItem[] = [
  { id: 'm1', category: 'music', name: 'Jazz Quartet Paris', status: 'tried', rating: 5, description: 'Smooth jazz, perfect for cocktails.', tags: ['Jazz', 'Sophisticated'], imageUrl: 'https://picsum.photos/seed/jazz/400/300' },
  { id: 'm2', category: 'music', name: 'The Neon Beats', status: 'new', rating: 0, description: 'High energy synth-pop duo.', tags: ['Modern', 'Upbeat'], imageUrl: 'https://picsum.photos/seed/beats/400/300' },
  { id: 'c1', category: 'catering', name: 'Luxe Gourmet', status: 'tried', rating: 4, description: 'Traditional French cuisine with a twist.', tags: ['Fine Dining', 'Local'], imageUrl: 'https://picsum.photos/seed/food/400/300' },
  { id: 'h1', category: 'theme', name: 'Midnight in Versailles', status: 'tried', rating: 5, description: 'Gold accents, candle-lit tables.', tags: ['Classic', 'Luxury'], imageUrl: 'https://picsum.photos/seed/theme/400/300' },
];

export const INITIAL_BUDGET: BudgetItem[] = [
  { id: 'b1', category: 'Venue', name: 'Grand Palais Booking', amount: 45000, status: 'planned' },
  { id: 'b2', category: 'Catering', name: 'Full Menu & Drinks', amount: 12000, status: 'paid' },
  { id: 'b3', category: 'Entertainment', name: 'Jazz Band', amount: 3500, status: 'planned' },
];

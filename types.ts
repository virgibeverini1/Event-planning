
export interface Location {
  id: string;
  name: string;
  previewUrl: string;
  surfaceArea: number; // in m2
  rentCost: number; // per day
  legalRules: string[];
  description: string;
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'attending' | 'declined';
  checkedIn: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  lat: number;
  lng: number;
  lastActive: string;
}

export interface ChoiceItem {
  id: string;
  name: string;
  category: 'music' | 'catering' | 'theme';
  status: 'new' | 'tried';
  rating: number; // 0-5
  description: string;
  tags: string[];
  imageUrl?: string;
}

export interface BudgetItem {
  id: string;
  category: string;
  name: string;
  amount: number;
  status: 'planned' | 'paid';
}

export type AppSection = 'locations' | 'guests' | 'chat' | 'team' | 'music' | 'catering' | 'theme' | 'budget';

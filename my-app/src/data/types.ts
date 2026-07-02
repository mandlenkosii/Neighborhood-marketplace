export type Category = 'power-tools' | 'garden' | 'household' | 'sports';

export const CATEGORY_LABELS: Record<Category, string> = {
  'power-tools': 'Power Tools',
  garden: 'Garden',
  household: 'Household',
  sports: 'Sports & Outdoors',
};

export interface Item {
  id: string;
  ownerName: string;
  title: string;
  description: string;
  category: Category;
  priceType: 'free' | 'paid';
  pricePerDay?: number;
  distanceKm: number;
  location: string;
}

export interface Message {
  id: string;
  itemId: string;
  senderName: string;
  isOwner: boolean;
  text: string;
  createdAt: string;
}

export interface Booking {
  id: string;
  itemId: string;
  startDate: string;
  endDate: string;
}

export interface User {
  name: string;
  email: string;
}

export interface Filters {
  query: string;
  category: Category | 'all';
  priceType: 'all' | 'free' | 'paid';
  maxDistanceKm: number;
}

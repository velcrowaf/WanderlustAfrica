export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  bestTimeToVisit: string;
}

export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Serengeti National Park',
    description: 'Experience the great migration and witness the circle of life in one of Africa\'s most iconic wildlife destinations.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80',
    location: 'Tanzania',
    bestTimeToVisit: 'June to October',
  },
  {
    id: '2',
    title: 'Victoria Falls',
    description: 'Marvel at the world\'s largest waterfall and enjoy thrilling activities like white-water rafting and bungee jumping.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80',
    location: 'Zimbabwe/Zambia',
    bestTimeToVisit: 'February to May',
  },
  {
    id: '3',
    title: 'Cape Town',
    description: 'Discover the vibrant culture, stunning beaches, and iconic Table Mountain in South Africa\'s mother city.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80',
    location: 'South Africa',
    bestTimeToVisit: 'November to March',
  },
]; 
import React from 'react';
import { Compass, Camera, Coffee, Anchor, Sunset, Mountain } from 'lucide-react';
import { Destination, Experience, Tip, Testimonial } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Featured', href: '#featured' },
  { label: 'Travel Tips', href: '#tips' },
];

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    city: 'Kyoto',
    country: 'Japan',
    image: 'https://picsum.photos/id/1018/800/600',
    tags: ['Culture', 'History'],
    rating: 4.9,
    price: '$1,200',
  },
  {
    id: 7,
    city: 'Jaipur',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    tags: ['History', 'Architecture'],
    rating: 4.8,
    price: '$600',
  },
  {
    id: 2,
    city: 'Santorini',
    country: 'Greece',
    image: 'https://picsum.photos/id/1036/800/600',
    tags: ['Beach', 'Romance'],
    rating: 4.8,
    price: '$1,500',
  },
  {
    id: 8,
    city: 'Kerala',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    tags: ['Nature', 'Relaxation'],
    rating: 4.9,
    price: '$700',
  },
  {
    id: 3,
    city: 'Banff',
    country: 'Canada',
    image: 'https://picsum.photos/id/1043/800/600',
    tags: ['Nature', 'Adventure'],
    rating: 4.9,
    price: '$900',
  },
  {
    id: 4,
    city: 'Marrakech',
    country: 'Morocco',
    image: 'https://picsum.photos/id/1040/800/600',
    tags: ['Market', 'Desert'],
    rating: 4.7,
    price: '$800',
  },
  {
    id: 9,
    city: 'Ladakh',
    country: 'India',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80',
    tags: ['Adventure', 'Mountains'],
    rating: 4.9,
    price: '$800',
  },
  {
    id: 5,
    city: 'New York',
    country: 'USA',
    image: 'https://picsum.photos/id/1050/800/600',
    tags: ['City', 'Nightlife'],
    rating: 4.6,
    price: '$1,800',
  },
  {
    id: 6,
    city: 'Queenstown',
    country: 'New Zealand',
    image: 'https://picsum.photos/id/1025/800/600',
    tags: ['Adventure', 'Extreme'],
    rating: 4.9,
    price: '$1,400',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    title: 'Mountain Trekking',
    description: 'Conquer the peaks and breathe the freshest air.',
    icon: <Mountain className="w-6 h-6" />,
    category: 'Mountains',
  },
  {
    id: '2',
    title: 'Beach Relaxation',
    description: 'Unwind by the crystal clear waters and white sand.',
    icon: <Sunset className="w-6 h-6" />,
    category: 'Beach',
  },
  {
    id: '3',
    title: 'Cultural Immersion',
    description: 'Dive deep into local traditions and history.',
    icon: <Compass className="w-6 h-6" />,
    category: 'Culture',
  },
  {
    id: '4',
    title: 'Culinary Journey',
    description: 'Taste the world one dish at a time.',
    icon: <Coffee className="w-6 h-6" />,
    category: 'Food',
  },
  {
    id: '5',
    title: 'City Exploration',
    description: 'Get lost in the vibrant streets of modern metropolises.',
    icon: <Camera className="w-6 h-6" />,
    category: 'City Life',
  },
  {
    id: '6',
    title: 'Ocean Voyage',
    description: 'Set sail for horizons unknown.',
    icon: <Anchor className="w-6 h-6" />,
    category: 'Road Trips',
  },
];

export const EXPERIENCE_CATEGORIES = ['All', 'Beach', 'Mountains', 'City Life', 'Culture', 'Food'];

export const TIPS: Tip[] = [
  {
    id: 1,
    title: 'How to Travel Europe on a Budget',
    description: 'Discover the secrets to seeing more for less with our comprehensive guide to affordable European travel.',
    tags: ['Budget', 'Europe'],
    image: 'https://picsum.photos/id/1039/600/400',
  },
  {
    id: 2,
    title: 'The Ultimate Solo Travel Guide',
    description: 'Embrace the freedom of traveling alone. Safety tips, meeting people, and itinerary planning.',
    tags: ['Solo', 'Safety'],
    image: 'https://picsum.photos/id/1059/600/400',
  },
  {
    id: 3,
    title: 'Packing Light: A Minimalist Approach',
    description: 'Learn how to pack everything you need into a single carry-on for a month-long trip.',
    tags: ['Packing', 'Minimalism'],
    image: 'https://picsum.photos/id/106/600/400',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'London, UK',
    quote: 'WanderVerse helped me find hidden gems in Japan I would never have discovered on my own!',
    avatar: 'https://picsum.photos/id/64/100/100',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, USA',
    quote: 'The experience filters are a game changer. Found the perfect quiet mountain retreat.',
    avatar: 'https://picsum.photos/id/91/100/100',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Madrid, Spain',
    quote: 'Beautifully designed and so easy to use. Planning my honeymoon was a breeze.',
    avatar: 'https://picsum.photos/id/65/100/100',
  },
];

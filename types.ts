export interface Destination {
  id: number;
  city: string;
  country: string;
  image: string;
  tags: string[];
  rating: number;
  price: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export interface Tip {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

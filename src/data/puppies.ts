export interface Puppy {
  name: string;
  breed: string;
  breedName: string;
  image: string;
  sex: 'Male' | 'Female';
  age: string;
  status: string;
  price: number;
  description: string;
}

export const puppies: Puppy[] = [
  {
    name: 'Maggie',
    breed: 'cavalier',
    breedName: 'Cavalier King Charles Spaniel',
    image: '/images/puppies/maggie.jpg',
    sex: 'Female',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Gentle and affectionate, loves to curl up in your lap.',
  },
  {
    name: 'Rose',
    breed: 'cavalier',
    breedName: 'Cavalier King Charles Spaniel',
    image: '/images/puppies/rose.jpg',
    sex: 'Female',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Sweet and playful, brightens every room she enters.',
  },
  {
    name: 'Emmy',
    breed: 'cavalier',
    breedName: 'Cavalier King Charles Spaniel',
    image: '/images/puppies/emmy.jpg',
    sex: 'Female',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Curious and spirited, always ready for an adventure.',
  },
  {
    name: 'Leo',
    breed: 'cavalier',
    breedName: 'Cavalier King Charles Spaniel',
    image: '/images/puppies/leo.jpg',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Confident and charming with a calm, regal personality.',
  },
  {
    name: 'Elmo',
    breed: 'cavalier',
    breedName: 'Cavalier King Charles Spaniel',
    image: '/images/puppies/elmo.jpg',
    sex: 'Male',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Energetic and fun-loving, a true joy to be around.',
  },
  {
    name: 'Bert',
    breed: 'cavalier',
    breedName: 'Cavalier King Charles Spaniel',
    image: '/images/puppies/bert.jpg',
    sex: 'Female',
    age: '11 Weeks',
    status: 'Available',
    price: 800,
    description: 'Loyal and sweet-natured, bonds deeply with her family.',
  },
];

export function getFeaturedPuppies(count = 5): Puppy[] {
  const shuffled = [...puppies].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

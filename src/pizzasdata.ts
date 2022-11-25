import { Pizza } from './types/types';

const pizzas: Pizza[] = [
  {
    name: 'Chicken',
    variants: ['small', 'medium', 'large'],
    prices: {
      small: 40,
      medium: 45,
      large: 60,
    },
    category: 'spicy',
    image: 'https://www.dominos.de/ManagedAssets/DE/product/PTEC/DE_PTEC_de_hero_8745.png?v-900284931',
    description: 'Super hot pizza with chicken',
  },
  {
    name: 'Beef',
    variants: ['small', 'medium', 'large'],
    prices: {
      small: 42,
      medium: 48,
      large: 65,
    },
    category: 'spicy',
    image: 'https://www.dominos.de/ManagedAssets/DE/product/PCHP/DE_PCHP_all_hero_7672.png?v148430955',
    description: 'Hot beef pizza with green pepper',
  },
  {
    name: 'Cheeser',
    variants: ['small', 'medium', 'large'],
    prices: {
      small: 44,
      medium: 50,
      large: 68,
    },
    category: 'vege',
    image: 'https://www.dominos.de/ManagedAssets/DE/product/PCEL/DE_PCEL_de_hero_8745.png?v-979619023',
    description: 'Cheese and nothing more!',
  },
  {
    name: 'Green',
    variants: ['small', 'medium', 'large'],
    prices: {
      small: 39,
      medium: 44,
      large: 59,
    },
    category: 'vege',
    image: 'https://www.dominos.de/ManagedAssets/DE/product/PTEC/DE_PTEC_de_hero_8745.png?v-900284931',
    description: 'For vege lovers',
  },
  {
    name: 'Pepperoni',
    variants: ['small', 'medium', 'large'],
    prices: {
      small: 40,
      medium: 45,
      large: 60,
    },
    category: 'normal',
    image: 'https://www.dominos.de/ManagedAssets/DE/product/PSUC/DE_PSUC_all_hero_7672.png?v-1850610330',
    description: 'Standard pepperoni pizza',
  },
  {
    name: 'Yellow',
    variants: ['small', 'medium', 'large'],
    prices: {
      small: 40,
      medium: 45,
      large: 60,
    },
    category: 'normal',
    image: 'https://www.dominos.de/ManagedAssets/DE/product/PPON/DE_PPON_all_hero_7672.png?v-1178227966',
    description: 'Yellow pizza for corn lovers',
  },
];

export default pizzas;
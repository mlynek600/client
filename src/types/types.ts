export type Variant = 'small' | 'medium' | 'large';

export type Pizza = {
  name: string;
  variants: Variant[];
  prices: {
    small: number;
    medium: number;
    large: number;
  };
  category: string;
  image: string;
  description: string;
};
import clothing1 from '../assets/Men\'s Beige Hooded Sweatshirt.jpg';
import clothing2 from '../assets/Women\'s Red Casual Dress.jpg';
import clothing3 from '../assets/Men\'s Formal Shirt.jpg';
import clothing4 from '../assets/Women\'s Blue Long Dress.jpg';

import kitchen1 from '../assets/White Kitchen Drawer Unit.jpg';
import kitchen2 from '../assets/Wooden Kitchen Display Shelf.jpg';
import kitchen3 from '../assets/Kitchen Storage Trolley.jpg';
import kitchen4 from '../assets/Modern Kitchen Faucet – White.jpg';

import decor1 from '../assets/Decorative Candle Holder.webp';
import decor2 from '../assets/Decorative Plant Display.webp';
import decor3 from '../assets/Wall Art  Photo Frame Set.webp';

export const categories = [
  'All',
  'Clothing',
  'Kitchen Replenishment',
  'Groceries',
  'Decorative Items',
];

export const products = [
  {
    id: 1,
    name: "Men's Beige Hooded Sweatshirt",
    category: 'Clothing',
    image: clothing1,
    description: 'A comfortable everyday sweatshirt designed for casual wear and reliable comfort.',
    featured: true,
    details: [
      'Soft-touch fabric blend for daily comfort',
      'Relaxed fit suitable for everyday use',
      'Suitable for casual and layered styling',
    ],
  },
  {
    id: 2,
    name: "Women's Red Casual Dress",
    category: 'Clothing',
    image: clothing2,
    description: "Versatile women's dress with a smart, comfortable fit for daily and occasionwear needs.",
    featured: true,
    details: [
      'Comfortable and lightweight construction',
      'Modern everyday styling for varied use',
      'Designed for smart casual presentation',
    ],
  },
  {
    id: 3,
    name: "Men's Formal Shirt",
    category: 'Clothing',
    image: clothing3,
    description: 'A polished formal clothing option for professional wear and business-ready outfits.',
    featured: false,
    details: [
      'Crisp finish for professional settings',
      'Easy-to-style formal appearance',
      'Suitable for business or smart-casual use',
    ],
  },
  {
    id: 4,
    name: "Women's Blue Long Dress",
    category: 'Clothing',
    image: clothing4,
    description: 'Elegant long dress offering a refined look for formal and event-oriented requirements.',
    featured: false,
    details: [
      'Elegant drape with a premium feel',
      'Suitable for formal and event styling',
      'Designed to balance comfort and presentation',
    ],
  },
  {
    id: 5,
    name: 'White Kitchen Drawer Unit',
    category: 'Kitchen Replenishment',
    image: kitchen1,
    description: 'A practical kitchen storage solution for clean organization and space efficiency.',
    featured: true,
    details: [
      'Optimized for organized kitchen storage',
      'Clean modern finish for everyday use',
      'Designed for practical home and commercial settings',
    ],
  },
  {
    id: 6,
    name: 'Wooden Kitchen Display Shelf',
    category: 'Kitchen Replenishment',
    image: kitchen2,
    description: 'Functional display shelving suited for kitchen organisation and product visibility.',
    featured: false,
    details: [
      'Organised storage with display appeal',
      'Built for practical daily kitchen use',
      'Complements modern and traditional kitchen layouts',
    ],
  },
  {
    id: 7,
    name: 'Kitchen Storage Trolley',
    category: 'Kitchen Replenishment',
    image: kitchen3,
    description: 'Mobile storage support created for convenient kitchen replenishment and movement.',
    featured: false,
    details: [
      'Easy mobility for flexible kitchen use',
      'Strong storage capacity for daily essentials',
      'Suitable for organised home to commercial use',
    ],
  },
  {
    id: 8,
    name: 'Modern Kitchen Faucet',
    category: 'Kitchen Replenishment',
    image: kitchen4,
    description: 'A sleek faucet option designed to complement modern kitchen environments and daily use.',
    featured: false,
    details: [
      'Modern practical styling',
      'Built for regular kitchen use',
      'Suitable for visual upgrades and functional replacement',
    ],
  },
  {
    id: 9,
    name: 'Household Essentials Collection',
    category: 'Groceries',
    image: kitchen1,
    description: 'Everyday essential grocery and household supply options for routine replenishment.',
    featured: true,
    details: [
      'Supports regular shopping and household restocking',
      'Suitable for essential consumer supply needs',
      'Designed for recurring distribution requirements',
    ],
  },
  {
    id: 10,
    name: 'Daily Pantry Supply Set',
    category: 'Groceries',
    image: kitchen3,
    description: 'A practical grocery supply range intended to support routine consumer demand.',
    featured: false,
    details: [
      'Built around everyday grocery supply needs',
      'Useful for fast-moving distribution cycles',
      'Kept simple and consistent for wholesale sourcing',
    ],
  },
  {
    id: 11,
    name: 'Decorative Candle Holder',
    category: 'Decorative Items',
    image: decor1,
    description: 'Decorative accent pieces that bring warmth and elegance to living spaces.',
    featured: true,
    details: [
      'Adds visual warmth to home interiors',
      'Suitable for home and hospitality styling',
      'Designed as an accent and display item',
    ],
  },
  {
    id: 12,
    name: 'Decorative Plant Display',
    category: 'Decorative Items',
    image: decor2,
    description: 'A stylish decorative display option to enhance interior ambience and décor choices.',
    featured: false,
    details: [
      'Complements modern interiors and retail display',
      'Adds natural visual balance to spaces',
      'Suitable for decorative styling and presentation',
    ],
  },
  {
    id: 13,
    name: 'Wall Art Photo Frame Set',
    category: 'Decorative Items',
    image: decor3,
    description: 'Decorative wall art and framing pieces designed to elevate personal and commercial spaces.',
    featured: false,
    details: [
      'Adds modern visual interest to interiors',
      'Ideal for home and office presentation',
      'Designed as a style-focused decorative solution',
    ],
  },
];

export default products;

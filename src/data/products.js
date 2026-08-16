const imageModules = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const getCategoryFromName = (filename) => {
  const lower = filename.toLowerCase();

  if (
    lower.includes('men') ||
    lower.includes('women') ||
    lower.includes('dress') ||
    lower.includes('shirt') ||
    lower.includes('sweatshirt') ||
    lower.includes('trouser') ||
    lower.includes('jacket') ||
    lower.includes('short') ||
    lower.includes('blazer') ||
    lower.includes('hooded') ||
    lower.includes('polo') ||
    lower.includes('top')
  ) {
    return 'Clothing';
  }

  if (
    lower.includes('kitchen') ||
    lower.includes('cabinet') ||
    lower.includes('sink') ||
    lower.includes('faucet') ||
    lower.includes('shelf') ||
    lower.includes('drawer') ||
    lower.includes('storage') ||
    lower.includes('rack') ||
    lower.includes('countertop') ||
    lower.includes('worktop') ||
    lower.includes('unit') ||
    lower.includes('pantry') ||
    lower.includes('trolley')
  ) {
    return 'Kitchen Replenishment';
  }

  if (
    lower.includes('decorative') ||
    lower.includes('plant') ||
    lower.includes('candle') ||
    lower.includes('lamp') ||
    lower.includes('frame') ||
    lower.includes('flower') ||
    lower.includes('art') ||
    lower.includes('wall')
  ) {
    return 'Decorative Items';
  }

  return 'Groceries';
};

const sanitizeName = (filename) =>
  filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const categories = [
  'All',
  'Clothing',
  'Kitchen Replenishment',
  'Groceries',
  'Decorative Items',
];

export const products = Object.entries(imageModules)
  .map(([path, image], index) => {
    const fileName = path.split('/').pop();
    const category = getCategoryFromName(fileName);

    return {
      id: index + 1,
      name: sanitizeName(fileName),
      category,
      image,
      description: 'Product image from the M&A DISTRIBUTOR LTD product collection.',
      featured: index < 8,
      details: [
        'Quality-focused product assortment',
        'Suitable for distribution requirements',
        'Prepared for customer inquiries and business orders',
      ],
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export default products;

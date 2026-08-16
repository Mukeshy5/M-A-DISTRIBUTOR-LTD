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

  return 'Other';
};

const sanitizeName = (filename) =>
  filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const descriptions = {
  'Artificial Flower Arrangement': 'Decorative artificial flower arrangement that adds a colorful and elegant touch to interiors.',
  'Artificial Green Plant': 'Low-maintenance artificial green plant designed to bring a natural look to indoor spaces.',
  'Black Cabinet Handle Hardware': 'Durable black cabinet handle suitable for modern kitchen and furniture cabinets.',
  'Black Kitchen Cabinet': 'Sleek black kitchen cabinet offering practical storage with a modern appearance.',
  'Blue & White Kitchen Cabinet': 'Stylish blue and white cabinet combination designed for organized kitchen storage.',
  'Built-in Kitchen Appliance Unit': 'Integrated kitchen unit designed to neatly accommodate built-in appliances.',
  'Cabinet Hardware Fittings': 'Collection of practical hardware fittings for cabinet installation and maintenance.',
  'Contemporary Kitchen Cabinet': 'Modern kitchen cabinet featuring contemporary styling and functional storage space.',
  'Curved Kitchen Mixer Tap': 'Curved mixer tap offering convenient water control with a modern kitchen design.',
  'Decorative Fashion Product': 'Stylish decorative fashion item designed to enhance visual appeal and presentation.',
  'Decorative Bird Art Piece': 'Decorative bird-themed artwork suitable for adding character to home interiors.',
  'Decorative Candle Holder': 'Elegant candle holder designed for decorative lighting and stylish interior arrangements.',
  'Decorative Hanging Light': 'Decorative hanging light fixture that creates an attractive and warm interior ambience.',
  'Decorative Plant Display': 'Decorative plant display designed to showcase greenery beautifully in indoor spaces.',
  'Decorative Table Lamp': 'Stylish table lamp providing decorative illumination for bedrooms, living areas or offices.',
  'Glass Door Kitchen Cabinet': 'Kitchen cabinet with glass doors for displaying and organizing kitchen items.',
  'Kitchen Base Cabinet': 'Practical base cabinet providing essential lower-level kitchen storage and workspace support.',
  'Kitchen Cabinet Door Glass Panel': 'Glass panel designed for kitchen cabinet doors to create a clean and modern appearance.',
  'Kitchen Countertop': 'Durable countertop surface designed for practical kitchen preparation and workspace use.',
  'Kitchen Sink Drain Waste Fitting': 'Sink drainage fitting designed for efficient kitchen sink water and waste management.',
  'Kitchen Sink Unit': 'Functional kitchen sink unit combining washing space with convenient cabinet storage.',
  'Kitchen Storage Display Rack': 'Display rack designed to organize and showcase kitchen containers and accessories.',
  'Kitchen Storage Cabinet': 'Spacious storage cabinet designed to keep kitchen essentials organized and accessible.',
  'Kitchen Storage Containers Display': 'Organized container display solution for storing and presenting kitchen storage items.',
  'Kitchen Storage Shelf': 'Practical shelving solution for arranging kitchen utensils, containers and everyday essentials.',
  'Kitchen Storage Trolley': 'Mobile kitchen trolley offering flexible storage and convenient movement around the kitchen.',
  'Kitchen Wall Cabinet': 'Wall-mounted kitchen cabinet designed to maximize vertical storage space.',
  'Kitchen Wall Storage Cabinet': 'Wall storage cabinet providing additional organized space for kitchen essentials.',
  'Kitchen Worktop Countertop': 'Durable kitchen worktop designed to provide a practical and stylish preparation surface.',
  'Marble Kitchen Worktop': 'Premium-looking marble worktop offering an elegant and durable kitchen surface.',
  'Men\'s Beige Hooded Sweatshirt': 'Comfortable beige hooded sweatshirt suitable for casual everyday wear.',
  'Men\'s Beige Trousers': 'Classic beige trousers offering a versatile and comfortable casual style.',
  'Men\'s Black Formal Blazer': 'Smart black formal blazer suitable for professional, business and formal occasions.',
  'Men\'s Black Puffer Jacket': 'Warm black puffer jacket designed for comfortable cold-weather outdoor wear.',
  'Men\'s Brown Casual Jacket': 'Stylish brown casual jacket suitable for everyday outings and relaxed occasions.',
  'Men\'s Casual Hooded Sweatshirt': 'Comfortable hooded sweatshirt designed for relaxed everyday casual wear.',
  'Men\'s Casual Polo Sweatshirt': 'Casual polo-style sweatshirt combining comfortable wear with a smart casual appearance.',
  'Men\'s Casual Shirt': 'Versatile casual shirt designed for comfortable everyday styling.',
  'Men\'s Casual Shorts – Beige': 'Lightweight beige casual shorts suitable for relaxed everyday wear.',
  'Men\'s Casual Shorts – Black': 'Comfortable black casual shorts designed for casual outings and leisure.',
  'Men\'s Casual Shorts – Olive Green': 'Olive green casual shorts offering a relaxed and versatile everyday look.',
  'Men\'s Casual Sleeveless Jacket': 'Sleeveless casual jacket designed for comfortable layering and outdoor styling.',
  'Men\'s Checked Casual Shirt': 'Checked casual shirt offering a classic pattern with comfortable everyday styling.',
  'Men\'s Cream Trousers': 'Cream-colored trousers providing a clean, versatile and comfortable casual look.',
  'Men\'s Formal Shirt': 'Smart formal shirt designed for professional, office and formal occasions.',
  'Men\'s Graphic Print T-Shirt': 'Graphic print T-shirt featuring a casual design suitable for everyday wear.',
  'Men\'s Green Hooded Sweatshirt': 'Green hooded sweatshirt combining comfortable fabric with a relaxed casual style.',
  'Men\'s Grey Casual Sweatshirt': 'Grey casual sweatshirt designed for comfortable everyday and leisure wear.',
  'Men\'s Grey Trousers': 'Classic grey trousers offering a versatile option for casual and semi-formal outfits.',
  'Men\'s Light Blue Formal Shirt': 'Light blue formal shirt suitable for office wear, business meetings and formal occasions.',
  'Men\'s Olive Green Jacket': 'Olive green jacket offering a stylish and practical option for casual outdoor wear.',
  'Men\'s Olive Green Trousers': 'Olive green trousers designed for a comfortable and modern casual appearance.',
  'Men\'s Polo Shirt': 'Classic polo shirt suitable for smart-casual everyday outfits and comfortable wear.',
  'Men\'s Red Hoodie': 'Bright red hoodie designed for comfortable casual and everyday styling.',
  'Men\'s White Casual Sweater': 'Comfortable white casual sweater suitable for relaxed everyday outfits.',
  'Men\'s White Casual T-Shirt': 'Simple white casual T-shirt offering versatile everyday comfort and styling.',
  'Modern Kitchen Cabinet – White': 'Modern white kitchen cabinet designed for clean aesthetics and organized storage.',
  'Modern Kitchen Cabinet Set': 'Coordinated modern cabinet set providing a complete and organized kitchen storage solution.',
  'Modern Kitchen Faucet – Chrome': 'Chrome-finish modern faucet offering a sleek appearance and convenient kitchen water control.',
  'Modern Kitchen Faucet – White': 'Contemporary white kitchen faucet designed for practical use and modern interiors.',
  'Modular Kitchen Storage Unit': 'Modular storage unit designed to provide flexible and organized kitchen storage.',
  'Modular Kitchen Unit': 'Functional modular kitchen unit offering organized storage with a modern design.',
  'Multi-Level Kitchen Storage Rack': 'Multi-level rack providing several storage levels for organizing kitchen essentials efficiently.',
  'Multi-Level Storage Rack': 'Versatile multi-level rack designed to maximize available storage space.',
  'Slim Kitchen Storage Unit': 'Slim storage unit designed for efficient organization in compact kitchen spaces.',
  'Stainless Steel Cabinet Handle': 'Durable stainless steel cabinet handle offering a clean and long-lasting finish.',
  'Stainless Steel Kitchen Sink': 'Stainless steel sink designed for durability, easy cleaning and everyday kitchen use.',
  'Tall Green Kitchen Cabinet': 'Tall green cabinet providing spacious vertical storage with a distinctive modern finish.',
  'Tall Kitchen Storage Cabinet': 'Tall storage cabinet designed to maximize vertical kitchen storage capacity.',
  'Wall Art Photo Frame Set': 'Coordinated photo frame set designed to create an attractive wall art display.',
  'Wall-Mounted Decorative Display': 'Wall-mounted decorative display designed to showcase decorative items while saving floor space.',
  'White & Blue Kitchen Storage': 'White and blue storage solution combining attractive styling with practical kitchen organization.',
  'White Kitchen Drawer Unit': 'White drawer unit offering convenient and organized storage for kitchen essentials.',
  'Women\'s Blue Long Dress': 'Elegant blue long dress designed for stylish and comfortable feminine wear.',
  'Women\'s Brown Long Dress': 'Sophisticated brown long dress suitable for casual and semi-formal occasions.',
  'Women\'s Burgundy Party Dress': 'Elegant burgundy party dress designed for celebrations and special occasions.',
  'Women\'s Casual Top': 'Comfortable women\'s casual top suitable for everyday outfits and relaxed styling.',
  'Women\'s Green Traditional Dress Kurti': 'Traditional green kurti combining ethnic styling with comfortable everyday wear.',
  'Women\'s Pink Evening Gown': 'Elegant pink evening gown designed for parties, celebrations and formal events.',
  'Women\'s Red Casual Dress': 'Stylish red casual dress suitable for everyday outings and relaxed occasions.',
  'Women\'s Red Checked Dress': 'Red checked dress offering a fashionable pattern with comfortable casual styling.',
  'Wooden Kitchen Display Shelf': 'Wooden display shelf designed to organize and showcase kitchen items attractively.',
  'Wooden Kitchen Storage Pantry': 'Wooden pantry storage solution offering organized space for kitchen groceries and essentials.',
  'Wooden Kitchen Worktop': 'Natural-look wooden worktop providing a warm and practical kitchen preparation surface.',
};

export const categories = [
  'All',
  'Clothing',
  'Kitchen Replenishment',
  'Decorative Items',
];

export const products = Object.entries(imageModules)
  .map(([path, image], index) => {
    const fileName = path.split('/').pop();
    const name = sanitizeName(fileName);
    const category = getCategoryFromName(fileName);

    return {
      id: index + 1,
      name,
      category,
      image,
      description: descriptions[name] || 'Product image from the M&A DISTRIBUTOR LTD product collection.',
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

// Product catalogue + categories for Soham Garment
// All product imagery uses Unsplash/Pexels with performance params appended.

const u = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;
const p = (path) =>
  `https://images.pexels.com/${path}?auto=compress&cs=tinysrgb&w=800`;

// Shared gallery images (clothing rack, fabric rolls) reused across products
const RACK = '/images/mens-office-formal-pant.png';
const FABRIC = u('photo-1621882844178-fa8129633ce4');

export const CATEGORIES = [
  {
    slug: 'jeans',
    name: 'Jeans',
    description:
      'Durable denim crafted for everyday wear — slim, regular and stretch fits in classic and dark washes.',
    image: u('photo-1602293589930-45aad59ba3ab'),
  },
  {
    slug: 'formal-pants',
    name: 'Formal Pants',
    description:
      'Men\'s crisp office trousers tailored for a clean drape, available in versatile solid shades.',
    image: '/images/mens-office-formal-pant.png',
  },
  {
    slug: 'formal-shirts',
    name: 'Formal Shirts',
    description:
      'Men\'s structured formal shirts in Oxford and plain weaves, finished for a sharp professional look.',
    image: u('photo-1598033129183-c4f50c736f10'),
  },
];

export const JEANS_FITS = [
  { slug: 'all', name: 'All Jeans' },
  { slug: 'ankle-fit', name: 'Ankle Fit' },
  { slug: 'straight-fit', name: 'Straight Fit' },
  { slug: 'regular-fit', name: 'Regular Fit' },
  { slug: 'mom-fit', name: 'Mom Fit' },
  { slug: 'slim-fit', name: 'Slim Fit' },
];

const numericSizes = ['28', '30', '32', '34', '36', '38'];
const standardSizes = ['S', 'M', 'L', 'XL', 'XXL'];

export const PRODUCTS = [
  // JEANS
  {
    id: 'sg-jn-001',
    name: 'Classic Slim Fit Jeans',
    code: 'SG-JN-001',
    category: 'jeans',
    description:
      'A wardrobe staple cut from mid-weight denim with a slim, modern leg. Built to hold shape through repeated wash and wear.',
    images: [u('photo-1602293589930-45aad59ba3ab'), RACK, FABRIC, p('photos/10133274/pexels-photo-10133274.jpeg')],
    sizes: numericSizes,
    colors: ['Blue', 'Dark Blue', 'Black'],
    fabric: '98% Cotton, 2% Elastane',
    fit: 'Slim Fit',
    featured: true,
  },
  {
    id: 'sg-jn-002',
    name: 'Premium Stretch Denim',
    code: 'SG-JN-002',
    category: 'jeans',
    description:
      'Comfort-stretch denim with a refined dark wash and clean finish — a versatile pair that transitions easily from day to evening.',
    images: [p('photos/10133274/pexels-photo-10133274.jpeg'), u('photo-1602293589930-45aad59ba3ab'), RACK, FABRIC],
    sizes: numericSizes,
    colors: ['Dark Blue', 'Black', 'Charcoal'],
    fabric: 'Cotton blend with stretch',
    fit: 'Slim Fit',
    featured: true,
  },
  {
    id: 'sg-jn-003',
    name: 'Regular Fit Blue Jeans',
    code: 'SG-JN-003',
    category: 'jeans',
    description:
      'A classic regular-fit jean with a comfortable straight leg and a mid-rise waist — dependable everyday denim.',
    images: [u('photo-1602293589930-45aad59ba3ab'), RACK, FABRIC],
    sizes: numericSizes,
    colors: ['Blue', 'Black'],
    fabric: '100% Cotton Denim',
    fit: 'Regular Fit',
    featured: false,
  },
  {
    id: 'sg-jn-004',
    name: 'Mom Fit Dark Wash Jeans',
    code: 'SG-JN-004',
    category: 'jeans',
    description:
      'Deep indigo wash denim with a clean, even fade and a structured hand — an elevated basic for considered wardrobes.',
    images: [p('photos/10133274/pexels-photo-10133274.jpeg'), FABRIC, RACK],
    sizes: numericSizes,
    colors: ['Navy', 'Dark Blue', 'Black'],
    fabric: '100% Cotton Denim',
    fit: 'Mom Fit',
    featured: false,
  },
  {
    id: 'sg-jn-005',
    name: 'Straight Fit Blue Jeans',
    code: 'SG-JN-005',
    category: 'jeans',
    description:
      'A straight-leg jean with a relaxed, consistent fit from thigh to hem and a classic blue wash.',
    images: [
      u('photo-1542272604-787c3835535d'),
      u('photo-1541099649105-f69ad21f3246'),
      u('photo-1542574271-7f3b92e6c821'),
    ],
    sizes: numericSizes,
    colors: ['Blue', 'Dark Blue'],
    fabric: '100% Cotton Denim',
    fit: 'Straight Fit',
    featured: false,
  },
  {
    id: 'sg-jn-006',
    name: 'Ankle Length Slim Jeans',
    code: 'SG-JN-006',
    category: 'jeans',
    description:
      'Modern ankle-length jeans with a streamlined slim fit and clean tapered hem.',
    images: [
      u('photo-1541099649105-f69ad21f3246'),
      u('photo-1542272604-787c3835535d'),
      u('photo-1541840031508-326b77c9a17e'),
    ],
    sizes: numericSizes,
    colors: ['Blue', 'Black', 'Light Blue'],
    fabric: '98% Cotton, 2% Elastane',
    fit: 'Ankle Fit',
    featured: false,
  },

  // FORMAL PANTS
  {
    id: 'sg-fp-001',
    name: 'Slim Fit Formal Trouser',
    code: 'SG-FP-001',
    category: 'formal-pants',
    description:
      'A slim-leg formal trouser with a pressed crease and clean drape — tailored for a sharp, modern office silhouette.',
    images: [
      '/images/mens-office-formal-pant.png',
      u('photo-1506629082955-511b1aa562c8'),
      u('photo-1594938298603-c8148c4dae35'),
    ],
    sizes: numericSizes,
    colors: ['Charcoal', 'Black', 'Navy'],
    fabric: 'Polyester-Viscose Blend',
    fit: 'Slim Fit',
    featured: true,
  },
  {
    id: 'sg-fp-002',
    name: 'Classic Formal Trouser',
    code: 'SG-FP-002',
    category: 'formal-pants',
    description:
      'A timeless regular-fit trouser with a soft, breathable weave — a dependable base for professional wardrobes.',
    images: [
      u('photo-1506629082955-511b1aa562c8'),
      u('photo-1594938298603-c8148c4dae35'),
      u('photo-1617127365220-1d4a89a5c0bc'),
    ],
    sizes: numericSizes,
    colors: ['Black', 'Charcoal', 'Beige'],
    fabric: 'Polyester-Viscose Blend',
    fit: 'Regular Fit',
    featured: true,
  },
  {
    id: 'sg-fp-003',
    name: 'Premium Office Trouser',
    code: 'SG-FP-003',
    category: 'formal-pants',
    description:
      'A premium-feel office trouser with a matte finish and refined drape — crafted for long-wear comfort through the workday.',
    images: [
      u('photo-1594938298603-c8148c4dae35'),
      '/images/mens-office-formal-pant.png',
      u('photo-1506629082955-511b1aa562c8'),
    ],
    sizes: numericSizes,
    colors: ['Navy', 'Charcoal', 'Black'],
    fabric: 'Wool-blend suiting',
    fit: 'Slim Fit',
    featured: false,
  },

  // FORMAL SHIRTS
  {
    id: 'sg-sh-004',
    name: 'Premium Oxford Shirt',
    code: 'SG-SH-004',
    category: 'formal-shirts',
    description:
      'A structured Oxford-weave formal shirt with a crisp collar and clean finish — a reliable staple for professional wear.',
    images: [
      u('photo-1598033129183-c4f50c736f10'),
      u('photo-1603252109303-2751441dd157'),
      u('photo-1596755094514-f87e34085b2c'),
    ],
    sizes: standardSizes,
    colors: ['White', 'Sky Blue', 'Blue'],
    fabric: 'Oxford Cotton',
    fit: 'Slim Fit',
    featured: true,
  },
  {
    id: 'sg-sh-005',
    name: 'Classic Formal Shirt',
    code: 'SG-SH-005',
    category: 'formal-shirts',
    description:
      'A plain-weave formal shirt with a smooth finish and classic collar — an everyday essential for the office.',
    images: [
      u('photo-1603252109303-2751441dd157'),
      u('photo-1598033129183-c4f50c736f10'),
      u('photo-1596755094514-f87e34085b2c'),
    ],
    sizes: standardSizes,
    colors: ['White', 'Sky Blue'],
    fabric: 'Cotton Poplin',
    fit: 'Regular Fit',
    featured: false,
  },

];

// --- Helpers ---

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categorySlug);
}

export function getProductsByJeansFit(fitSlug) {
  if (!fitSlug || fitSlug === 'all') return getProductsByCategory('jeans');
  const fitName = JEANS_FITS.find((fit) => fit.slug === fitSlug)?.name || '';
  return PRODUCTS.filter(
    (p) => p.category === 'jeans' && p.fit === fitName
  );
}

export function getFeaturedProducts(limit = 8) {
  const featured = PRODUCTS.filter((p) => p.featured);
  return featured.slice(0, limit);
}

export function getRelatedProducts(product, count = 4) {
  if (!product) return [];
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, count);
}

export function getCategoryName(slug) {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  return cat ? cat.name : slug;
}

export function getCategoryProductCount(slug) {
  return PRODUCTS.filter((p) => p.category === slug).length;
}

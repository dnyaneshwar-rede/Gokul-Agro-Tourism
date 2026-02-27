import { Package } from '@/types/index';

export const packages: Package[] = [
  {
    id: 'primium-package',
    name: 'Complete Farm Experience With Hurda  ',
    description: 'Perfect for a short break with authentic farm experiences Saturday & Sunday (Holiday) Adults - 800₹ Other Day( 750₹)',
    basePrice: 800, // Base price per adult
    childPrice: 400, // Price per child
    features: [
      'Farm tour and activities',
      'Traditional meals included',
      'Welcome Drink ',
      'Nasta (Unlimited)',
      'Ranmeva (Fruits)(unlimited)',
      'Hurda Menu(unlimited)',
      'Lunch (unlimited)',
      'Including All 28 Activitys'
      
    ],
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=1600',
  },

  {
    id: 'night-stay-package',
    name: 'Night Stay',
    description: 'Perfect for a short break with authentic farm experiences , Pure Vage Only (Drink Not Allow) ',
    basePrice: 1000, // Base price per adult
    childPrice: 550, // Price per child
    features: [
      'High Tea',
      'Dinner',
      ' 🔥 Bonfire at Night',
      'Night Music',
      'Shivar Tour (Local Tour)',
      'Breakfast'
    ],
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?q=80&w=1600',
  },



  {
    id: 'basic-packege',
    name: 'Complete Farm Experience with Activity All Packet ',
    description: 'Immersive agricultural experience with luxury amenities',
    basePrice: 550, // Base price per adult
    childPrice: 375, // Price per child
    features: [
      'All Basic package features',
      'Luxury accommodation',
      'Nasta (Unlimited)',
      'Lunch (unlimited)',
      'Including All 28 Activitys',
      'Group Disscount Available After 20 memebers ',
      
    ],
    image: 'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=1600',
  },
  {
  id: 'holi-special-2026',
  name: 'Holi Dhulivandan Special 2026',
  description:
    'Family Holi celebration with live music, rain dance, mud bath, swimming pools and unlimited fun.',
  basePrice: 599,
  childPrice: 599,
  features: [
    'Live Music',
    'Group Dance & Zumba',
    'Natural Colors Only',
    'Mud Bath',
    'Special Swimming Tank',
    '3+1 Swimming Pools',
    'Boating',
    'Zip Line & Ropeway',
    'Horse & Camel Ride',
    'Train Ride',
    'Breakfast + Snacks + Lunch'
  ],
  image:
    'https://images.unsplash.com/photo-1584473457409-ce1a5dfe3a14?q=80&w=1600',
},

{
  id: 'day-picnic-package',
  name: 'Gokul Krushi Paryatan Day Picnic',
  description:
    'Full day agro tourism experience with unlimited food and all adventure activities.',
  basePrice: 799,
  childPrice: 499,
  features: [
    'Swimming Pool & Rain Dance',
    'Zip Line & Zip Cycle',
    'Train Ride',
    'Camel & Horse Ride',
    'Magic Show',
    'Boating',
    'Indoor & Outdoor Games',
    'Unlimited Breakfast',
    'Hurda Party',
    'Traditional Lunch',
    'High Tea'
  ],
  image:
    'https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&w=1600',
},
];
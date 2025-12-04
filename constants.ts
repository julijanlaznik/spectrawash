
import { Car, ShieldCheck, Sparkles, Briefcase, MapPin, Phone, Mail, Clock, Armchair, Gift, ShoppingBag, Star, Gem, Percent, Wrench, Calendar, PlusCircle } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Služby', path: '/#services' },
  { name: 'Reference', path: '/#testimonials' },
  // Vouchery removed from text links, will be a button
  { name: 'Kontakt', path: '/#contact' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/hero-slide-01.webp',
    title: 'Precizní\nruční mytí',
    subtitle: 'Šetrná péče o váš vůz. Používáme nejšetrnější\nmetody a prémiovou autokosmetiku.',
  },
  {
    id: 2,
    image: '/hero-slide-02.webp',
    title: 'Detailing interiéru',
    subtitle: 'Hloubkové tepování, čištění kůže a dezinfekce.\nVáš interiér bude opět jako nový.',
  },
  {
    id: 3,
    image: '/hero-slide-03.webp',
    title: 'Keramická ochrana',
    subtitle: 'Dlouhodobá ochrana laku nanotechnologií.\nExtrémní lesk, hydrofobita a odolnost.',
  },
];

export const SERVICES = [
  {
    id: 'p1',
    icon: Sparkles,
    title: 'P1: Ruční mytí exteriéru',
    price: 'od 690 Kč',
    basePrice: 690,
    duration: '60 min',
    image: '/service-p1.webp',
    description: 'Základní program pro perfektní čistotu exteriéru.',
    details: [
      'Předmytí a čištění kol',
      'Mytí karoserie pH neutrálním šamponem',
      'Vysušení karoserie',
      'Ošetření mezidveřního prostoru',
      'Impregnace pneumatik',
      'Vyleštění oken zvenku'
    ]
  },
  {
    id: 'p2',
    icon: Armchair,
    title: 'P2: P1 + Interiér bez tepování',
    price: 'od 1 950 Kč',
    basePrice: 1950,
    duration: '150 min',
    image: '/service-p2.webp',
    description: 'Kompletní péče o exteriér a důkladný úklid interiéru (bez mokrého tepování).',
    details: [
      'Vše z programu P1',
      'Luxování celého vozu',
      'Tepování vkládaných koberců / ošetření gumových',
      'Čištění a impregnace vnitřních plastů',
      'Leštění vnitřních oken a zrcátek'
    ]
  },
  {
    id: 'p3',
    icon: Star,
    title: 'P3: P2 + Interiér s tepováním',
    price: 'od 3 250 Kč',
    basePrice: 3250,
    duration: '210 min',
    image: '/service-p3.webp',
    description: 'Maximální program včetně hloubkového tepování sedaček a čištění kůže.',
    details: [
      'Vše z programu P2',
      'Hloubkové tepování všech sedaček (textil/kůže)',
      'Tepování zavazadlového prostoru',
      'Čištění zádveří a prahů'
    ]
  },
  {
    id: 'pi',
    icon: Gem,
    title: 'Pi: Leštění laku & Keramická ochrana',
    price: 'od 5 000 Kč',
    basePrice: 5000, 
    duration: 'Individuální',
    image: '/service-polishing.webp',
    description: 'Specializované služby pro náročné klienty. Leštění laku a keramická ochrana.',
    details: [
      'Leštění laku karoserie',
      'Nanesení keramické ochrany',
      'Korekce laku',
      'Individuální domluva'
    ]
  },
  {
    id: 'addons',
    icon: PlusCircle,
    title: 'Doplňkové služby',
    price: 'Ceník',
    basePrice: 0,
    duration: '',
    image: '/service-addons.webp', // Reverted to local file as requested
    description: 'Rozšiřující služby k programům.',
    details: [
      'Interiér bez tepování (1 350 Kč)',
      'Interiér s tepováním (2 650 Kč)',
      'Odstranění psích chlupů (600 Kč)',
      'Dezinfekce klimatizace (600 Kč)',
      'Aplikace tekutých stěračů (500 Kč)',
      'Mytí motoru vč. impregnace (650 Kč)',
      'Tekutý vosk - 3 měsíce (700 Kč)',
      'Tuhý vosk - 8 měsíců (1 350 Kč)',
      'Oživení světlometů (1 500 Kč)'
    ]
  },
  {
    id: 'pickup',
    icon: MapPin,
    title: 'Pick-up servis',
    price: 'Individuální',
    basePrice: 500,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop', // Stock photo kept as requested
    description: 'Vůz si u vás vyzvedneme a vrátíme čistý.',
    details: ['Vyzvednutí vozu', 'Přistavení zpět']
  }
];

export const VOUCHERS = [
  {
    id: 1,
    title: 'Light Refresh',
    price: '2 500 Kč',
    description: 'Rychlé a efektivní kompletní osvěžení vozu. Mytí exteriéru, tekutý vosk, suché čištění interiéru, luxování.',
    features: [
      'Mytí exteriéru', 
      'Ošetření tekutým voskem', 
      'Suché čištění interiéru', 
      'Luxování, plasty, koberečky'
    ],
    tag: null
  },
  {
    id: 2,
    title: 'Deep Complete',
    price: '3 800 Kč',
    description: 'Prémiová kompletní péče o auto: exteriér + hloubkové čištění interiéru.',
    features: [
      'Kompletní mytí exteriéru',
      'Tekutý vosk',
      'Mokré čištění interiéru',
      'Hloubkové tepování sedaček',
      'Čištění kůže',
      'Zavazadlový prostor'
    ],
    tag: 'Nejoblíbenější'
  },
  {
    id: 3,
    title: 'Premium Credit 5 000 Kč',
    price: '5 000 Kč',
    description: 'Univerzální kredit 5 000 Kč na jakékoliv služby SpectraWash. Obdarovaný si sám vybere.',
    features: [
      'Kredit na libovolné služby', 
      'Platnost 12 měsíců', 
      'Lze čerpat po částech',
      'I na keramiku a leštění'
    ],
    tag: 'Tip na dárek'
  }
];

export const MERCHANDISE = [
  {
    id: 1,
    title: 'SpectraWash Detailer',
    price: '390 Kč',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop',
    tag: 'Bestseller'
  },
  {
    id: 2,
    title: 'Mikrovláknová Utěrka',
    price: '190 Kč',
    image: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Vůně do auta - Leather',
    price: '250 Kč',
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=600&auto=format&fit=crop',
    tag: 'Novinka'
  },
  {
    id: 4,
    title: 'Sada na čištění kůže',
    price: '1 290 Kč',
    image: 'https://images.unsplash.com/photo-1550523789-7257c79373cb?q=80&w=600&auto=format&fit=crop',
  }
];

export const SOCIAL_FEED = [
  {
    id: 1,
    type: 'video',
    thumbnail: '/reel-01.jpg',
    title: 'Proces mytí',
    link: 'https://www.instagram.com/reel/DAwG8eBiSLC/'
  },
  {
    id: 2,
    type: 'image',
    thumbnail: '/reel-02.jpg',
    title: 'Kontrola kvality',
    link: 'https://www.instagram.com/reel/C_dV5-NioRj/'
  },
  {
    id: 3,
    type: 'video',
    thumbnail: '/reel-03.jpg',
    title: 'Aplikace vosku',
    link: 'https://www.instagram.com/reel/C9CNmffioep/'
  },
  {
    id: 4,
    type: 'image',
    thumbnail: '/reel-04.jpg',
    title: 'Detaily interiéru',
    link: 'https://www.instagram.com/reel/C2xd-KtMOet/'
  },
  {
    id: 5,
    type: 'video',
    thumbnail: '/reel-05.jpg',
    title: 'Renovace laku',
    link: 'https://www.instagram.com/reel/CpJ_L_LAD0v/'
  },
  {
    id: 6,
    type: 'video',
    thumbnail: '/reel-06.jpg',
    title: 'Hydrofobní ochrana',
    link: 'https://www.instagram.com/reel/CosZ0MIAW9Z/'
  }
];

export const PORTFOLIO_CATEGORIES = ['Vše', 'Exteriér', 'Interiér', 'Ochrana'];

// Updated to exactly 4 items with local webp paths
export const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Exteriér', image: '/portfolio-01.webp', title: 'Porsche 911', desc: 'Ruční mytí' },
  { id: 2, category: 'Interiér', image: '/portfolio-02.webp', title: 'BMW M5', desc: 'Čištění kůže' },
  { id: 3, category: 'Ochrana', image: '/portfolio-03.webp', title: 'Mercedes S-Class', desc: 'Keramická ochrana' },
  { id: 4, category: 'Exteriér', image: '/portfolio-04.webp', title: 'Audi RS6', desc: 'Čištění kol' },
];

export const PARTNERS = [
  { name: 'Gyeon', logo: 'https://placehold.co/200x80/66FFCC/FFFFFF?text=GYEON&font=montserrat' },
  { name: 'Koch Chemie', logo: 'https://placehold.co/200x80/66FFCC/FFFFFF?text=KOCH&font=montserrat' },
  { name: 'Rupes', logo: 'https://placehold.co/200x80/66FFCC/FFFFFF?text=RUPES&font=montserrat' },
  { name: 'Meguiars', logo: 'https://placehold.co/200x80/66FFCC/FFFFFF?text=MEGUIARS&font=montserrat' },
  { name: 'Sonax', logo: 'https://placehold.co/200x80/66FFCC/FFFFFF?text=SONAX&font=montserrat' },
];

export const TEAM = [
  { 
    name: 'Jan Novák', 
    role: 'Vedoucí pobočky', 
    quote: '"Kvalita je pro nás na prvním místě."',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop' 
  },
  { 
    name: 'Petr Svoboda', 
    role: 'Detailing specialista', 
    quote: '"Každý detail rozhoduje o výsledku."',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop' 
  },
  { 
    name: 'Martin Dvořák', 
    role: 'Expert na interiéry', 
    quote: '"Čistý interiér je základem komfortu."',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop' 
  },
];

export const TESTIMONIALS = [
  { name: 'David M.', car: 'Mercedes S-Class', text: 'Naprosto špičková práce. Auto vypadá lépe než když jsem ho kupoval nové.' },
  { name: 'Jana K.', car: 'Porsche Macan', text: 'Skvělý přístup a perfektní čištění interiéru. Určitě se vrátím.' },
  { name: 'Tomáš R.', car: 'Audi RS6', text: 'Keramická ochrana funguje neskutečně. Profesionálové na svém místě.' },
  { name: 'Viktor P.', car: 'BMW X5', text: 'Nejlepší detailing v Praze. Oceňuji pick-up servis, ušetřilo mi to spoustu času.' },
];

export const FAQ_ITEMS = [
  { q: 'Jak dlouho trvá ruční mytí?', a: 'Základní program trvá cca 60-90 minut. Kompletní detailing může trvat 1-2 dny.' },
  { q: 'Musím se objednat předem?', a: 'Ano, pro zajištění nejvyšší kvality pracujeme pouze na objednávku.' },
  { q: 'Můžu platit kartou?', a: 'Ano, přijímáme všechny běžné platební karty i hotovost.' },
  { q: 'Je auto pojištěné?', a: 'Samozřejmě. Po celou dobu, co je vůz u nás, je plně pojištěn.' },
];

export const CONTACT_INFO = {
  address: 'Přílepská 1901, 252 63 Roztoky',
  phone: '+420 606 782 745',
  email: 'info@spectrawash.cz',
  hours: 'Po-Pá: 8:00 - 18:00',
};

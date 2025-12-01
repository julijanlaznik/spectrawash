
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
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop',
    title: 'Precizní\nruční mytí',
    subtitle: 'Šetrná péče o váš vůz. Používáme nejšetrnější\nmetody a prémiovou autokosmetiku.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop',
    title: 'Detailing interiéru',
    subtitle: 'Hloubkové tepování, čištění kůže a dezinfekce.\nVáš interiér bude opět jako nový.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1582&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1470&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1374&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop',
    description: 'Vůz si u vás vyzvedneme a vrátíme čistý.',
    details: ['Vyzvednutí vozu', 'Přistavení zpět']
  }
];

export const VOUCHERS = [
  {
    id: 1,
    title: 'Smart Care',
    price: '2 500 Kč',
    description: 'Komplexní péče o exteriér i interiér. Ideální volba pro pravidelnou údržbu vozu.',
    features: ['Šetrné ruční mytí exteriéru', 'Vyčištění interiéru a oken', 'Impregnace pneu a plastů'],
    tag: null
  },
  {
    id: 2,
    title: 'Deep Detail',
    price: '3 800 Kč',
    description: 'Hloubkový detailing pro náročné. Včetně tepování sedaček a detailního čištění.',
    features: ['Vše z balíčku Smart Care', 'Hloubkové tepování sedaček', 'Detailing kol a podběhů'],
    tag: 'Nejoblíbenější'
  },
  {
    id: 3,
    title: 'Exclusive Limit',
    price: '5 000 Kč',
    description: 'Otevřený voucher na libovolné služby. Lze využít i na keramiku či leštění laku.',
    features: ['Volný výběr služeb studia', 'Aplikace vosků a keramik', 'Možnost čerpání po částech'],
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
    thumbnail: 'https://images.unsplash.com/photo-1605218457224-b1548df2df31?q=80&w=800&auto=format&fit=crop',
    title: 'Proces mytí',
    views: '12.5k'
  },
  {
    id: 2,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=800&auto=format&fit=crop',
    title: 'Kontrola kvality',
    views: '8.2k'
  },
  {
    id: 3,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1494905998402-395d579af979?q=80&w=800&auto=format&fit=crop',
    title: 'Aplikace vosku',
    views: '15k'
  },
  {
    id: 4,
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b6d?q=80&w=800&auto=format&fit=crop',
    title: 'Detaily interiéru',
    views: '5.1k'
  }
];

export const PORTFOLIO_CATEGORIES = ['Vše', 'Exteriér', 'Interiér', 'Ochrana'];

export const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Exteriér', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1470&auto=format&fit=crop', title: 'Porsche 911', desc: 'Ruční mytí' },
  { id: 2, category: 'Interiér', image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1582&auto=format&fit=crop', title: 'BMW M5', desc: 'Čištění kůže' },
  { id: 3, category: 'Ochrana', image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1374&auto=format&fit=crop', title: 'Mercedes S-Class', desc: 'Keramická ochrana' },
  { id: 4, category: 'Exteriér', image: 'https://images.unsplash.com/photo-1493238792015-fa093a3070b6?q=80&w=1470&auto=format&fit=crop', title: 'Audi RS6', desc: 'Čištění kol' },
  { id: 5, category: 'Interiér', image: 'https://images.unsplash.com/photo-1560963689-0933eae8fb4c?q=80&w=1470&auto=format&fit=crop', title: 'Bentley', desc: 'Impregnace' },
  { id: 6, category: 'Ochrana', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1471&auto=format&fit=crop', title: 'Ferrari', desc: 'Korekce laku' },
  { id: 7, category: 'Exteriér', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1469&auto=format&fit=crop', title: 'Lamborghini', desc: 'Detailing' },
  { id: 8, category: 'Ochrana', image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1287&auto=format&fit=crop', title: 'McLaren', desc: 'PPF Fólie' },
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

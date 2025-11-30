
import { Car, ShieldCheck, Sparkles, Briefcase, MapPin, Phone, Mail, Clock, Armchair, Gift, ShoppingBag, Star, Gem, Percent, Wrench, Calendar } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Domů', path: '/' },
  { name: 'Služby', path: '/#services' },
  { name: 'Portfolio', path: '/#portfolio' },
  { name: 'O nás', path: '/#about' },
  { name: 'Shop', path: '/shop' },
  { name: 'Kontakt', path: '/#contact' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop',
    title: 'Precizní ruční mytí',
    subtitle: 'Šetrná péče o váš vůz. Používáme nejšetrnější metody a prémiovou autokosmetiku.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop',
    title: 'Detailing interiéru',
    subtitle: 'Hloubkové tepování, čištění kůže a dezinfekce. Váš interiér bude opět jako nový.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
    title: 'Keramická ochrana',
    subtitle: 'Dlouhodobá ochrana laku nanotechnologií. Extrémní lesk, hydrofobita a odolnost.',
  },
];

export const SERVICES = [
  {
    id: 'wash',
    icon: Sparkles,
    title: 'Ruční mytí a čištění interiéru',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop',
    description: 'Základní i komplexní programy údržby. Od šetrného ručního mytí karoserie až po hloubkové tepování sedaček a čištění kůže. Používáme pH neutrální chemii.',
    details: ['Šetrné ruční mytí', 'Tepování interiéru', 'Čištění a impregnace kůže', 'Detailní vysávání']
  },
  {
    id: 'paint',
    icon: Star,
    title: 'Leštění laku karoserie',
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1582&auto=format&fit=crop',
    description: 'Navrátíme vašemu vozu showroom lesk. Vícestupňové strojní leštění odstraní škrábance, oxidaci a hologramy z laku.',
    details: ['Odstranění škrábanců', 'Zvýšení lesku', 'Korekce laku', 'Odstranění hologramů']
  },
  {
    id: 'ppf',
    icon: ShieldCheck,
    title: 'Ochranné PPF fólie',
    image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=1287&auto=format&fit=crop',
    description: 'Nejúčinnější ochrana laku proti kamínkům, oděrkám a vandalismu. Čirá, samoozdravná fólie, která je na voze prakticky neviditelná.',
    details: ['Ochrana před kamínky', 'Samoozdravná schopnost', 'Záruka 5-10 let', 'Hydrofobní povrch']
  },
  {
    id: 'ceramic',
    icon: Gem,
    title: 'Keramická ochrana laku',
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=1374&auto=format&fit=crop',
    description: 'Aplikace certifikované keramiky pro extrémní lesk a ochranu před UV zářením, solí a nečistotami. Vůz se méně špiní a snadněji umývá.',
    details: ['Výdrž 1-5 let', 'Extrémní lesk', 'Chemická odolnost', 'Samočistící efekt']
  },
  {
    id: 'tint',
    icon: Percent,
    title: 'Tónování skel',
    image: 'https://images.unsplash.com/photo-1621996538531-1823772652b0?q=80&w=1470&auto=format&fit=crop',
    description: 'Profesionální instalace protislunečních fólií. Zvýšení soukromí, snížení teploty v interiéru a ochrana před UV zářením. Vše s atestem 8SD.',
    details: ['Snížení teploty', 'UV ochrana', 'Soukromí', 'Atest 8SD']
  },
  {
    id: 'pdr',
    icon: Wrench,
    title: 'Opravy důlků metodou PDR',
    image: 'https://images.unsplash.com/photo-1562259194-e952a6281735?q=80&w=1470&auto=format&fit=crop',
    description: 'Paintless Dent Repair - oprava promáčklin (např. od krupobití nebo parkování) vytahováním za studena bez nutnosti lakování.',
    details: ['Bez lakování', 'Zachování originálního laku', 'Rychlá oprava', 'Nižší náklady']
  },
  {
    id: 'pickup',
    icon: MapPin,
    title: 'Pick-up servis',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop',
    description: 'Nemáte čas k nám jezdit? Vůz si u vás vyzvedneme (doma či v kanceláři) a po dokončení služeb ho přistavíme zpět čistý.',
    details: ['Vyzvednutí vozu', 'Přistavení zpět', 'Pojištění převozu', 'Úspora času']
  }
];

export const VOUCHERS = [
  {
    id: 1,
    title: 'Program STANDARD',
    price: '1 890 Kč',
    description: 'Ideální pro pravidelnou údržbu. Důkladné mytí exteriéru a základní úklid interiéru.',
    features: ['Ruční mytí karoserie', 'Vysátí interiéru', 'Otření prachu', 'Čištění oken a zádveří']
  },
  {
    id: 2,
    title: 'Program EXCLUSIVE',
    price: '3 490 Kč',
    description: 'Kompletní péče o vůz. Zahrnuje detailní čištění interiéru a tvrdý vosk.',
    features: ['Vše z programu Standard', 'Tuhý vosk (ochrana 6 měsíců)', 'Hloubkové čištění plastů', 'Impregnace pneu a plastů']
  },
  {
    id: 3,
    title: 'Program PREMIUM',
    price: '5 990 Kč',
    description: 'Maximální péče pro náročné. Tepování sedaček nebo čištění kůže a dekontaminace laku.',
    features: ['Tepování / Čištění kůže', 'Chemická dekontaminace laku', 'Dezinfekce ozonem', 'Detailing motorového prostoru']
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
  { name: 'Gyeon', logo: 'https://placehold.co/200x80/3FD5D3/FFFFFF?text=GYEON&font=montserrat' },
  { name: 'Koch Chemie', logo: 'https://placehold.co/200x80/3FD5D3/FFFFFF?text=KOCH&font=montserrat' },
  { name: 'Rupes', logo: 'https://placehold.co/200x80/3FD5D3/FFFFFF?text=RUPES&font=montserrat' },
  { name: 'Meguiars', logo: 'https://placehold.co/200x80/3FD5D3/FFFFFF?text=MEGUIARS&font=montserrat' },
  { name: 'Sonax', logo: 'https://placehold.co/200x80/3FD5D3/FFFFFF?text=SONAX&font=montserrat' },
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

export const CONTACT_INFO = {
  address: 'Přílepská 1901, 252 63 Roztoky',
  phone: '+420 606 782 745',
  email: 'info@spectrawash.cz',
  hours: 'Po-Pá: 8:00 - 18:00',
};

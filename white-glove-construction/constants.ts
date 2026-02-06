import { Phone, Mail, MapPin, Hammer, Shovel, Flower, MessageSquare, Camera } from 'lucide-react';

export const CONTACT_INFO = {
  phone1: "435-656-1499",
  phone2: "435-229-1499",
  email: "whiteglovestg@gmail.com",
  copyright: "Copyright © 2023 White Glove Construction",
  tagline: "The Finishing Touch"
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "New Construction & Remodeling", path: "/construction" },
  { label: "Outdoor Living", path: "/outdoor-living" },
  { label: "Excavation", path: "/excavation" },
  { label: "Photo Gallery", path: "/gallery" },
  { label: "About Us", path: "/about" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact Us", path: "/contact" },
];

export const HOME_SERVICE_LIST = [
  "Home Improvements",
  "Kitchen Specialists",
  "Bath Specialists",
  "Commercial",
  "Residential"
];

// Using high-quality Unsplash images that match the description of the user's provided images
export const IMAGES = {
  kitchen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", // Luxury Kitchen
  pool: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop", // Red rock pool vibe
  glove: "https://images.unsplash.com/photo-1581594966779-99a093b16752?q=80&w=2070&auto=format&fit=crop", // Abstract 'Service' / Construction
  commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // Office/Commercial
  residential: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2069&auto=format&fit=crop", // Home interior
  finishing: "https://images.unsplash.com/photo-1558442074-3c192ebfae68?q=80&w=2070&auto=format&fit=crop" // Detail/Garden
};

export const FEATURE_CARDS = [
  {
    title: "Commercial",
    subtitle: "Business spaces built for success.",
    image: IMAGES.commercial,
    path: "/construction"
  },
  {
    title: "Residential",
    subtitle: "Homes crafted with care.",
    image: IMAGES.residential,
    path: "/construction"
  },
  {
    title: "The Finishing Touch",
    subtitle: "Detail oriented completion.",
    image: IMAGES.finishing,
    path: "/gallery"
  }
];

export const SERVICES_SUMMARY = [
  {
    title: "New Construction",
    description: "Building your dream home from the ground up with precision and care.",
    icon: Hammer
  },
  {
    title: "Kitchen Remodels",
    description: "Transforming the heart of your home into a modern masterpiece.",
    icon: MessageSquare
  },
  {
    title: "Outdoor Living",
    description: "Landscape design, water features, and decorative rock walls.",
    icon: Flower
  },
  {
    title: "Excavation",
    description: "Foundation excavation, site work, and heavy machinery services.",
    icon: Shovel
  }
];

export const EXCAVATION_DATA = {
  title: "Excavating by White Glove",
  pricing: {
    rate: "$85/hour",
    details: "Hire Machine & Operator (4 hour minimum)"
  },
  services: [
    "Foundation excavation",
    "Topsoil road base",
    "Stucco sand",
    "Service trenching",
    "Compaction",
    "Tight spaces",
    "Rock placement",
    "Decorative rock",
    "Delivery/ placement",
    "Site work"
  ]
};

export const OUTDOOR_LIVING_DATA = {
  title: "Landscaping by White Glove",
  subtitle: "Let us give your yard the finishing touch",
  services: [
    "Tear Out",
    "Root Removal",
    "Sprinkler Repair",
    "Landscape Design & Installation",
    "Decorative Rock Walls",
    "Water Features",
    "Ponds",
    "Sod Placement"
  ]
};

export const ABOUT_TEXT = {
  intro: "White Glove Construction is a Licensed General Contractor in the State of Utah that specializes in residential and commercial remodeling serving Southern Utah. We are your design/build construction company.",
  mission: "White Glove Construction is dedicated to the highest level of customer satisfaction. A key to our success is the commitment we have to first understand our customers' needs and preferences. We are passionate about providing excellence in design ideas and craftsmanship. We strive to design each project with functionality that is aesthetically pleasing. Every step of our remodeling process is performed with the end result in mind.",
  historyTitle: "HOW WHITE GLOVE GOT ITS NAME",
  history: `Kevin recalls, "As I was thinking on what name would best represent our business and what image I wanted to portray, I thought of my beginnings in this industry with my father, Max Andrew Hansen. My dad was a master painter who was known for his professionalism and attention to detail. His customers appreciated how clean and neat he performed his work. I remember my father wearing white canvas work gloves when painting to keep the sticky oil based paints off his hands. I thought the name White Glove would be a fitting way to remember the legacy my father left of always being clean and neat." White Glove's tag line, "The Finishing Touch", reflects the years of training Kevin had with his father when things had to be done "just right"!`
};

export const TEAM_DATA = [
  {
    name: "Kevin Ray Hansen",
    title: "Founder and General Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    bio: [
      "Kevin has enjoyed over 30 years experience in the construction industry. From his early beginnings as a painting contractor's son he learned the value of paying close attention to detail. He loves people and strives everyday to help them achieve their goals for their homes.",
      "Kevin Ray Hansen has great ideas and vision. He loves the challenge of bringing those ideas to fruition and loves to create. Having worked closely with customers throughout the years has given Kevin a keen sense of what does and does not make sense when remodeling. This has been reflected time and time again in his creative designs and selections of products that best meet his customer's needs."
    ]
  },
  {
    name: "Blake Hansen",
    title: "Co-owner of White Glove Construction",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: [
      "R. Blake Hansen, working side-by-side with his father, Kevin, has been with White Glove for 17 years. He understands the Finishing Touch process and continues to be a huge asset to the company and to Kevin. Blake has always loved to build and create. He has a unique ability to figure things out and understand what makes things work. He, like his father, enjoys doing the job right the first time. He is an amazing hard worker. He is tireless in his attention to detail and quality. Together, Kevin and Blake make a powerhouse team for creating dream homes and innovations to the Southern Utah community."
    ]
  }
];

export const GALLERY_SECTIONS = [
  {
    title: "Gourmet Kitchens",
    category: "Kitchens",
    description: "Heart of the home transformations.",
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
      // Rows 3 & 4
      "https://images.unsplash.com/photo-1588854337444-688dd1a53a85?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595515106969-1ce29569ff53?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601758064224-c3c5b2ff0c54?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop", // Intentionally repeating high-quality match
      "https://images.unsplash.com/photo-1556912173-3db996e160d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556909190-eccf4c8ba7ef?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    title: "Spa Bathrooms",
    category: "Bathrooms",
    description: "Relaxation and luxury combined.",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620626012053-93f2bc723386?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564540574859-0dfb63985953?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",
      // Rows 3 & 4
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558439998-e7d667c47672?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585542823812-32b0d771804e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549488344-c705c34e8315?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    title: "Elegant Interiors",
    category: "Living Spaces",
    description: "Custom living rooms, dining areas, and more.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c01?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
      // Rows 3 & 4
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210491892-03d54cc0d578?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-40891a908175?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    title: "Outdoor Living",
    category: "Landscaping",
    description: "Pools, patios, and custom hardscapes.",
    images: [
      "https://images.unsplash.com/photo-1621293954908-351529e916e9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592722212953-277d3229b0a6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628745277864-7b90b1c97e59?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598539962387-577d6110f0f4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200&auto=format&fit=crop",
      // Rows 3 & 4
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621293954908-351529e916e9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545648507-2a6217c9b09a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558442074-3c192ebfae68?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571782255866-281f62157a5c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    title: "New Construction",
    category: "Exteriors",
    description: "Modern homes built from the ground up.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-2a4d9fdd4070?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop",
      // Rows 3 & 4
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625834317364-b32c345e5480?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  {
    title: "Commercial Projects",
    category: "Commercial",
    description: "Professional spaces for modern business.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c54be3855091?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop",
      // Rows 3 & 4
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
    ]
  }
];

// Kept for backward compatibility if any component strictly requires a flat list,
// though Gallery.tsx will now use GALLERY_SECTIONS
export const GALLERY_IMAGES = [
  { src: IMAGES.kitchen, title: "Modern Luxury Kitchen", category: "Kitchen" },
  { src: IMAGES.pool, title: "Red Rock Pool", category: "Outdoor" },
  { src: IMAGES.commercial, title: "Corporate Office", category: "Commercial" },
  { src: IMAGES.residential, title: "Cozy Living Room", category: "Residential" },
  { src: IMAGES.finishing, title: "Garden Detail", category: "Outdoor" },
  { src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop", title: "Custom Cabinetry", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=2071&auto=format&fit=crop", title: "Open Concept Bath", category: "Bath" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop", title: "Master Suite", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop", title: "Modern Bathroom", category: "Bath" }
];

export const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    city: "St. George, UT",
    text: "White Glove Construction transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible!"
  },
  {
    name: "Mike Thompson",
    city: "Washington, UT",
    text: "We hired them for a pool and landscaping project. The team was professional, clean, and finished ahead of schedule."
  },
  {
    name: "Emily Davis",
    city: "Ivins, UT",
    text: "Truly the 'finishing touch' our home needed. Kevin and his team were a pleasure to work with from start to finish."
  },
  {
    name: "Robert Wilson",
    city: "Hurricane, UT",
    text: "Their commercial work is top-notch. They renovated our office space efficiently and with great style."
  }
];

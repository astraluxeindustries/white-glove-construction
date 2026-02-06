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
  glove: "/images/Infinity-pool.jpeg", // Abstract 'Service' / Construction
  commercial: "/images/IMG_2153 (1).jpg", // Office/Commercial
  residential: "/images/excellence-design-st-george (1).jpg", // Home interior
  finishing: "/images/the-finishing-touch-st-george2 (1).jpg" // Detail/Garden
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
    image: "/images/kevinsmall.jpg",
    bio: [
      "Kevin has enjoyed over 30 years experience in the construction industry. From his early beginnings as a painting contractor's son he learned the value of paying close attention to detail. He loves people and strives everyday to help them achieve their goals for their homes.",
      "Kevin Ray Hansen has great ideas and vision. He loves the challenge of bringing those ideas to fruition and loves to create. Having worked closely with customers throughout the years has given Kevin a keen sense of what does and does not make sense when remodeling. This has been reflected time and time again in his creative designs and selections of products that best meet his customer's needs."
    ]
  },
  {
    name: "Blake Hansen",
    title: "Co-owner of White Glove Construction",
    image: "/images/blake-242x300.jpg",
    bio: [
      "R. Blake Hansen, working side-by-side with his father, Kevin, has been with White Glove for 17 years. He understands the Finishing Touch process and continues to be a huge asset to the company and to Kevin. Blake has always loved to build and create. He has a unique ability to figure things out and understand what makes things work. He, like his father, enjoys doing the job right the first time. He is an amazing hard worker. He is tireless in his attention to detail and quality. Together, Kevin and Blake make a powerhouse team for creating dream homes and innovations to the Southern Utah community."
    ]
  }
];

export const GALLERY_SECTIONS = [
  {
    title: "Kitchens",
    description: "Heart of the home transformations.",
    images: [
      "/images/kitchen-countertop-fridge.jpg",
      "/images/kitchen-dining-view.jpg",
      "/images/kitchen-living-room-view-12.30.22-PM.jpg",
      "/images/kitchen-living-room-view.jpg",
      "/images/kitchen-sink-oven.jpg",
      "/images/kitchen-sitting-area.jpg",
      "/images/kitchen-span-view.jpg",
      "/images/kitchen-view-dining-remodel.jpg",
      // Rows 3 & 4
      "/images/kitchen-window-above-sink.jpeg",
      "/images/large-kitchen-view.jpg",
      "/images/mahogany-kitchen.jpeg",
      "/images/grand-kitchen-view.jpg",
      "/images/warm-kitchen.jpg", // Intentionally repeating high-quality match
      "/images/white-kitchen-remodel.jpg",
      "/images/whole-kitchen-designers.jpg",
      "/images/remodeled-kitchen-living-room-view.jpg"
    ]
  },
  {
    title: "Bathrooms",
    description: "Relaxation and luxury combined.",
    images: [
      "/images/spacious-bathroom-standup-shower.jpeg",
      "/images/stand-up-shower-in-process.jpg",
      "/images/stand-up-shower-tiled.jpg",
      "/images/tile-focus-shower-seat.jpg",
      "/images/tiled-shower-bathroom.jpg",
      "/images/tub-full-relaxer.jpg",
      "/images/white-red-black-bathroom.jpg",
      "/images/modern-tiled-bathroom.jpg",
  ],
},
{
    title: "Outdoor Living",
    category: "Landscaping",
    description: "Pools, patios, and custom hardscapes.",
    images: [
      "/images/remodel-finish-outside-home.jpeg",
      "/images/outdoor-living-backyard.jpg",
      "/images/outdoor-living-backyard-playground.png",
      "/images/outdoor-archway-landscape-improvement.jpg",
      "/images/new-custom-garage-addition.jpg",
      "/images/new-concrete-garage-improvement.jpg",
      "/images/improved-landscape-patio.jpg",
      "/images/improved-floor-entryway-casing.jpg",
],
},
  ];
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
    name: "Karen McClure",
    city: "St. George, UT",
    text: "Last year we decided to do small remodel to our house…well it turned out to be a rather large remodel. I was very pleased with the results done by Kevin Hansen, Blake, Ryan, Jared, Kevin #2, Mike, Gene, Carl, Ken, Tim and Brian. They all worked very hard on the project. We had the garage enlarged, reconfigured the kitchen and master bath. Plus, we added a Swimex pool with enclosure. All work was professionally done and I am very happy with the results. I would highly recommend White Glove Home Improvement."
  },
  {
    name: "Lori Cottam",
    city: "St. George, UT",
    text: "White Glove Home Improvements has done many projects for my family over the past few years.  They did a custom remodel of a tiny master bath that made it feel enormous! It was the pride and joy of my home! They also fixed my awful ceilings while preserving my gorgeous brick and wood walls textures! The tiny kitchen also felt huge after they raised the drop ceiling and knocked out the walls. Kevin listened to me so well that I had to learn to tell him NOT to listen to me.  His recommendations were ALWAYS better than whatever I thought I knew! And his “bedside manner” was excellent.  He always had time to ask about the family and discuss the meaning of life. I will ALWAYS call them and ALWAYS recommend them!  Thanks guys!!!"
  },
  {
    name: "Mel Hartley",
    city: "St. George, UT",
    text: "White Glove extended our living room and dining room to almost twice the size that they were. Joan and I sure enjoy the additional space. It is very well done and looks fabulous. I would definitely recommend White Glove to anyone looking for a professional looking job. I told Kevin that if he had a half dozen more workers like his son Blake, all the competition just as well leave town. They were truly pleasant to work with and if we have another project I will definitely call them again."
  },
  {
    name: "Dale and Celeste Leavitt",
    city: "St. George, UT",
    text: "Dale and I just wanted to thank you and Blake and all of those who worked on the remodel of our home.  When we began this process we were not at all sure of what we wanted the end product to look like.  We so appreciate your guidance, suggestions, and most of all your patience as we worked through this process.  You gave us ideas that we would have never thought of.  Trimming out our windows and doors changed the whole look and feel of our rooms.  We now have a beautiful entry and staircase which are stunning.  The outcome is far beyond what we could have imagined.  Our new kitchen is beautiful but it is also so functional.  All of the subcontractors were truly craftsmen.  I was never uncomfortable with any of the workers that were in my home.  We appreciate all that you did to make our home beautiful and comfortable.  We will enjoy it for many years.  We look forward to working with you again as we turn our attentions to the outside upgrades that need to be done.  Thank you again, "
  }
];

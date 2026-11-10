import type { StoreCard } from "@/utils/types";

/**
 * Education store constant data.
 * Contains product navigation, shelves with cards, and store content.
 */

/** Product category navigation links with thumbnails */
export const productLinks: [string, string][] = [
  ["Mac", "/images/store/nav-mac.png"],
  ["iPad", "/images/store/nav-ipad.png"],
  ["iPhone", "/images/store/nav-iphone.png"],
  ["Apple Watch", "/images/store/nav-watch.png"],
  ["Apple Vision Pro", "/images/store/nav-vision.png"],
  ["AirPods", "/images/store/nav-airpods.png"],
  ["AirTag", "/images/store/nav-airtag.png"],
  ["Apple TV 4K", "/images/store/nav-tv.png"],
  ["HomePod", "/images/store/nav-homepod.png"],
  ["Accessories", "/images/store/nav-accessories.png"],
  ["Apple Gift Card", "/images/store/nav-giftcard.png"],
];

/** Store shelf sections containing product cards and promotional content */
export const shelves: {
  title: string;
  subtitle: string;
  cards: StoreCard[];
}[] = [
  {
    title: "Limited-time offer.",
    subtitle: "Major must-haves.",
    cards: [
      {
        eyebrow: "LIMITED TIME",
        title: "Buy Mac or iPad with education savings, get a gift card.",
        copy: "Get up to a $150 Apple Gift Card with an eligible purchase.",
        image: "/images/store/offer-featured.jpg",
        dark: true,
        accent: true,
      },
      {
        eyebrow: "OFFER ELIGIBLE · Education Savings",
        title: "MacBook Air",
        copy: "Now supercharged by M5.",
        price: "From $1199 or $99.91/mo. for 12 mo. with education savings",
        image: "/images/store/offer-macbook-air.jpg",
      },
      {
        eyebrow: "OFFER ELIGIBLE · Education Savings",
        title: "MacBook Pro",
        copy: "Supercharged by the M5 family.",
        price: "From $1899 or $158.25/mo. for 12 mo. with education savings",
        image: "/images/store/offer-macbook-pro.jpg",
      },
      {
        eyebrow: "OFFER ELIGIBLE · Education Savings",
        title: "iPad Air",
        copy: "Now supercharged by M4.",
        price: "From $699 or $58.25/mo. for 12 mo. with education savings",
        image: "/images/store/offer-ipad-air.jpg",
      },
      {
        eyebrow: "OFFER ELIGIBLE · Education Savings",
        title: "iPad Pro",
        copy: "Mmmmm. Power.",
        price: "From $1099 or $91.58/mo. for 12 mo. with education savings",
        image: "/images/store/offer-ipad-pro.jpg",
      },
    ],
  },
  {
    title: "Education savings.",
    subtitle: "Get sorted with special pricing.",
    cards: [
      {
        eyebrow: "NEW",
        title: "MacBook Neo",
        copy: "The magic of Mac at a surprising price.",
        price: "From $599 or $49.91/mo. for 12 mo. with education savings",
        image: "/images/store/macbook-neo.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "Apple Watch Series 11",
        copy: "The ultimate way to watch your health.",
        price: "From $359 or $29.91/mo. for 12 mo. with education savings",
        image: "/images/store/watch-s11.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "iPad",
        copy: "Lovable. Drawable. Magical.",
        price: "From $429 or $35.75/mo. for 12 mo. with education savings",
        image: "/images/store/ipad.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "Mac mini",
        copy: "Size down. Power up.",
        price: "From $699 or $58.25/mo. for 12 mo. with education savings",
        image: "/images/store/mac-mini.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "Apple Watch SE 3",
        copy: "Walk it. Talk it. Track it. Love it.",
        price: "From $229 or $19.08/mo. for 12 mo. with education savings",
        image: "/images/store/watch-se.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "iPad mini",
        copy: "Single-handedly awesome.",
        price: "From $549 or $45.75/mo. for 12 mo. with education savings",
        image: "/images/store/ipad-mini.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "iMac",
        copy: "Brilllllliant.",
        price: "From $1449 or $120.75/mo. for 12 mo. with education savings",
        image: "/images/store/imac.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "Apple Watch Ultra 3",
        copy: "Personal beast.",
        price: "From $719 or $59.91/mo. for 12 mo. with education savings",
        image: "/images/store/watch-ultra.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "Mac Studio",
        copy: "More power to you.",
        price: "From $2299 or $191.58/mo. for 12 mo. with education savings",
        image: "/images/store/mac-studio.jpg",
      },
    ],
  },
  {
    title: "Additional ways to save.",
    subtitle: "For college students, educators, and more.",
    cards: [
      {
        title: "Learn about education savings available only at Apple.",
        copy: "Special pricing on Mac, iPad, and more.",
        image: "/images/store/edu-offer.jpg",
      },
      {
        title: "Explore accessories with education savings.",
        copy: "Find essentials for class, campus, and everything after.",
        image: "/images/store/ipad-accessories.jpg",
      },
      {
        eyebrow: "APPLE CREATOR STUDIO",
        title: "$2.99 per month for students and educators.",
        copy: "Creative apps for video, music, images, and productivity.",
        image: "/images/store/creator-studio.jpg",
      },
      {
        eyebrow: "APPLE MUSIC",
        title: "Apple Music Student Plan comes with Apple TV for free.",
        copy: "Enjoy both services at a special student rate.",
        image: "/images/store/apple-music.jpg",
        dark: true,
      },
      {
        eyebrow: "APPLECARE+",
        title: "We've got you covered.",
        copy: "Save up to 10% on select AppleCare+ plans with education pricing.",
        image: "/images/store/applecare-education.jpg",
      },
    ],
  },
  {
    title: "The Apple Store difference.",
    subtitle: "Even more reasons to shop with us.",
    cards: [
      {
        eyebrow: "APPLE TRADE IN",
        title: "Trade in your current device. Get credit toward a new one.",
        image: "/images/store/trade-in.jpg",
      },
      {
        eyebrow: "APPLE CARD",
        title: "Pay in full or pay over time. Your choice.",
        image: "/images/store/apple-card.jpg",
      },
      {
        eyebrow: "CUSTOMIZE YOUR MAC",
        title: "Build it just the way you want.",
        copy: "Choose your memory, storage, and more.",
        image: "/images/store/customize-mac.jpg",
      },
      {
        eyebrow: "FREE ENGRAVING",
        title: "Make them yours.",
        copy: "Engrave a mix of emoji, names, and numbers for free.",
        image: "/images/store/engraving.jpg",
      },
      {
        eyebrow: "APPLE SPECIALIST",
        title: "Shop one on one with a Specialist.",
        copy: "Online or in store, get help finding what's right for you.",
        image: "/images/store/store-specialist.jpg",
      },
      {
        eyebrow: "PERSONAL SETUP",
        title: "Set up your new device with a Specialist.",
        copy: "Get one-on-one guidance to make your device feel like yours.",
        image: "/images/store/personal-setup.jpg",
      },
    ],
  },
  {
    title: "Accessories.",
    subtitle: "Find your study buddies.",
    cards: [
      {
        eyebrow: "ACCESSORIES",
        title: "Find your study buddies.",
        copy: "Discover campus-ready essentials for Mac, iPad, and iPhone.",
        image: "/images/store/accessories.png",
      },
      {
        title: "mophie Check Case for iPhone 17 Pro",
        price: "$59.95",
        image: "/images/store/accessory-mophie.jpg",
        product: true,
      },
      {
        eyebrow: "FREE ENGRAVING",
        title: "AirPods 4",
        price: "$129.00",
        image: "/images/store/accessory-airpods-4.jpg",
        product: true,
      },
      {
        title: "Smart Folio for iPad Air 11-inch (M4) – Denim",
        price: "$79.00",
        image: "/images/store/accessory-folio.jpg",
        product: true,
      },
      {
        eyebrow: "NEW",
        title: "iPhone 17 Silicone Case with MagSafe – Electric Lavender",
        price: "$49.00",
        image: "/images/store/accessory-iphone-case.jpg",
        product: true,
      },
      {
        eyebrow: "EDUCATION SAVINGS · FREE ENGRAVING",
        title: "Apple Pencil Pro",
        price: "$119.00",
        image: "/images/store/accessory-pencil.jpg",
        product: true,
      },
      {
        eyebrow: "EDUCATION SAVINGS",
        title: "Magic Keyboard for iPad Pro 13-inch (M5)",
        price: "$329.00",
        image: "/images/store/accessory-keyboard.jpg",
        product: true,
      },
    ],
  },
  {
    title: "Endless potential.",
    subtitle: "Take teaching and learning further with Apple.",
    cards: [
      {
        eyebrow: "APPLE FOR COLLEGE",
        title: "Major. In any field.",
        copy: "No matter what you study, ace it with Mac and iPad.",
        image: "/images/store/college.jpg",
      },
      {
        eyebrow: "APPLE EDUCATION COMMUNITY",
        title: "Empowering teachers to inspire students.",
        copy: "Get free resources and fresh ideas for teaching with Apple.",
        image: "/images/store/community.jpg",
        dark: true,
      },
      {
        eyebrow: "COLLEGE ESSENTIALS",
        title: "Powerful tools for every assignment.",
        copy: "Study, create, collaborate, and stay organized.",
        image: "/images/store/college-essentials.jpg",
      },
      {
        eyebrow: "SUCCESS STORIES",
        title: "Explore stories from students and educators.",
        copy: "Get inspired by people using Apple to make a difference.",
        image: "/images/store/success-stories.jpg",
        dark: true,
      },
      {
        eyebrow: "LEARN TO BUILD APPS",
        title: "Study up on Swift.",
        copy: "Learn the language behind apps across Apple platforms.",
        image: "/images/store/swift.jpg",
        dark: true,
      },
      {
        eyebrow: "CAREERS",
        title: "Set your sights high.",
        copy: "Explore career connections, placement opportunities, and jobs.",
        image: "/images/store/careers.jpg",
      },
    ],
  },
  {
    title: "More to love.",
    subtitle: "Find your new favorites.",
    cards: [
      {
        title: "iPhone 17 Pro",
        copy: "All out Pro.",
        price: "From $1099 or $45.79/mo. for 24 mo.",
        image: "/images/store/iphone-17-pro.jpg",
      },
      {
        eyebrow: "FREE ENGRAVING",
        title: "AirPods Max 2",
        copy: "New intelligent features. More immersive listening.",
        price: "$549 or $91.50/mo. for 6 mo.",
        image: "/images/store/airpods-max.jpg",
      },
      {
        title: "iPhone 17",
        copy: "Magichromatic.",
        price: "From $799 or $33.29/mo. for 24 mo.",
        image: "/images/store/iphone-17.jpg",
      },
      {
        title: "iPhone 17e",
        copy: "Feature stacked. Value packed.",
        price: "From $599 or $24.95/mo. for 24 mo.",
        image: "/images/store/iphone-17e.jpg",
      },
      {
        title: "iPhone Air",
        copy: "The thinnest iPhone ever.",
        price: "From $999 or $41.62/mo. for 24 mo.",
        image: "/images/store/iphone-air.jpg",
      },
      {
        title: "AirTag",
        copy: "The most findable AirTag yet.",
        price: "From $29.00",
        image: "/images/store/airtag.jpg",
      },
      {
        title: "Apple Vision Pro",
        copy: "A powerful M5 chip. A comfortable new Dual Knit Band.",
        price: "From $3699 or $308.25/mo. for 12 mo.",
        image: "/images/store/vision-pro.jpg",
        dark: true,
      },
    ],
  },
  {
    title: "The Apple experience.",
    subtitle: "Balance work and play with apps and services.",
    cards: [
      {
        title: "Apple Intelligence.",
        copy: "Create, communicate, and get things done effortlessly.",
        image: "/images/store/apple-intelligence.jpg",
      },
      {
        eyebrow: "TODAY AT APPLE",
        title: "Explore Apple Intelligence",
        copy: "Come try it for yourself in a free session at the Apple Store.",
        image: "/images/store/today-at-apple.jpg",
      },
      {
        eyebrow: "APPLECARE",
        title: "Handled with AppleCare.",
        copy: "Protect one product with AppleCare+ or multiple with AppleCare One.",
        image: "/images/store/applecare.jpg",
      },
      {
        eyebrow: "APPLE ONE",
        title: "Six Apple services. One easy subscription.",
        copy: "Bundle the services you love for one lower monthly price.",
        image: "/images/store/subscriptions.jpg",
      },
      {
        eyebrow: "ICLOUD+",
        title: "Get the storage you need and privacy you deserve.",
        copy: "Keep photos, files, and more secure and available everywhere.",
        image: "/images/store/icloud.jpg",
      },
    ],
  },
];

export const site = {
  title: "George Madrid Magic",
  tagline: "Make your party unforgettable!",
  domain: "georgemadridmagic.com",
  instagramUrl: "https://www.instagram.com/georgemadridmagic/",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "George Madrid Magic",
  subheadline: "Make your party unforgettable!",
  body:
    "Create unbelievable magical experiences at your gathering that people will talk about for years. Your guests will laugh, cheer, and be amazed as they enjoy unforgettable interactive magic at your private party or corporate event. Bring people together through the power of magic and laughter.",
  ctaLabel: "Discuss your event",
  ctaHref: "#contact",
};

export const services = [
  {
    title: "Strolling Comedy Magic",
    body:
      "Experience engaging and memorable interactions as George mingles with your guests and performs close-up comedy magic. It's the perfect icebreaker to kick off a party or light up a cocktail hour, setting the tone for a successful event. Your guests will be surprised, amazed, and thoroughly entertained, leaving them with an unforgettable experience.",
    icon: "strolling",
  },
  {
    title: "Parties & Private Events",
    body:
      "Make your party a huge success with our captivating performance of family-friendly, interactive magic! Our fast-paced show will keep your guests engaged and entertained, creating a memorable and enjoyable experience for everyone. We deliver a spectacular performance that will leave a lasting impression, ensuring your guests will be talking about your party for years to come.",
    icon: "parties",
  },
  {
    title: "Corporate Events",
    body:
      "Looking to boost collaboration and inspire creativity at your next corporate event? Our entertainment experience is designed to do just that. With magic, comedy, and non-stop fun, we'll create an atmosphere that encourages interaction and fosters new relationships, making your team more effective. Say goodbye to boring corporate events and hello to a night of memories that will benefit your team.",
    icon: "corporate",
  },
] as const;

export const testimonials = [
  {
    quote:
      "No one will remember your charcuterie board but they will remember George's magic.",
    name: "David L.",
    location: "Cambridge, MA",
  },
  {
    quote: "One of the biggest douchebags I've ever seen on stage.",
    name: "Ben T.",
    location: "Toronto, Canada",
  },
  {
    quote: "George blew us away!",
    name: "Mike P.",
    location: "Los Angeles, CA",
  },
] as const;

export const about = {
  headline: "George Madrid",
  subheadline: "The man behind the magic.",
  body:
    "George recently left the tech industry after 30 memorable years, and he is now ready for some magic. As a Boston-based magician, he is dedicated to making parties as memorable and enjoyable as possible. George initially learned magic to entertain his son when his wife became pregnant, and he now loves seeing the awe-struck and entertained faces of his audience. In addition to performing, George is a Founding Producer, Performer, and Emcee at The Boston Magic Lab.",
  bostonMagicLabUrl: "https://www.bostonmagiclab.com/",
};

export const contactForm = {
  heading: "Make your next event memorable!",
  submitLabel: "Let's Get Started",
  confirmation:
    "Thanks so much for reaching out! Let's make your next event a big success with your guests. I'll be in touch soon with a response to your request.",
  endpoint: "https://formspree.io/f/xqeopkjv",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true, half: true },
    { name: "lastName", label: "Last Name", type: "text", required: true, half: true },
    { name: "email", label: "Email", type: "email", required: true, half: true },
    { name: "phone", label: "Phone", type: "tel", required: false, half: true },
    { name: "eventDate", label: "Event Date", type: "date", required: false, half: true },
    { name: "eventType", label: "Type of Event", type: "text", required: false, half: true },
    { name: "guestCount", label: "Approximate Guest #", type: "number", required: false, half: true },
    { name: "budget", label: "Budget", type: "text", required: false, half: true },
    { name: "location", label: "City & State of Event", type: "text", required: false, half: false },
    { name: "description", label: "Tell me more about your event", type: "textarea", required: false, half: false },
  ],
} as const;

export const footer = {
  copyright: "© 2026 George Madrid · Original design by Ashley Lesperance",
  photoCredit: "Photos by Peter Paradoxx",
};

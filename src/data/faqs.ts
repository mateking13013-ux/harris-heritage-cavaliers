export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Are Cavalier King Charles Spaniels good family dogs?',
    answer: 'Absolutely! Cavalier King Charles Spaniels are one of the best family breeds. They are gentle, affectionate, and patient with children. They thrive on human companionship and get along wonderfully with other pets. At Harris Heritage Cavaliers, we socialize all our puppies from birth so they arrive confident and well-adjusted for family life.'
  },
  {
    question: 'Do your puppies come vaccinated?',
    answer: 'Yes, all of our puppies are delivered with an up-to-date vaccination record, including age-appropriate DHPP vaccines. They also receive a complete deworming protocol before going home. At Harris Heritage Cavaliers, we work with trusted veterinarians to ensure each puppy arrives at its new home in perfect health.'
  },
  {
    question: 'What is included in the price of a puppy?',
    answer: 'The price includes an up-to-date vaccination record, microchip identification, internal and external deworming, a veterinary health certificate, AKC registration paperwork, and a welcome kit with a sample of the food your puppy is currently eating plus a breed-specific care guide.'
  },
  {
    question: 'Do you ship puppies across the United States?',
    answer: 'Yes, we offer safe shipping throughout the United States and Canada. We use professional in-cabin flight nanny services to ensure your puppy travels safely and comfortably. Airport delivery typically costs $185–$240 depending on location. We always recommend pickup in person when possible, but understand that is not always feasible.'
  },
  {
    question: 'What health testing do your breeding dogs undergo?',
    answer: 'All of our breeding Cavaliers undergo comprehensive health testing including OFA Heart certification (echocardiogram by a board-certified cardiologist), CERF Eye examination, OFA Patella evaluation, and DNA testing for Curly Coat Dry Eye Syndrome and Episodic Falling Syndrome. We are committed to breeding the healthiest Cavaliers possible.'
  },
  {
    question: 'Are your puppies socialized?',
    answer: 'All of our puppies are raised in our home and socialized from the earliest weeks with people of all ages, household sounds, and everyday stimuli. Cavalier King Charles Spaniels respond especially well to early socialization, developing a confident and loving temperament. Every puppy from Harris Heritage Cavaliers is delivered accustomed to human contact, everyday sounds, and crate training basics.'
  },
  {
    question: 'Do you offer a health guarantee?',
    answer: 'Yes, we provide a written health guarantee that covers congenital and hereditary conditions for the first two years of your puppy\'s life. Before delivery, every puppy undergoes a complete veterinary examination. Our breeding dogs are health tested for breed-specific conditions including MVD (Mitral Valve Disease), Syringomyelia, Episodic Falling, and Curly Coat Dry Eye. If any covered health issue is detected, we are committed to providing a fair and responsible resolution.'
  },
  {
    question: 'Can I visit before purchasing a puppy?',
    answer: 'Of course! We encourage all prospective families to visit Harris Heritage Cavaliers by appointment to see our home, meet the parents of our litters, and spend time with available puppies. You can see firsthand how we raise our Cavalier King Charles Spaniels in a clean, enriched, and loving environment. Visits are the best way to ensure you are choosing the perfect companion for your home.'
  }
];

export interface Expense {
  item: string;
  cost: string;
}

export const expenses: Expense[] = [
  { item: 'Food', cost: '$40 – $80' },
  { item: 'Treats', cost: '$10 – $25' },
  { item: 'Veterinary Care', cost: '$30 – $60' },
  { item: 'Pet Insurance', cost: '$30 – $60' },
  { item: 'Grooming & Care', cost: '$20 – $50' },
  { item: 'Toys', cost: '$10 – $25' },
  { item: 'Supplies (bed, crate, etc.)', cost: '$15 – $30' },
  { item: 'Miscellaneous', cost: '$10 – $25' }
];

export interface ExpenseNote {
  label: string;
  text: string;
}

export const expenseNotes: ExpenseNote[] = [
  { label: 'Food', text: 'Cost can vary depending on the brand and dietary needs; Cavaliers may benefit from breed-specific or heart-healthy formulas.' },
  { label: 'Veterinary Care', text: 'Includes routine checkups, annual vaccines, heartworm prevention, and preventive care recommended by your veterinarian.' },
  { label: 'Pet Insurance', text: 'Price varies by coverage and provider; some policies also cover hereditary conditions common in Cavaliers such as MVD.' },
  { label: 'Grooming & Care', text: 'Cavaliers have medium-length silky coats that require regular brushing and occasional professional grooming, especially around the ears and feathering.' },
];

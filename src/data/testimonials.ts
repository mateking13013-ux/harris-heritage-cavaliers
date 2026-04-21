export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  image: string;
  puppyName: string;
  text: string;
}

export interface TestimonialPreview {
  initials: string;
  name: string;
  rating: number;
  text: string;
  location: string;
  timeAgo: string;
}

export const testimonialImages = [
  '/images/testimonials/t1.jpeg',
  '/images/testimonials/t2.jpeg',
  '/images/testimonials/t3.jpeg',
  '/images/testimonials/t4.jpeg',
  '/images/testimonials/t5.jpeg',
  '/images/testimonials/t6.jpeg',
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Nashville, TN',
    rating: 5,
    image: '/images/testimonials/t1.jpeg',
    puppyName: 'Biscuit',
    text: "Biscuit is the sweetest Cavalier puppy we could have ever wished for. He arrived healthy, happy, and already socialized. The team at Harris Heritage Cavaliers guided us every step of the way with feeding and care. We couldn't be more thrilled."
  },
  {
    name: 'Lauren P.',
    location: 'Charlotte, NC',
    rating: 5,
    image: '/images/testimonials/t2.jpeg',
    puppyName: 'Daisy',
    text: "Daisy has the most incredible temperament. From the moment she arrived home she adapted perfectly and gets along great with the whole family. The process with Harris Heritage Cavaliers was transparent and professional from start to finish."
  },
  {
    name: 'David & Ana R.',
    location: 'Austin, TX',
    rating: 5,
    image: '/images/testimonials/t3.jpeg',
    puppyName: 'Cooper',
    text: "Cooper is our little Cavalier and he is pure love. We picked him up at the airport and it was love at first sight. The veterinary documentation was complete and the after-sale follow-up has been excellent."
  },
  {
    name: 'Christina V.',
    location: 'Denver, CO',
    rating: 5,
    image: '/images/testimonials/t4.jpeg',
    puppyName: 'Luna',
    text: "Luna is a beautiful Cavalier with an amazing personality. She's affectionate, playful, and has become the queen of the house. Harris Heritage Cavaliers made the entire process so easy and gave us really useful tips."
  },
  {
    name: 'Eric S.',
    location: 'Portland, OR',
    rating: 5,
    image: '/images/testimonials/t5.jpeg',
    puppyName: 'Winston',
    text: "Winston is a Cavalier with incredible energy. He's playful, loving, and has already mastered his training basics. You can tell Harris Heritage Cavaliers raises their puppies with so much love. Best decision I've ever made."
  },
  {
    name: 'Carmen D.',
    location: 'Scottsdale, AZ',
    rating: 5,
    image: '/images/testimonials/t6.jpeg',
    puppyName: 'Oliver',
    text: "Oliver is a sweet Cavalier puppy who has filled our home with joy. Our kids are absolutely fascinated with him. Harris Heritage Cavaliers delivered all the paperwork and a very complete welcome kit."
  }
];

export const testimonialPreviews: TestimonialPreview[] = [
  {
    initials: 'SM',
    name: 'Sarah M.',
    rating: 5,
    text: "Biscuit stole our hearts from the very first moment. He arrived healthy, sociable, and with a gorgeous coat. The team at Harris Heritage Cavaliers guided us through everything.",
    location: 'Nashville, TN',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'LP',
    name: 'Lauren P.',
    rating: 5,
    text: "Daisy adapted perfectly from the first day. The process with Harris Heritage Cavaliers was transparent and professional from start to finish.",
    location: 'Charlotte, NC',
    timeAgo: '1 month ago'
  },
  {
    initials: 'DA',
    name: 'David & Ana R.',
    rating: 5,
    text: "Cooper is pure love. The veterinary documentation was complete and the after-sale follow-up has been excellent. Highly recommended.",
    location: 'Austin, TX',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'CV',
    name: 'Christina V.',
    rating: 5,
    text: "Luna has become the queen of the house. Harris Heritage Cavaliers made the entire process so easy and gave us really useful tips.",
    location: 'Denver, CO',
    timeAgo: '1 month ago'
  },
  {
    initials: 'ES',
    name: 'Eric S.',
    rating: 5,
    text: "Winston has incredible energy. You can tell Harris Heritage Cavaliers raises their puppies with so much love. Best decision I've ever made.",
    location: 'Portland, OR',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'CD',
    name: 'Carmen D.',
    rating: 5,
    text: "Oliver has filled our home with joy. Our kids are fascinated with him. The welcome kit was very complete.",
    location: 'Scottsdale, AZ',
    timeAgo: '3 weeks ago'
  }
];

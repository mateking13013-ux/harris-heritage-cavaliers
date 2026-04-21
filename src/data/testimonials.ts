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
  '/images/testimonials/t1.jpeg',
  '/images/testimonials/t2.jpeg',
  '/images/testimonials/t3.jpeg',
  '/images/testimonials/t4.jpeg',
  '/images/testimonials/t5.jpeg',
  '/images/testimonials/t6.jpeg',
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
  },
  {
    name: 'Jason T.',
    location: 'Raleigh, NC',
    rating: 5,
    image: '/images/testimonials/t1.jpeg',
    puppyName: 'Charlie',
    text: "Charlie is an incredible Cavalier with a regal presence. He's intelligent, curious, and has adapted perfectly. The entire process with Harris Heritage Cavaliers was professional and personal. I would recommend them without hesitation."
  },
  {
    name: 'Mike & Laura H.',
    location: 'Atlanta, GA',
    rating: 5,
    image: '/images/testimonials/t2.jpeg',
    puppyName: 'Penny',
    text: "Penny is our Cavalier girl and she is pure love. We picked her up at the airport and it was love at first sight. The transport was impeccable and she arrived calm and healthy. Harris Heritage Cavaliers exceeded all our expectations."
  },
  {
    name: 'Elena B.',
    location: 'San Diego, CA',
    rating: 5,
    image: '/images/testimonials/t3.jpeg',
    puppyName: 'Ruby',
    text: "Ruby is a gorgeous Cavalier with soft fur and captivating eyes. She's sweet, sociable, and gets along great with our other dog. The experience with Harris Heritage Cavaliers has been fantastic. Personalized attention and incredible follow-up."
  },
  {
    name: 'Adrian G.',
    location: 'Dallas, TX',
    rating: 5,
    image: '/images/testimonials/t4.jpeg',
    puppyName: 'Teddy',
    text: "Teddy is a Cavalier with a charming personality. He's calm, cuddly, and loves to snuggle on the couch. The whole process was so easy thanks to Harris Heritage Cavaliers. The genetic quality and socialization are unbeatable."
  },
  {
    name: 'Peter & Mark A.',
    location: 'Tampa, FL',
    rating: 5,
    image: '/images/testimonials/t5.jpeg',
    puppyName: 'Archie',
    text: "Archie is a Cavalier puppy full of energy and mischief. He's our first dog and Harris Heritage Cavaliers guided us through everything as first-time owners. The welcome kit was a huge help. We couldn't be more grateful."
  },
  {
    name: 'Mei L.',
    location: 'Seattle, WA',
    rating: 5,
    image: '/images/testimonials/t6.jpeg',
    puppyName: 'Willow',
    text: "Willow is a Cavalier with an incredible character. She's affectionate, sociable, and always seeks human contact. She arrived healthy and with all paperwork in order. Harris Heritage Cavaliers truly cares about every puppy."
  },
  {
    name: 'Yuki N.',
    location: 'Chicago, IL',
    rating: 5,
    image: '/images/testimonials/t1.jpeg',
    puppyName: 'Milo & Lola',
    text: "We adopted two Cavalier puppies, Milo and Lola, and they are inseparable. They arrived in perfect condition and adapted from day one. The Harris Heritage Cavaliers team organized all the transport flawlessly. They are the joy of our home."
  },
  {
    name: 'Rob & Daniel F.',
    location: 'Phoenix, AZ',
    rating: 5,
    image: '/images/testimonials/t2.jpeg',
    puppyName: 'Bentley',
    text: "Bentley is a Cavalier with the most beautiful coat. He's super intelligent and playful, already learned several tricks. You can see the dedication of Harris Heritage Cavaliers in every detail. The whole neighborhood stops to ask about him."
  },
  {
    name: 'Paul C.',
    location: 'Minneapolis, MN',
    rating: 5,
    image: '/images/testimonials/t3.jpeg',
    puppyName: 'Bella',
    text: "Bella is a beautiful Cavalier with a sweet and adventurous character. She's my perfect companion, always by my side. Communication with Harris Heritage Cavaliers was excellent throughout the process. They sent photos and videos before pickup."
  },
  {
    name: 'Fernando & Teresa O.',
    location: 'Houston, TX',
    rating: 5,
    image: '/images/testimonials/t4.jpeg',
    puppyName: 'Duke',
    text: "Duke is a Cavalier puppy with an incredible personality. He's affectionate with the whole family and gets along great with the kids. This is our second puppy from Harris Heritage Cavaliers and the experience has been equally wonderful."
  },
  {
    name: 'Valentina R.',
    location: 'Miami, FL',
    rating: 5,
    image: '/images/testimonials/t5.jpeg',
    puppyName: 'Sophie',
    text: "Sophie is my little Cavalier and she is one of a kind. She has a fascinating personality and is incredibly affectionate. The adoption process was flawless and Harris Heritage Cavaliers gave me total confidence from the very first moment."
  },
  {
    name: 'Marco J.',
    location: 'Las Vegas, NV',
    rating: 5,
    image: '/images/testimonials/t6.jpeg',
    puppyName: 'Henry',
    text: "Henry is a Cavalier with an enormous heart. He's calm, loving, and has a gorgeous coat. Harris Heritage Cavaliers exceeded my expectations with their professionalism and warmth. I'm already thinking about adopting another."
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
  },
  {
    initials: 'JT',
    name: 'Jason T.',
    rating: 5,
    text: "Charlie has adapted perfectly. The entire process with Harris Heritage Cavaliers was professional and personal. I would recommend them without hesitation.",
    location: 'Raleigh, NC',
    timeAgo: '1 month ago'
  },
  {
    initials: 'ML',
    name: 'Mike & Laura H.',
    rating: 5,
    text: "Penny is pure love. We picked her up at the airport and it was love at first sight. Harris Heritage Cavaliers exceeded all our expectations.",
    location: 'Atlanta, GA',
    timeAgo: '2 months ago'
  },
  {
    initials: 'EB',
    name: 'Elena B.',
    rating: 5,
    text: "Ruby gets along great with our other dog. The experience with Harris Heritage Cavaliers has been fantastic. Personalized attention and incredible follow-up.",
    location: 'San Diego, CA',
    timeAgo: '6 weeks ago'
  },
  {
    initials: 'AG',
    name: 'Adrian G.',
    rating: 5,
    text: "Teddy is calm, cuddly, and loves to snuggle. The genetic quality and socialization at Harris Heritage Cavaliers are unbeatable.",
    location: 'Dallas, TX',
    timeAgo: '4 weeks ago'
  },
  {
    initials: 'PM',
    name: 'Peter & Mark A.',
    rating: 5,
    text: "Archie is full of energy and mischief. Harris Heritage Cavaliers guided us through everything as first-time owners. We couldn't be more grateful.",
    location: 'Tampa, FL',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'ML',
    name: 'Mei L.',
    rating: 5,
    text: "Willow is affectionate, sociable, and always seeks human contact. Harris Heritage Cavaliers truly cares about every puppy.",
    location: 'Seattle, WA',
    timeAgo: '3 weeks ago'
  },
  {
    initials: 'YN',
    name: 'Yuki N.',
    rating: 5,
    text: "We adopted two Cavalier puppies, Milo and Lola, and they are inseparable. The team organized all the transport perfectly. They are the joy of our home.",
    location: 'Chicago, IL',
    timeAgo: '1 month ago'
  },
  {
    initials: 'RD',
    name: 'Rob & Daniel F.',
    rating: 5,
    text: "Bentley is super intelligent and playful. You can see the dedication of Harris Heritage Cavaliers in every detail. The whole neighborhood asks about him.",
    location: 'Phoenix, AZ',
    timeAgo: '5 weeks ago'
  },
  {
    initials: 'PC',
    name: 'Paul C.',
    rating: 5,
    text: "Bella is my perfect companion. Communication with Harris Heritage Cavaliers was excellent. They sent photos and videos before pickup.",
    location: 'Minneapolis, MN',
    timeAgo: '2 weeks ago'
  },
  {
    initials: 'FT',
    name: 'Fernando & Teresa O.',
    rating: 5,
    text: "Duke is affectionate with the whole family. This is our second puppy from Harris Heritage Cavaliers and the experience has been equally wonderful.",
    location: 'Houston, TX',
    timeAgo: '1 month ago'
  },
  {
    initials: 'VR',
    name: 'Valentina R.',
    rating: 5,
    text: "Sophie is one of a kind. The adoption process was flawless and Harris Heritage Cavaliers gave me total confidence from the very first moment.",
    location: 'Miami, FL',
    timeAgo: '4 weeks ago'
  },
  {
    initials: 'MJ',
    name: 'Marco J.',
    rating: 5,
    text: "Henry has an enormous heart. Harris Heritage Cavaliers exceeded my expectations with their professionalism and warmth. Already thinking about adopting another.",
    location: 'Las Vegas, NV',
    timeAgo: '2 weeks ago'
  }
];

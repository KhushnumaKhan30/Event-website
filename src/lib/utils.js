import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn (...inputs) {
  return twMerge (clsx (inputs));
}
/*---------------------------
    Event location:
----------------------------*/
export const Location = 'Dept. Of Computer Science (AMU)';

/*****************************
 *    Media etc
 **************************/
export const PhoneNo = 8171727590;
export const email = 'society.cs@myamu.ac.in';
export const instagramLink = 'https://www.instagram.com/css.amu/';
export const linkedinLink =
  'https://www.linkedin.com/company/cssamu/posts/?feedView=all';
export const facebookLink =
  'https://www.facebook.com/computersciencesocietyamu/';
export const whatsapp = '';

/**
 *    hero section images:
 */
export const imgs = [
  'https://res.cloudinary.com/sameerkhan/image/upload/v1742641849/CSS/20231009_154905_txbhwf.jpg',
  'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
  'https://res.cloudinary.com/sameerkhan/image/upload/v1742641182/CSS/IMG-20231009-WA0009_xii5jl.jpg',
  'https://res.cloudinary.com/sameerkhan/image/upload/v1742641225/CSS/20231009_160347_vecvxy.jpg',
];

/**
 *  ABOUT PAGE CONTENT
 */
export const aboutContent = [
  "The Computer Science Society (CSS) is the dynamic and official club of the Department of Computer Science at Aligarh Muslim University (AMU). With Prof. Arman Rasool Faridi as the esteemed President and Mr. Aftab Ansari as the dedicated Coordinator for this year's session, CSS continues to thrive as a hub of innovation and excellence.",
  'Founded in December 2018 as the Area of Dominant Coders (ADC), CSS has rapidly evolved into a vibrant platform for knowledge sharing, technical growth, and practical learning within the department. Our mission is to empower students with cutting-edge skills, fostering their readiness for the fast-evolving tech industry.CSS actively collaborates with the Training and Placement Office (TPO) of both the department and the university to provide students with invaluable industry insights, skill enhancement programs, and career-building opportunities.',
  'One of our hallmark initiatives, AMUHACKS, organized in collaboration with GDSC AMU, has gained significant recognition as a premier platform for innovation, creativity, and teamwork. This event attracts brilliant minds from across the country, creating a competitive yet collaborative environment where participants push the boundaries of technology.',
  'Recognized by the university in March 2021, CSS remains steadfast in its mission to nurture creativity, foster collaboration, and equip students with industry-relevant skills.',
];

/**---------------------------------------------
      Events List
----------------------------------------------**/

export const events = [
  {
    id: 1,
    title: 'Software Hackathon',
    date: '07-april-2024',
    location: 'Dept. Of Computer Science, AMU',
    time: '9.00am - 10.00 am',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522654/CSS/Hackathon_sbhcqw.jpg',
    description: 'Join us for a Hybrid Hackathon that empowers creative minds to innovate and showcase groundbreaking projects on a national stage. With free entry teams of 2 to 4 members can collaborate and bring their ideas to life. Participants must submit their prototypes by 9th April with GitHub profile or repository creation required between 7th and 9th April The Top 10 projects will be announced on 10th April leading up to the final presentation on 12th April Unleash your creativity, collaborate with like-minded innovators, and compete for top recognition in this exciting event!',
    registrationLink: '',
  },
  {
    id: 2,
    title: 'Capture The Flag',
    date: 'March_23, 2018',
    location: 'Dept. Of Computer Science, AMU',
    time: '9.00am - 10.00 am',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522713/CSS/cybersecurity-management-scaled-jpg_ivvqjy.webp',
    description: 'Capture The Flag (CTF) is an electrifying cybersecurity challenge hosted in online mode on Unstop designed to test your problem-solving and ethical hacking skills in a race against time. With an entry fee of INR 50 per team participants can compete solo or in teams of up to 2 members The event takes place on 7th April from 6:00 PM to 8:00 PM pushing contestants to their limits as they tackle complex security challenges. The results will be announced at 10:00 PM on the same day recognizing the sharpest minds in cybersecurity. Get ready to put your skills to the test and claim victory!',
    registrationLink: '',
  },
  {
    id: 3,
    title: 'Coding Compitition!',
    date: 'March_23, 2018',
    location: 'Dept. Of Computer Science, AMU',
    time: '9.00am - 10.00 am',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522771/CSS/Screen-Shot-2024-09-16-at-2.38.02-PM_msgkyw.png',
    description: "The Coding Competition is a fast-paced offline coding contest hosted on HackerRank exclusively for AMU students This thrilling challenge brings together algorithmic prowess and competitive spirit, testing participants' problem-solving skills under pressure. With an entry fee of INR 40 per person the competition takes place on 8th April from 3:00 PM to 4:00 PM Participants will battle it out to solve complex coding problems, and the results will be announced on 9th April at 6:00 PM Sharpen your coding skills and compete for glory in this high-energy contest!",
    registrationLink: '',
  },
  {
    id: 4,
    title: 'Science Tech Quiz',
    date: 'March_23, 2018',

    location: 'Dept. Of Computer Science, AMU',
    time: '9.00am - 10.00 am',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522817/CSS/hq720_krxxe4.jpg',
    description: 'The Quiz Competition introduced for the first time this year is an exciting offline battle of wits that challenges teams on their Computer Science and IT knowledge igniting a spirit of intellectual rivalry. With an entry fee of INR 100 per team, participants can compete in teams of 3 to 4 members The event takes place on 9th April from 3:00 PM to 5:00 PM at the Conference Hall, Department of Computer Science, AMU Teams will face thought-provoking questions, testing their technical expertise and quick thinking. The results will be announced at the end of the event crowning the best minds in the competition. Get ready to showcase your knowledge and claim victory!',
    registrationLink: '',
  },
];

/**
 *  EVENT PROMOTION IMAGE:
 */
export const promotionImg =
  'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg';

/***
 * 
 *    Event Team List
 * 
 */

export const teamMembers = [
  {
    category: 'Tech',
    members: [
      {
        name: 'Saad',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer Khan',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
    ],
  },{
    category: 'Sponsor',
    members: [
      {
        name: 'XYZ ',
        role: 'Sponser',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer Khan',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
    ],
  },{
    category: 'Management',
    members: [
      {
        name: 'Aftab Ansari',
        role: 'xyz',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer Khan',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
    ],
  },{
    category: 'PR',
    members: [
      {
        name: 'Random',
        role: 'MERger',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer Khan',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
    ],
  },{
    category: 'Organiser',
    members: [
      {
        name: 'contiue',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
      {
        name: 'Sameer Khan',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
        socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
      },
    ],
  },
];

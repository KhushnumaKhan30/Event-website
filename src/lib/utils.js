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
    date: '07-april-2025',
    location: 'Dept. Of Computer Science, AMU',
    time: '10:00 am',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522654/CSS/Hackathon_sbhcqw.jpg',
    description: "A hybrid hackathon that empowers creative minds to innovate and showcase groundbreaking projects on a national stage.",
    list:["💻 Mode: Online (DevFolio)","👥 Team Size: 2-4 members","💰 Entry Fee: Free","🛠 GitHub Profile/Repo Creation: Between 7th - 9th April","🚀 Prototype Submission Deadline: 9th April","🎖 Announcement of Top 10 Projects: 10th April","🏆 Final Presentation: 12th April"],
    registrationLink: '',
  },
  {
    id: 2,
    title: 'Capture The Flag: Online Mode on Unstop',
    date: '07-april, 2025',
    location: 'Dept. Of Computer Science, AMU',
    time: '6:00 pm - 8:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522713/CSS/cybersecurity-management-scaled-jpg_ivvqjy.webp',
    description: 'An electrifying cybersecurity challenge that tests your problem-solving and ethical hacking skills in a race against time',
    list:["🏴 Event Type: Capture the Flag (CTF)","👥 Team Size: 1-2 members","💰 Entry Fee: INR 50 per team","📅 Date: 7 April","⏰ Time: 6:00 PM - 8:00 PM","🏆 Result Announcement: 7 April, 10:00 PM"],
    registrationLink: '',
  },
  {
    id: 3,
    title: 'Coding Compitition!',
    date: '08-april, 2025',
    location: 'Dept. Of Computer Science, AMU',
    time: '03:00 pm - 4:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522771/CSS/Screen-Shot-2024-09-16-at-2.38.02-PM_msgkyw.png',
    description: "A fast-paced coding contest exclusively for AMU students, where algorithmic prowess meets competitive spirit.",
    list:["🖥 Platform: HackerRank (Offline Mode)","💰 Entry Fee: INR 40 per person","📅 Date: 8 April","⏰ Time: 3:00 PM - 4:00 PM","🏆 Result Announcement: 9 April, 6:00 PM"],
    registrationLink: '',
  },
  {
    id: 4,
    title: 'Quiz Competition: Offline Mode (New This Year!)',
    date: '09-april, 2025',

    location: 'Dept. Of Computer Science, AMU',
    time: '03:00 pm - 05:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522817/CSS/hq720_krxxe4.jpg',
    description: 'A riveting quiz battle that challenges teams on Computer and IT knowledge, igniting a spirit of intellectual rivalry',
    list:["📝 Mode: Offline","🆕 New Addition This Year!","🎯 Test Your Knowledge Across Various Domains","🏆 Exciting Prizes for the Winners"],
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

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
    date: '12-April-2025',
    location: 'Dept. Of Computer Science, AMU',
    time: '06:00 pm-06:00 am (36 hours)(Online)',
    eligibily:"Must Be Enrolled In Any University",
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522654/CSS/Hackathon_sbhcqw.jpg',
    description: "A hybrid hackathon that empowers creative minds to innovate and showcase groundbreaking projects on a national stage.",
    list:["💻 Mode: Online (DevFolio)","👥 Team Size: 2-4 members","💰 Entry Fee: Free","🛠 GitHub Profile/Repo Creation: Between 12th - 14th April","🚀 Prototype Submission Deadline: 14th April","🎖 Announcement of Top 10 Projects: 15th April","🏆 Final Presentation: 17th April | 3 pm"],
    registrationLink: '',
    prizes:["1st Prize: Rs. 7000","2nd Prize: Rs. 5000 ","3rd Prize: Rs. 3000"],
    pdf:"file:///C:/Users/hp/Downloads/Event&Team%20Breakdown%20(1).pdf"
  },
  {
    id: 2,
    title: 'Quiz Competition: Offline Mode',
    date: '14-April-2025',
    eligibily:"Must Be Enrolled Only In AMU",

    location: 'Dept. Of Computer Science, AMU',
    time: '03:00 pm - 05:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522817/CSS/hq720_krxxe4.jpg',
    description: 'A riveting quiz battle that challenges teams on Computer and IT knowledge, igniting a spirit of intellectual rivalry',
    list:["📝 Mode: Offline","💰 Entry Fee: INR 100 per team","👥 Team Size: 3-4 members","🎯 Test Your Knowledge Across Various Domains","🏆 Exciting Prizes for the Winners"],
    prizes:["1st Prize: Rs. 2000","2nd Prize: Rs. 1000 "],
    registrationLink: '',
  },
  {
    id: 3,
    title: 'Coding Compitition!',
    date: '15-april-2025',
    location: 'Dept. Of Computer Science, AMU',
    
    time: '03:00 pm - 5:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522771/CSS/Screen-Shot-2024-09-16-at-2.38.02-PM_msgkyw.png',
    description: "A fast-paced coding contest exclusively for students, where algorithmic prowess meets competitive spirit.",
    list:["🖥 Platform: HackerRank (Offline Mode)","💰 Entry Fee: INR 40 per person","📅 Date: 15 April","⏰ Time: 3:00 PM - 5:00 PM"],
    eligibily:"Must Be Enrolled In Any University",
    prizes:["1st Prize: Rs. 2000","2nd Prize: Rs. 1000 "],

    registrationLink: '',
  },
  
  {
    id: 4,
    title: 'Capture The Flag: Online Mode on Unstop',
    date: '15-April-2025',
    location: 'Dept. Of Computer Science, AMU',
    time: '6:00 pm - 8:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1742522713/CSS/cybersecurity-management-scaled-jpg_ivvqjy.webp',
    description: 'An electrifying cybersecurity challenge that tests your problem-solving and ethical hacking skills in a race against time',
    list:["📝 Mode: Online","🏴 Event Type: Capture the Flag (CTF)","👥 Team Size: 1-2 members","💰 Entry Fee: INR 50 per team","📅 Date: 15 April","⏰ Time: 08:00 PM - 10:00 PM"],
    prizes:["1st Prize: Rs. 2000","2nd Prize: Rs. 1000 "],
    
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

export const eventPdfLink="https://drive.google.com/file/d/1QBE5KSX7ZwJWRmcSgnEXL3e1KeB0DdMU/view?usp=sharing";

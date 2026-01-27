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
export const amuHacksLogo="/assets/ahlogo-rounded.png";
export const PhoneNo = 9807284891;
export const email = 'society.cs@myamu.ac.in';
export const instagramLink = 'https://www.instagram.com/css.amu/';
export const linkedinLink =
  'https://www.linkedin.com/company/cssamu/posts/?feedView=all';
export const facebookLink =
  'https://www.facebook.com/computersciencesocietyamu/';
export const whatsapp = 'https://chat.whatsapp.com/KqWrjWUuBtT7VLngrq3ERD';

/**
 *    hero section images:
 */
export const imgs = [
  'https://res.cloudinary.com/sameerkhan/image/upload/v1742641849/CSS/20231009_154905_txbhwf.jpg',
   '/assets/conference.jpg',
  'https://res.cloudinary.com/sameerkhan/image/upload/v1742427622/css%20club/1684217143_DSC_0255_jtnimr.jpg',
   '/assets/team.jpg',
  'https://res.cloudinary.com/sameerkhan/image/upload/v1742641182/CSS/IMG-20231009-WA0009_xii5jl.jpg',
  '/assets/award.jpg',
];

/**
 *  ABOUT PAGE CONTENT
 */
export const aboutContent = [
  "The Computer Science Society (CSS) is the dynamic and official club of the Department of Computer Science at Aligarh Muslim University (AMU). With Prof. Arman Rasool Faridi as the esteemed President and Ms.Tuba Rahman as the dedicated Coordinator for this year's session, CSS continues to thrive as a hub of innovation and excellence.",
  'Founded in December 2018 as the Area of Dominant Coders (ADC), CSS has rapidly evolved into a vibrant platform for knowledge sharing, technical growth, and practical learning within the department. Our mission is to empower students with cutting-edge skills, fostering their readiness for the fast-evolving tech industry.CSS actively collaborates with the Training and Placement Office (TPO) of both the department and the university to provide students with invaluable industry insights, skill enhancement programs, and career-building opportunities.',
  'One of our hallmark initiatives, AMUHACKS 5.0, organized in collaboration with GDSC AMU, has gained significant recognition as a premier platform for innovation, creativity, and teamwork. This event attracts brilliant minds from across the country, creating a competitive yet collaborative environment where participants push the boundaries of technology.',
  'Recognized by the university in March 2021, CSS remains steadfast in its mission to nurture creativity, foster collaboration, and equip students with industry-relevant skills.',
];

/**---------------------------------------------
      Events List
----------------------------------------------**/

export const events = [
  {
    id: 1,
    title: 'Software Hackathon',
    date: '10 February 2026',
    location: 'Virtual/Dept. Of Computer Science, AMU',
    time: '12:00 am - 6:00 pm (30 hours - Online)',
    dateForCal:"2026-02-10T18:00:00",
    eligibility:"Must Be Enrolled In Any University",
    image: 'https://www.istockphoto.com/photo/hackathon-inscription-against-laptop-and-code-background-technology-concept-gm1403622426-456115095?searchscope=image%2Cfilm',
    description: "A Online hackathon that empowers creative minds to innovate and showcase groundbreaking projects on a national stage.",
    list:["💻 Mode: Online (DevFolio)","👥 Team Size: 2-4 members","💰 Entry Fee: Free","🛠 GitHub Profile/Repo Creation: Between 10th - 11th February","🚀 Prototype Submission Deadline: 14th April","🎖 Announcement of Top 8 Projects: 13th February","🏆 Final Presentation:...."],
    registrationLink: 'https://amuhacks-4.vercel.app',
    prizes:["1st Prize: Rs. 7000","2nd Prize: Rs. 5000 ","3rd Prize: Rs. 3000"],
    pdf:"file:///C:/Users/hp/Downloads/Event&Team%20Breakdown%20(1).pdf"
  },
  {
    id: 2,
    title: 'Quiz Competition: Offline Mode',
    date: '11-February-2026',
    eligibility:"Must Be Enrolled Only In AMU",

    location: 'Dept. Of Computer Science, AMU',
    time: '03:00-4:30 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743349569/CSS/vecteezy_settings-install-maintenance-and-repair_4474423_qr426g.jpg',
    description: 'A riveting quiz battle that challenges teams on Computer and IT knowledge, igniting a spirit of intellectual rivalry',
    dateForCal:"2026-02-11T15:00:00",
    list:["📝 Mode: Offline","💰 Entry Fee: INR 100 per team","👥 Team Size: 3-4 members","🏆 Exciting Prizes for the Winners"],
    prizes:["1st Prize: Rs. 2000","2nd Prize: Rs. 1000 "],
    registrationLink: 'https://forms.gle/1CsnfFEwDxsQZnVq5',
  },
  {
    id: 3,
    title: 'Coding & Debugging competition!',
    date: '10-February-2026',
    location: 'Dept. Of Computer Science, AMU',
    
    time: '03:00-4:30 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743349474/CSS/vecteezy_man-working-with-computer-with-app-in-isometric-illustration__nmsodj.jpg',
    description: "A fast-paced coding contest exclusively for students, where algorithmic prowess meets competitive spirit.",
    dateForCal:"2026-02-10T15:00:00",
    list:["🖥 Platform: HackerRank (Offline Mode)","💰 Entry Fee: INR 40 per person","📅 Date: 10 Feb ","⏰ Time: 3:00 PM"],
    eligibility:"Must Be Enrolled In AMU",
    prizes:["1st Prize: Rs. 2000","2nd Prize: Rs. 1000 "],

    registrationLink: 'https://forms.gle/MzHFT5LeDTrJvibg6',
  },
  
  {
    id: 4,
    title: 'Capture The Flag: Online Mode on Unstop',
    date: '13-February-2026',
    location: 'Dept. Of Computer Science, AMU',
    time: '6:00-10:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743349442/CSS/vecteezy_the-team-is-designing-the-app-and-launching-it-on-a-rocket__uielr4.jpg',
    description: 'An electrifying cybersecurity challenge that tests your problem-solving and ethical hacking skills in a race against time',
    dateForCal:"2026-02-13T20:00:00",
    list:["📝 Mode: Online","🏴 Event Type: Capture the Flag (CTF)","👥 Team Size: 1-2 members","💰 Entry Fee: INR 50 per team","📅 Date: 13 Feb","⏰ Time: 08:00 PM"],
    prizes:["1st Prize: Rs. 2000","2nd Prize: Rs. 1000 "],
    eligibility:"Must Be Enrolled In Any University",
    registrationLink: 'https://unstop.com/o/OCP3bef?lb=uur0IvgQ',
  },
  
];

/**
 *  EVENT PROMOTION IMAGE:
 */
export const promotionImg =
  'https://res.cloudinary.com/sameerkhan/image/upload/v1743602285/CSS/WhatsApp_Image_2025-04-02_at_4.51.46_PM_e1jzmi.jpg';

/***
 * 
 *    Event Team List
 * 
 */

export const professor=[
  {
      name:"Prof Armaan Rasool Faridi",
      role:"President, CSS",
      profileImg:"/assets/armansir.jpg",
      socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
  },
  {
      name:"Prof Aasim Zafar",
      role:"Former President, CSS",
      profileImg:"/assets/aasimsir.jpg",
      socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
  },
  {
      name:"Dr Mohammad Nadeem",
      role:"Convener, CSS",
      profileImg:"/assets/nadeemsir.jpg",
      socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
  },
  {
      name:"Dr Faisal Anwar",
      role:"Mentor, CSS",
      profileImg:"/assets/faisalsir.jpg",
      socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
  },
  {
      name:"Dr. Faraz Masood",
      role:"Mentor, CSS",
      profileImg:"/assets/farazsir.jpg",
      socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
  },
]

export const teamMembers=[
  {
    category: 'Organising Team',
    members: [
      {
        name: 'Mr. Aftab Ansari',
        role: 'Student Mentor',
        image: '/assets/aftab.jpg',
        course:'MCA (2nd year)',
        socials: {
          linkedin: 'https://www.linkedin.com/in/aftab-ansari-774b7725a',
          github:"https://github.com/aahftab"
        },
      },
      {
        name: 'Ms. Tuba Rahman',
        role: 'Coordinator',
        image: '/assets/tuba.jpg',
        course:"B.Sc.(Research) 4th year",
        socials: {
          github: 'https://github.com/tubarahman12',
          linkedin: 'http://www.linkedin.com/in/tuba-rahman-200424255',
          instagram: '',
        },
      },
      {
        name: 'Syed Umar Ali',
        role: 'Secretary',
        course:"B.Sc.(Research) 4th year",
        image: '/assets/umar.jpg',
        socials: {
          linkedin: '',
          github:'',
          instagram: '',
        },
      },
    {
      name: 'Syed Bilal Ahmad',
      role: 'AI/ML Lead',
      course:"MCA (2nd year)",
      image: '/assets/bilal.jpg',
      socials: {
        linkedin: '',
        github:'',
        instagram:'',
      },
    },
      {
        name: 'Mohd Ali Abbas',
        role: 'CyberSecurity Lead',
        course:"M.Sc (2nd year)",
        image: '/assets/ali.jpg',
        socials: {
          linkedin: '',
          github:'',
          instagram:'',
        },
      },
      {
        name: 'Sameer Khan',
        role: 'Web Developement Lead',
        course:"MCA (2nd year)",
        image: '/assets/sameer.jpg',
        socials: {
          github:"",
          linkedin: '',
        },
      },
      {
        name: 'Saurabh Singh',
        role: 'DSA Lead',
        course:"B.Sc.(Reasearch) 4th year",
        image: '/assets/saurav.jpg',
        socials: {
          linkedin: '',
          github:'',
          instagram:'',
        },
      },
    ],
  },{
    category:"Tech Team",
    members:[
      {
        name: 'Lalit Kumar',
        role: '',
        image: '/assets/lalit.jpg',
        course:"MCA (2nd year) ",
        socials: {
          github:"",
          linkedin: '',
        },
        
      },
      {
        name: 'Mohd Amir Hasan',
        role: '',
        image: '/assets/amir.jpg',
        course:"B.Sc CS (2nd year)",
        socials: {
          github:"",
          linkedin: '',
        },
       
      },
      {
        name: 'Madni Mahmood',
        role: '',
        image: '/assets/madni.jpg',
         course:"B.Sc CS (2nd year)",
        socials: {
          github:"",
          linkedin: '',
        },
        },
      
      {
        name: 'Sadaf Shahid',
        role: '',
        image: '/assets/sadaf.jpg',
        course:"B.Sc(1st year)",
        socials: {
          github:"",
          linkedin: '',
        },
        
      },
      
    ]
  },
  {
    category:"Graphics Team",
    members:[
      {
        name: 'Homa Mahmood',
        role: '',
        image: '/assets/homa.jpg',
        course:"B.Sc. 4th year",
        socials: {
          github:"",
          linkedin: '',
        },
        
      },
      {
        name: 'Sayyada Afifa',
        role: '',
        image: '/assets/afifa.jpg',
        course:"B.Sc CS (2nd year)",
        socials: {
          github:"",
          linkedin: '',
        },
       
      },
      
      {
        name: 'Haseen Fatima',
        role: '',
        image: '/assets/haseen.jpg',
        course:"B.Sc CS (2nd year)",
        socials: {
          github:"",
          linkedin: '',
        },
        
      },
    
      {
        name: 'Shoaib Ahmad',
        role: '',
        role: 'Graphics Team',
        image: '/assets/shoaib.jpg',
        course:"B.Sc CS (3rd year)",
        socials: {
          github:"https://github.com/Shoaib-Ahmad-19",
          linkedin: 'https://www.linkedin.com/in/shoaib-ahmad-876763277',
          instagram: '',
        },
      },
      {
        name: 'Musaib Bin Sameer',
        role: '',
        image: '/assets/musaib.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"",
          linkedin: '',
        },
        
      }
    ]
    },
    
    {
    category:"PR Team",
    members:[
       {
        name: 'Ahmad Mustafa Khowaja',
        role: '',
        image: '/assets/ahmad.jpg',
        course:"B.Sc CS (2nd year)",
        socials: {
          github:"",
          linkedin: '',
        },
       
      },

      {
        name: 'Mohammad Areeb',
        role: '',
        image: '/assets/areeb.jpg',
        course:"B.Sc CS (2nd year)",
        socials: {
          github:"",
          linkedin: '',
        },
        
      },
      {
        name: 'Maria Ali',
        role: '',
        image: '/assets/maria.jpg',
        course:"B.Sc CS (1st,{} year)",
        socials: {
          github:"",
          linkedin: '',
        },
      },
      {
        name: 'Nuwaira Noor',
        role: '',
        image: '/assets/nuwaira.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"",
          linkedin: '',
        },

      },
      {
        name: 'Efa Arif',
        role: '',
        image: '/assets/efa.jpg',
        course:"B.Sc CS (4th year)",
        socials: {
          github:"",
          linkedin: '',
        },


      },

    ]
  },
  
  {
    category:"Volunteer Team",
    members:[
      {
        name: 'Mohd Aquib',
        role: '',
        image: '/assets/aquib.jpg',
        course:"B.Sc CS (4th year)",
        socials: {
          github:"",
          linkedin: '',
        },

  },
  {
        name: 'Zanul Abideen',
        role: '',
        image: '/assets/zain.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"",
          linkedin: '',
        },
  },
]
  },
];

/**
 *  Event PDF Link
 */

export const eventPdfLink="https://drive.google.com/file/d/1QBE5KSX7ZwJWRmcSgnEXL3e1KeB0DdMU/view?usp=sharing";

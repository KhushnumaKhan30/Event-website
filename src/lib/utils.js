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
export const amuHacksLogo="https://res.cloudinary.com/sameerkhan/image/upload/v1743337897/CSS/17035011-a176-4391-bc18-6c28950b0150.png"
export const PhoneNo = 8171727590;
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
    time: '06:00 pm (36 hours - Online)',
    dateForCal:"2025-04-12T18:00:00",
    eligibility:"Must Be Enrolled In Any University",
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743349285/CSS/vecteezy_isometric-illustration-concept-team-discussion-about_9160177_mb9kog.jpg',
    description: "A Online hackathon that empowers creative minds to innovate and showcase groundbreaking projects on a national stage.",
    list:["💻 Mode: Online (DevFolio)","👥 Team Size: 2-4 members","💰 Entry Fee: Free","🛠 GitHub Profile/Repo Creation: Between 12th - 14th April","🚀 Prototype Submission Deadline: 14th April","🎖 Announcement of Top 10 Projects: 15th April","🏆 Final Presentation: 17th April"],
    registrationLink: 'https://amuhacks-4.vercel.app',
    prizes:["1st Prize: Rs. 7000","2nd Prize: Rs. 5000 ","3rd Prize: Rs. 3000"],
    pdf:"file:///C:/Users/hp/Downloads/Event&Team%20Breakdown%20(1).pdf"
  },
  {
    id: 2,
    title: 'Quiz Competition: Offline Mode',
    date: '14-April-2025',
    eligibility:"Must Be Enrolled Only In AMU",

    location: 'Dept. Of Computer Science, AMU',
    time: '03:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743349569/CSS/vecteezy_settings-install-maintenance-and-repair_4474423_qr426g.jpg',
    description: 'A riveting quiz battle that challenges teams on Computer and IT knowledge, igniting a spirit of intellectual rivalry',
    dateForCal:"2025-04-14T15:00:00",
    list:["📝 Mode: Offline","💰 Entry Fee: INR 100 per team","👥 Team Size: 3-4 members","🏆 Exciting Prizes for the Winners"],
    prizes:["1st Prize: Rs. 2000","2nd Prize: Rs. 1000 "],
    registrationLink: 'https://forms.gle/1CsnfFEwDxsQZnVq5',
  },
  {
    id: 3,
    title: 'Coding Compitition!',
    date: '15-april-2025',
    location: 'Dept. Of Computer Science, AMU',
    
    time: '03:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743349474/CSS/vecteezy_man-working-with-computer-with-app-in-isometric-illustration__nmsodj.jpg',
    description: "A fast-paced coding contest exclusively for students, where algorithmic prowess meets competitive spirit.",
    dateForCal:"2025-04-15T15:00:00",
    list:["🖥 Platform: HackerRank (Offline Mode)","💰 Entry Fee: INR 40 per person","📅 Date: 15 April","⏰ Time: 3:00 PM"],
    eligibility:"Must Be Enrolled In Any University",
    prizes:["1st Prize: Rs. 2000","2nd Prize: Rs. 1000 "],

    registrationLink: 'https://forms.gle/MzHFT5LeDTrJvibg6',
  },
  
  {
    id: 4,
    title: 'Capture The Flag: Online Mode on Unstop',
    date: '15-April-2025',
    location: 'Dept. Of Computer Science, AMU',
    time: '6:00 pm',
    image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743349442/CSS/vecteezy_the-team-is-designing-the-app-and-launching-it-on-a-rocket__uielr4.jpg',
    description: 'An electrifying cybersecurity challenge that tests your problem-solving and ethical hacking skills in a race against time',
    dateForCal:"2025-04-15T20:00:00",
    list:["📝 Mode: Online","🏴 Event Type: Capture the Flag (CTF)","👥 Team Size: 1-2 members","💰 Entry Fee: INR 50 per team","📅 Date: 15 April","⏰ Time: 08:00 PM"],
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
      profileImg:"https://res.cloudinary.com/sameerkhan/image/upload/v1743186927/CSS/300-1704308884_qaqm1n.png",
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
      profileImg:"https://res.cloudinary.com/sameerkhan/image/upload/v1743187390/CSS/309-1710140108_q9eyvc.png",
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
      profileImg:"https://res.cloudinary.com/sameerkhan/image/upload/v1743187836/CSS/10061777_kwfq5y.jpg",
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
      profileImg:"https://res.cloudinary.com/sameerkhan/image/upload/v1743187885/CSS/10055968_hbbxdv.jpg",
      socials: {
          facebook: '#',
          twitter: '#',
          linkedin: '#',
          instagram: '#',
        },
  },
  {
      name:"Dr. Asif Irshad Khan",
      role:"Mentor, CSS",
      profileImg:"https://res.cloudinary.com/sameerkhan/image/upload/v1743337016/CSS/10080232-1716457905_ltyyoh.png",
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
        role: 'Coordinator',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743191467/CSS/PHOTO-2024-10-26-23-42-12_ahp9x6.jpg',
        course:'MCA (1st year)',
        socials: {
          linkedin: 'https://www.linkedin.com/in/aftab-ansari-774b7725a',
          github:"https://github.com/aahftab"
        },
      },
      {
        name: 'Ms. Tuba Rahman',
        role: 'Secretory',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743190988/CSS/profile_-_Tuba_Rahman_k2gwvf.jpg',
        course:"B.Sc CS (3rd year)",
        socials: {
          github: 'https://github.com/tubarahman12',
          linkedin: 'http://www.linkedin.com/in/tuba-rahman-200424255',
        },
      },
      {
        name: 'Ms. Laeeba Javed',
        role: 'Mentor',
        course:"M.Sc (1st year)",
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743603327/CSS/laeeba_yhv9yy.webp',
        socials: {
          linkedin: 'https://www.linkedin.com/in/laeeba/',
          github:''
        },
      },
    {
      name: 'Mr. Mohammed Sarim',
      role: 'AI/ML Lead',
      course:"MCA (2nd year)",
      image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743191552/CSS/WhatsApp_Image_2024-02-16_at_3.54.40_PM_rclju7.jpg',
      socials: {
        linkedin: 'https://www.linkedin.com/in/mohammed-sarim-ml/',
        github:'https://github.com/exc33ded',
        instagram:""
      },
    },
      {
        name: 'Mr. Ahwar Khan',
        role: 'CyberSecurity Lead',
        course:"M.Sc (2nd year)",
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743191425/CSS/IMG_7908_mj5ukd.jpg',
        socials: {
          linkedin: 'http://linkedin.com/in/ahwar-khan2',
          github:'https://github.com/ahwarkhan',
          instagram:"https://www.instagram.com/ahwar____khan"
        },
      },
      {
        name: 'Mohd. Saad',
        role: 'Web Lead',
        course:"MCA (1st year)",
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743191515/CSS/PHOTO-2025-03-13-14-04-39_dfrk5y.jpg',
        socials: {
          github:"https://github.com/CASESENSITIVE007",
          linkedin: 'https://www.linkedin.com/in/mohammad-saad-196a88239/',
        },
      },
    ],
  },{
    category:"Tech Team",
    members:[
      {
        name: 'Sameer',
        role: 'Web Developer',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743603792/CSS/sameer_profile_h1wuw8.jpg',
        course:"MCA (1st year) ",
        socials: {
          github:"https://github.com/Sameerkhan9412",
          linkedin: 'https://www.linkedin.com/in/sameerkhn/',
          instagram: 'https://www.instagram.com/er.sam.khan/',
        },
      },
      {
        name: 'Saurav Singh',
        role: '',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743191699/CSS/WhatsApp_Image_2025-03-10_at_6.55.45_AM_md5unz.jpg',
        course:"B.Sc CS (3rd year)",
        socials: {
          github:"https://github.com/South-IN",
          linkedin: 'https://www.linkedin.com/in/saurav-singh-228554281/',
        },
      },
      {
        name: 'Abdullah Asad',
        role: '',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743191642/CSS/WhatsApp_Image_2025-03-10_at_2.54.09_PM_cfqjwh.jpg',
        course:"M.Sc (1st year)",
        socials: {
          github:"https://github.com/abdullah-xyz",
          linkedin: 'https://www.linkedin.com/in/abdullah-a-9ab00086?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        },
      },
      {
        name: 'Syed Bilal Ahmad',
        role: '',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743309485/CSS/WhatsApp_Image_2025-03-28_at_9.41.36_PM_lezppc.jpg',
        course:"MCA (1st year)",
        socials: {
          github:"https://github.com/Sbilalahmad",
          linkedin: 'https://www.linkedin.com/in/syed-bilal-ahmad-454468203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          instagram:"https://www.instagram.com/syed22144?igsh=MzNlNGNkZWQ4Mg=="
        },
      },
      {
        name: 'Madni Mahmood',
        role: '',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743194763/CSS/formalpic_-_Madni_Mahmood_utxzgs.jpg',
        course:"BSc. CS (1st year)",
        socials: {
          github:"https://github.com/Madni93",
          linkedin: 'https://www.linkedin.com/in/madni-mahmood-a1b86b27a/',
          instagram: 'https://www.instagram.com/bishbashboshbingobangobongo/',
        },
      },
      {
        name: 'Mohd Amir Hasan',
        role: '',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743191631/CSS/WhatsApp_Image_2025-03-05_at_5.39.34_AM_gdxen9.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"https://github.com/mohdamirhasan",
          linkedin: 'http://linkedin.com/in/amir-hasan-web-developer/',
        },
      },
      {
        name: 'Faraz Ahmad',
        role: '',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743334625/CSS/IMG-20250226-WA0014_-_Faraz_Ahmad_dfxrw1.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"https://github.com/AhmadFaraz-20",
          linkedin: 'https://www.linkedin.com/in/faraz-ahmad-640015216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          instagram:"https://www.instagram.com/stfu.faraz?igsh=ZG1sNmxlaGdqM282"
        },
      },
      
    ]
  },
  {
    category:"Graphics & PR Team",
    members:[
      {
        name: 'Syed Rayyan Ali',
        role: 'PR Team',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743193956/CSS/IMG-20250106-WA0027__01_cqizc7.jpg',
        course:"MCA (1st year)",
        socials: {
          github:"https://github.com/sydrayyanasif",
          linkedin: 'https://www.linkedin.com/in/syed-rayyan-ali-a36387226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          instagram:"https://www.instagram.com/_rayyyaan_?igsh=MTRmY21nc2docGxidw=="
        },
      },
      {
        name: 'Muneeba Khan',
        role: 'PR Team',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743195034/CSS/WhatsApp_Image_2025-03-10_at_2.54.36_PM_-_Muneeba_Khan_nk654u.jpg',
        course:"B.Sc CS (2nd year)",
        socials: {
          github:"https://github.com/muneebaaa",
          linkedin: 'https://www.linkedin.com/in/muneeba-khan-49b23528b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          instagram: 'https://www.instagram.com/mun.eebaaa?igsh=bGsyOHRiYnFuZ2Rw',
        },
      },
      {
        name: 'Ahmad Mustafa Khowaja',
        role: 'PR Team',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743197730/CSS/img_-_Ahmad_Mustafa_tsgz5x.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"https://github.com/ahmadmustafa96",
          linkedin: 'https://www.linkedin.com/in/ahmadmkhowaja/',
          // instagram: 'https://www.instagram.com/mun.eebaaa?igsh=bGsyOHRiYnFuZ2Rw',
        },
      },
      {
        name: 'Haseen Fatima',
        role: 'PR Team',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743193814/CSS/WhatsApp_Image_2025-03-05_at_5.29.57_AM_jrnzbm.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"https://github.com/haseenf28",
          linkedin: 'https://in.linkedin.com/in/haseen-fatima-1652b2327',
          // instagram: 'https://www.instagram.com/mun.eebaaa?igsh=bGsyOHRiYnFuZ2Rw',
        },
      },
      {
        name: 'Mohammad Areeb',
        role: 'PR Team',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743193395/CSS/IMG_5534_-_Mohammad_Areeb_uzhibz.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"https://github.com/R3eb",
          linkedin: 'http://www.linkedin.com/in/r3eb',
          instagram: 'http://www.instagram.com/_aweeeeb_',
        },
      },
      {
        name: 'Maaz Anwar',
        role: 'Graphics Team',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743328271/CSS/IMG-20241211-WA0015_-_Maaz_Anwar_le6hzs.jpg',
        course:"B.Sc CS (3rd year)",
        socials: {
          github:"https://github.com/Maazanwar09",
          linkedin: 'https://www.linkedin.com/in/maaz-a-17419b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          // instagram: 'http://www.instagram.com/_aweeeeb_',
        },
      },
      {
        name: 'Shoaib Ahmad',
        role: 'Graphics Team',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743330166/CSS/Shoaib_-_Shoaib_khan_bhehlt.jpg',
        course:"B.Sc CS (2nd year)",
        socials: {
          github:"https://github.com/Shoaib-Ahmad-19",
          linkedin: 'https://www.linkedin.com/in/shoaib-ahmad-876763277',
          // instagram: 'http://www.instagram.com/_aweeeeb_',
        },
      },
      {
        name: 'Mohammad Sameer',
        role: 'Graphics Team',
        image: 'https://res.cloudinary.com/sameerkhan/image/upload/v1743191676/CSS/WhatsApp_Image_2025-03-10_at_2.55.16_PM_cl2dgf.jpg',
        course:"B.Sc CS (1st year)",
        socials: {
          github:"https://github.com/Banana-Mint",
          linkedin: 'https://www.linkedin.com/in/mohammad-sameer-a41aa332a/',
          instagram: 'https://www.instagram.com/banana_miint/',
        },
      }
    ]
    }
]

export const eventPdfLink="https://drive.google.com/file/d/1QBE5KSX7ZwJWRmcSgnEXL3e1KeB0DdMU/view?usp=sharing";

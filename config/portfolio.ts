/* Change this file to get your personal Porfolio */
import { FaBootstrap, FaCss3, FaFacebook, FaGithub, FaGitlab, FaGoogle, FaHtml5, FaLaravel, FaLinkedin, FaNodeJs, FaPhp, FaReact } from "react-icons/fa"
import { SiFirebase, SiGit, SiJavascript, SiJquery, SiLeaflet, SiNextdotjs, SiNodedotjs, SiNpm, SiPostman, SiReact, SiRedux, SiSocketdotio, SiTailwindcss, SiTensorflow, SiTypescript, SiVuedotjs, SiYarn } from "react-icons/si"

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-127555598-1",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "ridho",
  logo_name: "Jumakri Ridho Fauzi",
  nickname: "ridho / wilddog93",
  full_name: "Jumakri Ridho Fauzi",
  subTitle:
    "Web Developer and Front End Engineer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://www.canva.com/design/DAE_Y5wI47U/7yyf_VyEWXPJF1jk4J4sGg/view?utm_content=DAE_Y5wI47U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  mail: "mailto:ridhoajibx@gmail.com",
};

const socialMediaLinks = [
  {
    link: "https://github.com/wilddog93",
    icon: FaGithub,
    className: "text-foreground"
  },
  {
    link: "https://www.linkedin.com/in/jumakri-ridho-fauzi/",
    icon: FaLinkedin
  },
  {
    link: "mailto:ridhoajibx@gmail.com",
    icon: FaGoogle,
    style: {
      color: "#FF0000"
    }
  },
  {
    link: "https://gitlab.com/ridhoajibx",
    icon: FaGitlab,
    style: {
      color: "#FFA62F"
    }
  },
  {
    link: "https://www.facebook.com/ridhoajibx/",
    icon: FaFacebook
  }
]

const skills = {
  data: [
    {
      title: "Tech Stack Development",
      fileName: "tech-stack",
      skills: [
        "Develop highly interactive Front end and User Interfaces for your website and applications",
        "Building responsive website front end using ReactJS & VueJS",
        "Integration of third party services such as Firebase, Redux & Zustand",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          icon: FaHtml5,
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          icon: FaCss3,
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          icon: SiJavascript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          icon: SiTypescript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          icon: SiReact,
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          icon: SiNextdotjs,
          className: "text-foreground",
        },
        {
          skillName: "VueJS",
          icon: SiVuedotjs,
          style: {
            color: "#213547",
            backgroundColor: "#42B883",
          },
        },
        {
          skillName: "NodeJS",
          icon: SiNodedotjs,
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Redux",
          icon: SiRedux,
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          icon: SiNpm,
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          icon: SiYarn,
          style: {
            color: "#2B89B4",
          },
        },
        {
          skillName: "Postman",
          icon: SiPostman,
          style: {
            color: "#FF5F00",
          },
        },
        {
          skillName: "Git",
          icon: SiGit,
          style: {
            color: "#E94E32",
          },
        },
      ],
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Binar X Glints Academy Bootcamp Batch #7",
      subtitle: "Front End Engineer",
      logo_path: "/image/logo/binar.svg",
      alt_name: "binar-academy",
      duration: "2020",
      descriptions: [
        "🚀 I have studied core subjects like React JS in Front End Class.",
        // "🚀 I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "🚀 I have implemented several projects based on what I've leart under my Bootcamp Batch #7. ",
      ],
      website_link: "https://www.binaracademy.com/",
    },
    {
      title: "University of Ibnu Sina",
      subtitle: "Diploma in Information Technology",
      logo_path: "/image/logo/ibsi.png",
      alt_name: "ibsi",
      duration: "2016 - 2020 (Postpone)",
      descriptions: [
        "🚀 I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "🚀 I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "🚀 I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://uis.ac.id/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Binar X Glints Academy",
      subtitle: "Binar",
      logo_path: "/image/binar-academy.png",
      certificate_link:
        "https://drive.google.com/file/d/1gVdqIz1QPx2ZLc1HUB-_lFW8VbhKCiHG/view?usp=sharing",
      alt_name: "binar",
      color_code: "#ce1212",
    },
    {
      title: "Udemy Online Course",
      subtitle: "udemy",
      logo_path: "/image/Udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Rd2DFOUllL6Smb8agTlh9Yr3g-yk_Fl_/view?usp=sharing",
      alt_name: "udemy",
      color_code: "#fffbf3",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed one internship in AIA Insurance Singapore. I've mostly done projects on my own and I am actively looking for opportunities. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      {
        title: "Front End Web Developer",
        company: "PT Orijin Supremasi Ventura",
        company_url: "https://orijinsupremasi.id/",
        logo_path: "orijin.svg",
        duration: "September 2023 - Present",
        location: "Office - WFO",
        description:
          "I work as a Front End Web Developer who focuses more on the client browser which is build with NextJS - React and NuxtJS - Vue",
        color: "#0071C5",
      },
      {
        title: "Front End Web Developer",
        company: "PT Infini Oase Technology",
        company_url: "https://infinitec.id/",
        logo_path: "infinitec.jpg",
        duration: "November 2021 - August 2023",
        location: "Office - WFO",
        description:
          "I work as a Front End Web Developer who focuses more on the client browser which is build with NextJS - React",
        color: "#0071C5",
      },
      {
        title: "Junior Web Developer - (FullStack)",
        company: "TokoKita Indo Bintan",
        company_url: "https://www.tokokita.co.id/",
        logo_path: "toko-kita.png",
        duration: "Mei 2021 - October 2021",
        location: "Office - WFO",
        description: "I worked as a fullstack developer",
        color: "#0071C5",
      },
      {
        title: "Part of Enhancment Security Systems - (Internship)",
        company: "AIA Insurance Singapore",
        company_url: "https://www.aia.com.sg/",
        logo_path: "aia.png",
        duration: "Jan 2020 - Feb 2021",
        location: "Office - WFO",
        description:
          "I worked on the Security system department and has responsible to set up Cross-Scripting HTML to company website",
        color: "#0071C5",
      },
      {
        title: "Junior web programmer",
        company: "PT Global Rental Indonesia",
        company_url: "",
        logo_path: "no-image.png",
        duration: "Nov 2019 - Augt 2020",
        location: "Office - WFO",
        description:
          "Created Front end of Transportation website. also degined simple web application for better user experience, designed DB Schemas as well.",
        color: "#ee3c26",
      },
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create some project using NextJS and NextUI based to TailwindCSS. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ridho.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Linked In.",
    link: "https://www.linkedin.com/in/jumakri-ridho-fauzi/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Royale Springhill",
      url: "https://github.com/wilddog93/royale-springhill",
      website: "https://royale-springhill.vercel.app/",
      description:
        "This is Building Management Dashboard Website and application",
      languages: [
        {
          skillName: "Javascript",
          icon: SiJavascript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
          className: "text-yellow-500"
        },
        {
          skillName: "ReactJS",
          icon: FaReact,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "NextJS",
          icon: SiNextdotjs,
          className: "bg-background"
        },
        {
          skillName: "TailwidCSS",
          icon: SiTailwindcss,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "Firebase",
          icon: SiFirebase,
          style: {
            color: "#F7DF1E",
          },
          className: "text-yellow-600"
        },
      ],
    },
    {
      id: "1",
      name: "MRCOOL E-Commerce",
      url: "https://github.com/wilddog93/mrcool-dev",
      website: "https://dev.mrcool.work/",
      description:
        "This is E-Commerce Website based on US and Canada",
      languages: [
        {
          skillName: "Typescript",
          icon: SiTypescript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
          className: "text-yellow-500"
        },
        {
          skillName: "ReactJS",
          icon: FaReact,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "NextJS",
          icon: SiNextdotjs,
          className: "bg-background"
        },
        {
          skillName: "TailwidCSS",
          icon: SiTailwindcss,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
      ],
    },
    {
      id: "2",
      name: "Internal Geospatial Dashboard",
      url: "https://github.com/wilddog93/YKAN-geospatial",
      website: "https://geomap-dev.vercel.app/",
      description:
        "Internal Geospatioal Dashboard is website dashboard are monitoring, adaptation and mitigation of climate change and preventing loss of biodiversity in Indonesia. YKAN - Yayasan Konservasi Alam Nusantara.",
      languages: [
        {
          skillName: "Typescript",
          icon: SiTypescript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
          className: "text-yellow-500"
        },
        {
          skillName: "ReactJS",
          icon: FaReact,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "Geolocation Map - Leaflet",
          icon: SiLeaflet,
          style: {
            color: "#42B883",
          },
          className: "text-green-600"
        },
        {
          skillName: "TailwidCSS",
          icon: SiTailwindcss,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
      ],
    },
    {
      id: "3",
      name: "Barrie Gate Dashboard",
      url: "https://github.com/wilddog93/barrier-client",
      website: "https://barrier-dashboard.vercel.app/",
      description:
        "This is Barrie gate controller website dashboard based on Indonesia. PT Triputra Argo Persada",
      languages: [
        {
          skillName: "Typescript",
          icon: SiTypescript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
          className: "text-yellow-500"
        },
        {
          skillName: "ReactJS",
          icon: FaReact,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "NextJS",
          icon: SiNextdotjs,
          className: "bg-background"
        },
        {
          skillName: "TailwidCSS",
          icon: SiTailwindcss,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
      ],
    },
    {
      id: "4",
      name: "Auto Despatch Dashboard",
      url: "https://github.com/wilddog93/barrier-client",
      website: "https://auto-despatch.vercel.app/",
      description:
        "Auto Despatch Dashboard is Automatically identify, plan, and manage optimal routes for on-demand orders. Tap into increased fleet efficiency, minimized manual efforts based on Indonesia. PT Triputra Argo Persada",
      languages: [
        {
          skillName: "Typescript",
          icon: SiTypescript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
          className: "text-yellow-500"
        },
        {
          skillName: "ReactJs",
          icon: FaReact,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "NextJS",
          icon: SiNextdotjs,
          className: "bg-background"
        },
        {
          skillName: "TailwidCSS",
          icon: SiTailwindcss,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "Socket.io",
          icon: SiSocketdotio,
          className: "text-foreground"
        },
      ],
    },
    {
      id: "5",
      name: "Cermin - Face Recognation",
      url: "https://github.com/wilddog93/face-recognation/",
      website: "https://face-recognation-theta.vercel.app/",
      description:
        "Face Recognation Website. PT Triputra Argo Persada",
      languages: [
        {
          skillName: "Javascript",
          icon: SiJavascript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
          className: "text-yellow-500"
        },
        {
          skillName: "ReactJS",
          icon: FaReact,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "NextJS",
          icon: SiNextdotjs,
          className: "bg-background"
        },
        {
          skillName: "TailwidCSS",
          icon: SiTailwindcss,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "face-api.js",
          icon: SiTensorflow,
          style: {
            color: "#F7DF1E",
          },
          className: "text-blue-500"
        }
      ],
    },
    {
      id: "6",
      name: "Pokemon API Website",
      url: "https://github.com/wilddog93/pokemon-app-techassesment",
      website: "https://pokemon-app-techassesment.vercel.app/",
      description:
        "This is a pokemon website",
      languages: [
        {
          skillName: "Typescript",
          icon: SiTypescript,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#3178C6",
          },
          className: "text-yellow-500"
        },
        {
          skillName: "ReactJS",
          icon: FaReact,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        },
        {
          skillName: "NextJS",
          icon: SiNextdotjs,
          className: "bg-background"
        },
        {
          skillName: "TailwidCSS",
          icon: SiTailwindcss,
          style: {
            color: "#61DAFB",
          },
          className: "text-blue-500"
        }
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};

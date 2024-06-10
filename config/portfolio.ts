/* Change this file to get your personal Porfolio */
import { FaCss3, FaFacebook, FaGithub, FaGitlab, FaGoogle, FaHtml5, FaLinkedin } from "react-icons/fa"
import { SiGit, SiJavascript, SiNextdotjs, SiNodedotjs, SiNpm, SiPostman, SiReact, SiRedux, SiTypescript, SiVuedotjs, SiYarn } from "react-icons/si"

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
          style: {
            backgroundColor: "#FFFFFF",
            color: "#000000",
          },
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
      logo_path: "glints.png",
      alt_name: "SETI",
      duration: "2020",
      descriptions: [
        "🚀 I have studied core subjects like React JS in Front End Class.",
        // "🚀 I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "🚀 I have implemented several projects based on what I've leart under my Bootcamp Batch #7. ",
      ],
      website_link: "https://academy.glints.com/",
    },
    {
      title: "University of Ibnu Sina",
      subtitle: "Diploma in Information Technology",
      logo_path: "logo-ibsi.png",
      alt_name: "SETI",
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
      subtitle: "Glints",
      logo_path: "glints-academy.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1gVdqIz1QPx2ZLc1HUB-_lFW8VbhKCiHG/view?usp=sharing",
      alt_name: "glints",
      // color_code: "#f36c3d",
      color_code: "#ce1212",
    },
    {
      title: "Udemy Online Course",
      subtitle: "udemy",
      logo_path: "Udemy.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Rd2DFOUllL6Smb8agTlh9Yr3g-yk_Fl_/view?usp=sharing",
      alt_name: "udemy",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed one internship in AIA Insurance Singapore. I've mostly done projects on my own and I am actively looking for opportunities. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Front End Web Developer",
          company: "PT Orijin Supremasi Ventura",
          company_url: "https://orijinsupremasi.id/",
          logo_path: "logo-origin.svg",
          duration: "September 2023 - Present",
          location: "Office",
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
          location: "Office",
          description:
            "I work as a Front End Web Developer who focuses more on the client browser which is build with NextJS - React",
          color: "#0071C5",
        },
        {
          title: "Junior Web Developer - (FullStack)",
          company: "TokoKita Indo Bintan",
          company_url: "https://www.tokokita.co.id/",
          logo_path: "logo.png",
          duration: "Mei 2021 - October 2021",
          location: "Office",
          description: "I worked as a fullstack developer",
          color: "#0071C5",
        },
        {
          title: "Part of Enhancment Security Systems (Intern)",
          company: "AIA Insurance Singapore",
          company_url: "https://www.aia.com.sg/",
          logo_path: "aia.png",
          duration: "Jan 2020 - Feb 2021",
          location: "Office",
          description:
            "I worked on the Security system department and has responsible to set up Cross-Scripting HTML to company website",
          color: "#0071C5",
        },
        {
          title: "Junior web programmer (Work)",
          company: "PT Global Rental Indonesia",
          company_url: "",
          logo_path: "no-image.png",
          duration: "Nov 2019 - Augt 2020",
          location: "Office",
          description:
            "Created Front end of Transportation website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Laravel Back-end projects,and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
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
      name: "Fund",
      url: "https://github.com/ridhoajibx/fund",
      description:
        "This is Crow-Funding web and application. That to tracking all expense users",
      languages: [
        {
          name: "Node Js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "React Js",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Company Profile website",
      url: "https://github.com/ridhoajibx/transea-dev",
      description:
        "PT Transea Global Indonesia is a shipping company in Batam Port of Indonesia, excellent in ship agency, chartering and brokering, projects logistics.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Jquery",
          iconifyClass: "logos-jquery",
        },
        {
          name: "Bootstrap Css",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      id: "2",
      name: "All Star movies",
      url: "https://github.com/ridhoajibx/movie",
      description: "A simple movie rating and review website.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "React Js",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Screencast REST API",
      url: "https://github.com/ridhoajibx/screencastAPILaravel",
      description:
        "Screencast is an onine course website build using Laravel Framework as REST API and admin panel and React JS as a client interface.",
      languages: [
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
      ],
    },
    {
      id: "4",
      name: "Screencast",
      url: "https://github.com/ridhoajibx/screencast",
      description:
        "Screencast is an onine course website build using Laravel Framework as REST API and admin panel and React JS as a client interface.",
      languages: [
        {
          name: "React Js",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "5",
      name: "Cuti Online",
      url: "https://github.com/ridhoajibx/cuti-online-php-native",
      description:
        "PT Angkasa Engineer Indonesia is Structural and Machanical Engineering services to mainly Oil & Gas clients, andas such economy of design is at the forefront of our work ethic.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "PHP",
          iconifyClass: "vscode-icons:file-type-php",
        },
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

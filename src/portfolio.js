/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import langChainImg from "./assets/images/softwareSkillsImages/lc.png";
import tsImg from "./assets/images/softwareSkillsImages/ts.png";
import cImg from "./assets/images/softwareSkillsImages/c_sharp.png";
import netImg from "./assets/images/softwareSkillsImages/net.png";
import scikitImg from "./assets/images/softwareSkillsImages/scikit.png";
import jupyterImg from "./assets/images/softwareSkillsImages/jupyter.png";
import lambdaImg from "./assets/images/softwareSkillsImages/lambda.png";
import axiosImg from "./assets/images/softwareSkillsImages/axios.png";
import gqlImg from "./assets/images/softwareSkillsImages/gql.png";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "William Chen",
  title: "Hi! I'm William!",
  subTitle: emoji(
    `A software developer with 3+ years of experience and a Master of Information Technology from the University of Melbourne. Specialised in ML/AI with experience in developing Generative AI solutions, Reinforced Learning, and Supervised Learning methods`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hx3JKoPaS_1oS6LPZrFuKJJZ-lrBx_v-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chillingo117",
  linkedin: "https://www.linkedin.com/in/wilchen117/",
  gmail: "kiwitwwilliam@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Software Management + Engineering + Development with ML/AI Specialisation",
  skills: [
    emoji(
      "⚡ Experienced in Full Stack development, enabling seamless application of ML/AI skills"
    ),
    emoji(
      "⚡ Full inception of ML/AI projects, starting from initial requirements analyses, leading to ML/AI investigation, finalising into practical outcomes"
    ),
    emoji("⚡ Integration of ML/AI solutions into enterprise codebases")
  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      image: tsImg
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "C#",
      image: cImg
    },
    {
      skillName: ".NET",
      image: netImg
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "LangChain",
      image: langChainImg
    },
    {
      skillName: "Scikit",
      image: scikitImg
    },
    {
      skillName: "Jupyter",
      image: jupyterImg
    },
    {
      skillName: "Lambdas",
      image: lambdaImg
    },
    {
      skillName: "Axios",
      image: axiosImg
    },
    {
      skillName: "GraphQL",
      image: gqlImg
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Melbourne",
      logo: require("./assets/images/education/uom.png"),
      subHeader: "Master of Information Technology",
      duration: "February 2023 - June 2025",
      desc: "Specialised in Artificial Intelligence, taking courses in Machine Learning, Large Language Models, and AI Ethics",
      descBullets: [
        "Placed in the top 5% of masters in the Master of IT course, earning a place on the Dean's Honor List",
        "Collaborated with the University of Eastern Finland on making a LLM driven patient medical simulator"
      ]
    },
    {
      schoolName: "University of Canterbury",
      logo: require("./assets/images//education/uc.png"),
      subHeader: "Bachelor of Science",
      duration: "February 2019 - December 2021",
      desc: "Double majored in Computer Science and Data Science. Took courses about Software Development, Statistics and Calculus, and Project Management",
      descBullets: [
        "Entered the degree with an AIMS Scholarship for Mathematics",
        "Graduated with a 8.67 GPA (0-9 Scale)",
        "Volunteered in the Student Volunteer Army"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Phocas Software",
      companylogo: require("./assets/images/experience/phocas.png"),
      date: "December 2021 – March 2025",
      desc: "Rotated through teams at Phocas through a Graduate Program. Practiced Full Stack development before joining the AI team. Developed the Phocas AI using Agentic Generative AI in LangChain.",
      descBullets: [
        "Predominantly C#/.NET backend, React in both TS and JS for frontend, SQL Server data sources, and a variety of CI/CD frameworks"
      ]
    },
    {
      role: "Sub-Team Lead",
      company: "MBSI",
      companylogo: require("./assets/images/experience/msbi.png"),
      date: "December 2021 – Present",
      desc: "Initially joined MBSI as a Software Advisor for Project CereCe, aiding the team in improving code quality, software lifecycle management, and project management. Nominated to become the team lead for the Brain Computer Interface (BCI) subteam. Now leading a team of 7 in developing and maintaining the BCI, supporting integrations with other subteam projects."
    },
    {
      role: "Project Manager",
      company: "University of Melbourne",
      companylogo: require("./assets/images/education/uom.png"),
      date: "February 2025 – Present",
      desc: "Currently the acting product manager of a team of 5, serving a research client in the University of Eastern Finland. Responsibilities include Agile Software Management, user requirements gathering and analysis, and documentation of processes/progress. Also acting in a developer and software mentoring capacity. "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Dean's Honour List 2024",
      subtitle:
        "Included in the 2024 Dean's Honor List for excellent academic performance, placing in the top 5% of masters students in my course.",
      image: require("./assets/images/education/uom.png"),
      imageAlt: "University of Melbourne Logo",
      footerLink: [
        {
          name: "Official Letter",
          url: "https://drive.google.com/file/d/1Z__9BCn3Jwiedgp94UdzROZjTh6ftYxC/view?usp=sharing"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

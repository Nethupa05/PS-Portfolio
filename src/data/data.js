// src/data/data.js
export const studentInfo = {
  name: "Nethupa Dalugoda",
  major: "Computer Science",
  university: "SLIIT City Uni",
  semester: "2nd Year - 2nd Semester",
  email: "nethupadalugoda2005@gmail.com",
  phone: "070 400 3254",
  bio: "Passionate computer science student with interest in web development, machine learning, and software engineering. Currently completing my degree with focus on modern technologies.",
  avatar: "/dp.jpeg" // Make sure to add your image to public folder
};

export const lectures = [
  {
  id: 1,
  title: "Introduction to Professional Skills",
  date: "Lecture 01",
  instructor: "Ms. Ishara Weerasinghe",
  thumbnail: "/Lecture 1/Introduction.jpeg",
  tags: [],
  
  // Introduction section
  introduction: [
    "This lecture served as a foundational introduction to the world of professional skills. We explored what these skills are, why they are critically important for career success, and began the journey of self-awareness, which is the first step in developing them.",
    "The session provided practical frameworks and interactive exercises to help us understand and apply these concepts in real-world professional scenarios."
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "What Are Professional Skills?",
      content: [
        "We began by defining professional skills (also known as soft skills or employability skills). These are the non-technical, interpersonal abilities that are essential for success in any workplace.",
        "Unlike technical skills (like coding or accounting), professional skills are transferable. This means they are valuable across all job roles and industries. Examples we discussed include communication, teamwork, problem-solving, and adaptability."
      ]
    },
    {
      section: "The Importance of Professional Skills",
      content: [
        "We learned that these skills are not just 'nice to have'; they are what make someone a well-rounded and valuable employee.",
        "They enhance employability, contribute to a productive work environment, and are crucial for long-term career advancement.",
        "A key takeaway was that while technical knowledge gets your foot in the door, professional skills are what help you thrive and lead within an organization."
      ]
    },
    {
      section: "Values, Beliefs, Attitudes, and Character",
      content: [
        "A significant part of the lecture was understanding the inner drivers of our professional behavior:",
        "VALUES: These are our core principles, like honesty, integrity, and responsibility, that guide our decisions and actions.",
        "BELIEFS: These are our personal convictions, such as having a growth mindset or self-efficacy, that shape how we view challenges and our own capabilities.",
        "ATTITUDES: This is our predisposition to respond to situations positively or negatively, demonstrated through open-mindedness, confidence, or empathy.",
        "CHARACTER: This is the sum of our moral and ethical qualities, built by consistently acting in line with our values, beliefs, and attitudes. Traits like trustworthiness and fairness define our character."
      ]
    },
    {
      section: "The Johari Window: A Tool for Self-Awareness",
      content: [
        "We were introduced to the Johari Window, a powerful model for understanding self-awareness and interpersonal relationships.",
        "It divides our personal awareness into four quadrants:",
        "• Open Area: What is known to both yourself and others (e.g., your public strengths)",
        "• Blind Area: What others know about you, but you are unaware of (your blind spots, which can be weaknesses or hidden strengths)",
        "• Hidden Area: What you know about yourself but keep from others",
        "• Unknown Area: What is unknown to both you and others (untapped potential)",
        "The goal of the exercise was to 'grow the open area' by sharing more about ourselves (reducing the hidden area) and actively seeking feedback from others (reducing the blind area)."
      ]
    },
    {
      section: "Key Activities & Practical Application",
      content: [
        "1. Johari Window Exercise: In this group activity, we identified our top five personal strengths from a list and also selected strengths we observed in our teammates. By comparing lists, we plotted these strengths into the Johari Window quadrants.",
        "2. Skills Categorization (Worksheet 1): We worked in groups to categorize a list of workplace skills into Technical, Soft, and Transferable Skills.",
        "3. Skills Match-Up Warm-Up: This was an interactive game where we matched job roles with the most relevant professional skill."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/Lecture 1/pic1.jpeg",
      caption: "Johari Window Model - Four Quadrants of Self-Awareness"
    },
    {
      url: "/Lecture 1/pic2.png",
      caption: "Professional Skills"
    },
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
{
  id: 2,
  title: "Crafting an Effective CV and Cover Letter",
  date: "Lecture 02",
  instructor: "Ms. Ishara Weerasinghe",
  thumbnail: "/Lecture 2/thumb.jpeg",
  tags: [],
  
  // Introduction section
  introduction: [
    "This lecture moved from the theoretical foundations of professional skills to a critical practical application: marketing ourselves to potential employers. We delved into the art and science of creating a compelling Curriculum Vitae (CV) and cover letter, understanding them as our primary tools for making a powerful first impression and securing job interviews.",
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "The Purpose and Power of a CV",
      content: [
        "We began by defining a CV as more than just a list of jobs and education; it is a comprehensive personal marketing document. Its core purpose is to showcase our qualifications and suitability for a specific role, convincing the employer that we are worth interviewing. A key takeaway was that a well-crafted CV is not just a formality—it is a strategic tool that can set us apart in a competitive job market.",
        "Tailoring: The Key to a Standout CV",
      ]
    },
    {
      section: "Tailoring: The Key to a Standout CV",
      content: [
        "A major focus of the lecture was the concept of tailoring. We learned that a generic CV sent to multiple employers is far less effective than one customized for a specific job. This involves:",
        "   Research: Thoroughly analyzing the job description and the company to identify keywords, required skills, and company values.",
        "   Alignment: Strategically highlighting our most relevant qualifications, experiences, and skills that directly address the employer's needs.",
        "   Impact: Tailoring demonstrates genuine interest and effort, significantly increasing the chances of the CV passing through Applicant Tracking Systems (ATS) and catching a recruiter's eye."
      ]
    },
    {
      section: "Structure and Formatting for Professionalism",
      content: [
        "We broke down the anatomy of a professional CV, emphasizing that clarity and organization are paramount. A recruiter should be able to find key information within seconds. Essential formatting principles include:",
        "• A clean, organized layout with clear headings.",
        "• Consistent use of fonts, bullet points, and white space.",
        "• A logical flow, typically presenting the most recent and relevant information first.",
      ]
    },
    {
      section: "The Essential Components of a CV",
      content: [
        "Personal Information: Full name, professional email, phone number, and location. Optional additions include a link to a polished LinkedIn profile or a relevant online portfolio.",
        "Professional Summary: A concise, powerful 2-3 line pitch at the top of the CV. It should summarize our career goals, key skills, and the value we offer, tailored to the specific job.",
        "Work Experience: Listed in reverse chronological order. For each role, we learned to go beyond listing duties by using action verbs and quantifiable achievements to demonstrate impact.",
        "Education: Also in reverse order, including degrees, institutions, and graduation years.",
        "Skills: A dedicated section to list a combination of hard skills (e.g., Python, Microsoft Excel, Data Analysis) and soft skills (e.g., Communication, Leadership, Problem-Solving), categorized for clarity.",
        "Achievements and Awards: A section to showcase relevant certifications, awards, publications, or other recognitions that reinforce our candidacy.",
        "The goal of the exercise was to 'grow the open area' by sharing more about ourselves (reducing the hidden area) and actively seeking feedback from others (reducing the blind area)."
      ]
    },
    {
      section: "Key Activities & Practical Application",
      content: [
        "1. CV Deconstruction and Analysis",
        "We likely reviewed sample CVs, identifying strong and weak elements. This activity helped us internalize the principles of good structure, impactful language, and effective tailoring.",
        "2. Practical CV Drafting Exercise",
        "The core of the lesson was a hands-on session where we began creating or refining our own CVs.",
        "3. Peer Review Session",
        "We engaged in peer feedback sessions, exchanging drafts to provide constructive criticism. This was invaluable for catching errors we might have missed, assessing the overall clarity and impact of the CV, and gaining perspective on how our CV is perceived by others."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/Lecture 2/cv.png",
      caption: "CV"
    },
    {
      url: "/Lecture 2/coverletter.png",
      caption: "Cover Letter"
    },
    {
      url: "/Lecture 2/pic2.png",
      caption: "Tips for a great cover letter"
    }
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
{
  id: 3,
  title: "Job Interview Skills",
  date: "Lecture 03",
  instructor: "Ms. Ishara Weerasinghe",
  thumbnail: "/Lecture 3/thumb.jpeg",
  tags: [],
  
  // Introduction section
  introduction: [
    "This lesson taught us how to prepare for and succeed in job interviews. We learned about communication skills, body language, and how to answer common questions.",
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "Key Topics Covered:",
      content: [
        "1. Interview Preparation",
        "• Research the company and job description",
        "• Practice common questions",
        "• Prepare your own questions to ask",
        "• Plan what to wear and what to bring",
        "2. Communication Skills",
        "• Verbal: Speak clearly, use examples, be specific",
        "• Non-verbal: Body language is 55% of communication",
        "• Active listening: Pay attention and show you're listening",
        "3. During the Interview",
        "• Arrive 10-15 minutes early",
        "• Maintain eye contact and good posture",
        "• Use the STAR method for answers",
        "• Be authentic and positive",
        "4. After the Interview",
        "• Send a thank-you email within 24 hours",
        "• Reflect on what went well and what to improve",
      ]
    },
    {
      section: "Class Activities:",
      content: [
        "Watched interview videos to identify good/bad practices",
        "Practiced mock interviews in groups",
        "Created lists of common interview questions",
        "Learned how to structure answers using examples"
      ]
    },
    {
      section: "Simple Q&A Practice",
      content: [
        "Q: What is the first step in preparing for a job interview?",
        "A: Research the company and job description.",
        "   ",
        "Q: What method should you use to structure your answers?",
        "A: STAR method (Situation, Task, Action, Result). ",
        " ",
        "Q: How early should you arrive for an interview? ",
        "A: 10-15 minutes early. ",
        " ",
        "Q: What should you do if you don't understand a question? ",
        "A: Politely ask for clarification. ",
        " ",
        "Q: How should you discuss weaknesses? ",
        "A: Mention a real but minor weakness and show how you're improving. ",
        " ",
        "Q: What percentage of communication is body language? ",
        "A: About 55%. ",
        " ",
        "Q: What should you bring to an interview? ",
        "A: Extra copies of your CV and any certificates. ",
        " ",
        "Q: When should you send a thank-you email? ",
        "A: Within 24 hours after the interview. ",
        " ",
        "Q: What type of clothing is best for interviews? ",
        "A: Professional and conservative attire. ",
        " ",
        "Q: What is the most important thing to remember during the interview? ",
        "A: Be yourself and communicate clearly. ",
        " ",
        " ",

      ]
    },
    {
      section: "My Main Takeaways & Practical Application",
      content: [
        "Practice makes perfect - do mock interviews",
        "Body language speaks louder than words",
        "Preparation is key to reducing nervousness",
        "Always research the company beforehand",
        "Use real examples from your experience",
        " ",
        "This lesson was very practical and gave me confidence for real interviews. The mock interview practice was especially helpful for understanding how I come across to others."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/Lecture 3/pic1.png",
      caption: "Interview Attire"
    },
    {
      url: "",
      caption: ""
    },
    {
      url: "",
      caption: ""
    }
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
{
  id: 4,
  title: "Portfolio Management",
  date: "Lecture 04",
  instructor: "Ms. Ishara Weerasinghe",
  thumbnail: "/lecture 4/thumb.jpeg",
  tags: [],
  
  // Introduction section
  introduction: [
    "This lesson taught us how to create and manage professional portfolios. We learned about different portfolio types, what to include, and how to organize our work effectively.",
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "Key Topics Covered:",
      content: [
        "1. What is a Portfolio?",
        "• A collection of your work that shows your skills and achievements",
        "• Presents the real you to others",
        "• Helps organize your accomplishments",
        "2. Types of Portfolios",
        "• Personal: Shows creative work and interests",
        "• Career/Dossier: Professional achievements and credentials",
        "• Employment: Work-related documents and accomplishments",
        "• Assessment: Shows learning progress and growth",
        "3. Portfolio Formats",
        "• Digital (websites, PDFs, blogs)",
        "• Physical (binders, folders)",
        "• Popular platforms: LinkedIn, Behance, Wix, WordPress",
        "4. The PEAKS System",
        "• Personal Characteristics",
        "• Experience",
        "• Accomplishments",
        "• Kknowledge",
        "• Skills",
        "5. Two Main Portfolio Types",
        "• Master Portfolio: Complete collection of all your work",
        "• Targeted Portfolio: Selected items for specific opportunities",
        "6. Organization Tips",
        "• Start with cover page and table of contents",
        "• Use clear sections and headings",
        "• Keep it professional but creative",
        "• Include reflective statements",
      ]
    },
    {
      section: "Class Activities:",
      content: [
        "Learned about portfolio structure and organization",
        "Discussed different portfolio formats and platforms",
        "Understood how to select content using PEAKS system",
        "Explored examples of effective portfolios"
      ]
    },
    {
      section: "Simple Q&A Practice",
      content: [
        "Q: What is a portfolio",
        "A: A collection of your work that shows your skills and achievements.",
        "   ",
        "Q: What are the main types of portfolios?",
        "A: Personal, Career, Employment, and Assessment portfolios.",
        " ",
        "Q: What does PEAKS stand for?",
        "A: Personal Characteristics, Experience, Accomplishments, Knowledge, Skills.",
        " ",
        "Q: What's the difference between Master and Targeted portfolios?",
        "A: Master has all your work; Targeted is customized for specific jobs.",
        " ",
        "Q: What should a portfolio include?",
        "A: Your best work, achievements, skills, and reflective statements.",
        " ",
        "Q: What are some digital portfolio platforms?",
        "A: LinkedIn, Behance, Wix, WordPress, Google Sites.",
        " ",
        "Q: Why include reflective statements?",
        "A: To explain your work choices and show what you learned.",
        " ",
        "Q: How should you organize a portfolio?",
        "A: With clear sections, table of contents, and professional layout.",
        " ",
        "Q: What makes a good portfolio cover?",
        "A: Your name, professional photo, contact info, and date.",
        " ",
        "Q: How often should you update your portfolio?",
        "A: Regularly, whenever you have new achievements.",
        " ",
        " ",

      ]
    },
    {
      section: "My Main Takeaways & Practical Application",
      content: [
        "Portfolios show your growth and capabilities",
        "Organization is key to a good portfolio",
        "Always tailor your portfolio for specific opportunities",
        "Reflection helps show what you've learned",
        "Digital portfolios are easy to update and share",
        " ",
        "This lesson helped me understand how to present my work professionally. The PEAKS system is especially useful for deciding what to include in my portfolio."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/lecture 4/pic1.png",
      caption: "Portfolio Image"
    },
    {
      url: "/lecture 4/pic2.png",
      caption: "Portfolio Creation Process "
    },
    {
      url: "",
      caption: ""
    }
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
{
  id: 5,
  title: "Email Etiquettes",
  date: "Lecture 06",
  instructor: "Ms. Ishadi Nilaweera",
  thumbnail: "/Lecture 6/thumb.jpeg",
  tags: [],
  
  // Introduction section
  introduction: [
    "This session offered training on professional email communication. It covered proper structure, tone, and etiquette for success in the workplace. We learned how to write effective emails for different situations, including job applications, meeting requests, inquiries, and thank-you notes. The lesson highlighted that professional emails create good impressions and show attention to detail in business communication.",
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "Key Topics Covered:",
      content: [
        "1. Structure Matters",
        "• Professional emails should have clear subject lines, appropriate salutations, well organized body content, and professional closings",
        "2. Clarity Over Creativity",
        "• Straightforward communication is more effective than elaborate writing",
        "3. Tone Adaptation",
        "• Adjust formality based on recipient and context while maintaining professionalism",
        "4. Proofreading is Essential",
        "• Errors undermine credibility; always review before sending",
        "5. Be Concise",
        "• Avoid overly long emails; consider meetings for extensive content",
      ]
    },
    {
      section: "Class Activities:",
      content: [
        "Learned about portfolio structure and organization",
        "Discussed different portfolio formats and platforms",
        "Understood how to select content using PEAKS system",
        "Explored examples of effective portfolios"
      ]
    },
    {
      section: "Important Concepts",
      content: [
        "1. Email Structure",
        "• Subject Line",
        "• Salutation",
        "• Body Content",
        "• Closing & Signature",
        "   ",
        "2. Professional Etiquette",
        "• Proofreading, prompt responses, appropriate CC usage, and descriptive subject lines",
        " ",
        "3. Tone Management",
        "• Using formal language for superiors and adapting to less formal when appropriate",
        " ",
        "4. Purpose-Driven Writing",
        "• Ensuring every email has clear objectives and call-to-action statements",

      ]
    },
    {
      section: "My Main Takeaways & Practical Application",
      content: [
        "This email writing session was especially useful because it focused on a skill I will use every day in my career. I learned that effective email communication is not just about sharing information, it’s about building relationships and showing professionalism. The practical templates for various email types, like job applications and meeting requests, provided concrete examples I can use in real situations. I now feel more confident in my ability to write clear, professional emails that create positive impressions. I also understand how important it is to proofread and adapt my tone in business communication."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/Lecture 6/pic1.png",
      caption: "Guidelines"
    },
    {
      url: "",
      caption: ""
    },
    {
      url: "",
      caption: ""
    }
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
{
  id: 6,
  title: "Proposal Writing",
  date: "Lecture 07",
  instructor: "Ms. Ishadi Nilaweera",
  thumbnail: "/lecture 7/thumb.jpeg",
  tags: [],
  
  // Introduction section
  introduction: [
    "This Lecture focused on developing students’ understanding of how to plan, structure, and present professional project proposals. we learned how proposals can be used both internally and externally to communicate project ideas, seek approval and secure findings.",
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "Types of Proposals",
      content: [
        "1. External Proposal:  External Proposals are bids for a contract. There are 3 components, ",
        "• Executive Summary",
        "• Management Section",
        "• Financial Section",
        "2. Internal Proposal: Internal Proposals are to win a coworker or an administrator to accept an idea or enact a policy",
      ]
    },
    {
      section: "Key Components of a Project Proposal",
      content: [
        "Title: A clear and specific title that explains the main idea of a project",
        "Background: A brief explanation of the problem or topic and the importance of it.",
        "Problem Statement: The issues or needs the project trying to address",
        "objectives: The goals of the project, written in clear points",
        "Methodology: The steps, methods and tools that will be used in the project  ",
        "Timeline: A simple schedule that shows each stage of the project will be done.  ",
        "Expected Outcomes: The result we expect to achieve and how they will be useful. ",
      ]
    },
    {
      section: "Importance of a Good Project Proposal",
      content: [
        "• It shows that you have planned your work carefully.",
        "• It helps you organize your ideas before starting the project. ",
        "• It allows others to give feedback or approval before you spend time and resources. ",
        "• It reflects your professionalism, responsibility, and seriousness towards the task. ",

      ]
    },
    {
      section: "My Main Takeaways",
      content: [
        "This lecture helped me to realize that project proposal creation and presenting is far more advanced than we thought. project proposal is not just a formality, but a structured manner of planning and presenting an idea."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/lecture 7/pic1.png",
      caption: "Tips for project proposal"
    },
    {
      url: "",
      caption: ""
    },
    {
      url: "",
      caption: ""
    }
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
{
  id: 7,
  title: "Dining Etiquettes",
  date: "Lecture 08",
  instructor: "Ms. Samudini Sadalika",
  thumbnail: "/Lecture 8/thumb.jpeg",
  tags: [],
  
  // Introduction section
  introduction: [
    "This lesson is a guide on dining etiquette, covering the importance of table manners as a reflection of civility and respect.",
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "Place Setting Navigation",
      content: [
        "1. Rule: Work from the outside in.",
        "2. Tip: Make a 'b' with your left hand for the bread plate and a 'd' with your right hand for the drink.",
      ]
    },
    {
      section: "Utensil Use",
      content: [
        "Two Holding Methods: Pencil Grip and Scalpel Grip."
      ]
    },
    {
      section: "Two Dining Styles",
      content: [
        "1. American: Cut your food, lay the knife down (blade facing in), and switch the fork to your right hand to eat.",
        "2. Continental/European: Cut your food, keep the fork in your left hand (tines down) to eat, and use the knife to guide the food.",
      ]
    },
    {
      section: "Essential Rules",
      content: [
        "• Napkin: Place it in your lap first. Leave it on your chair if you need to step away temporarily. ",
        "• Bread & Butter: Break it into small pieces and butter each piece one at a time.",
        "• Soup: Spoon it away from you. When finished, place your spoon on the under-plate, not in the bowl.",
        "• Passing: Pass items, like salt and pepper, to the right.",
        "• U.F.O. (Unidentified Food Object): Remove it from your mouth using the same utensil (or fingers) that put it in, and set it on the edge of your plate.",

      ]
    },
    {
      section: "Signaling Servers",
      content: [
        "• Resting (Not Finished): Place your utensils in an inverted 'V' on the plate.",
        "• Finished: Lay your utensils parallel to each other at the 4:25 position on the plate.",

      ]
    },
    {
      section: "Handling Issues Discreetly",
      content: [
        "• Do not pick up dropped utensils; ask a server for a clean one.",
        "• Do not point out other people's mistakes in etiquette.",
        "• Never apply makeup, use a toothpick, or blow your nose at the table.",
      ]
    },
    {
      section: "My Main Takeaways & Practical Application",
      content: [
        "This guide focuses on the idea that etiquette is not just about strict, random rules. It centers on making others feel comfortable and respected. The practical tips, such as the 'b' and 'd' hand trick, are easy to remember and help build confidence. It notes that good manners act as a way to communicate without words, showing attentiveness and respect for the host and other diners. The final quote, 'The world was my oyster, but I used the wrong fork,' reminds us that while what we do is important, how we are perceived and our social skills matter too."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/Lecture 8/pic1.png",
      caption: "Fine Dining Cutlery Placement"
    },
    {
      url: "/Lecture 8/pic2.png",
      caption: "Dining Etiquette"
    },
    {
      url: "/Lecture 8/pic3.png",
      caption: ""
    }
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
{
  id: 8,
  title: "Emotional Intelligence",
  date: "Lecture 09",
  instructor: "Mrs. Hubika Joshi ",
  thumbnail: "/Lecture 9/thumb.jpeg",
  tags: [],
  
  // Introduction section
  introduction: [
    "This lesson taught us about understanding emotions, developing self-awareness, and applying emotional intelligence in both personal and professional contexts.",
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "Key Topics Covered:",
      content: [
        "1. Self-Awareness:",
        "• Recognizing and understanding our own emotions and their impact on thoughts and behavior",
        "2. Self-Regulation:",
        "• Managing disruptive emotions and adapting to changing circumstances",
        "3. Empathy Development:",
        "• Understanding others' emotional states and responding appropriately",
        "4. Social Skills:",
        "• Building strong relationships through effective emotional communication",
        "5. Practical Application:",
        "• Emotional intelligence is a learnable skill that improves with practice",
      ]
    },
    {
      section: "Important Concepts",
      content: [
        "Personal Competence: Self-awareness, self-regulation, and motivation",
        "Social Competence: Empathy and social skills in relationships",
        "The Pause Technique: Creating space between emotion and reaction for better outcomes",
        "Emotional Triggers: Identifying situations that provoke strong emotional responses",
      ]
    },
    {
      section: "My Main Takeaways & Practical Application",
      content: [
        "This Emotional Intelligence session was very meaningful because it helped me understand my own emotions better. The lecturer created a safe space for us to share how we felt, and I realized many others also had exam stress like me. I learned that emotional intelligence is about understanding emotions, not hiding them. Since then, using the “pause before reacting” method has helped me handle stress and group work much better."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/Lecture 9/pic1.png",
      caption: "Imotional Intelligence"
    },
    {
      url: "/Lecture 9/pic2.png",
      caption: "Types of Human Emotions"
    },
    {
      url: "",
      caption: ""
    }
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
{
  id: 9,
  title: "Mirror Wall",
  date: "Group Assignment",
  instructor: "Ms. Ishara Weerasinghe",
  thumbnail: "/Mirror wall/mw-1.png",
  tags: [],
  
  // Introduction section
  introduction: [
    "The primary objective of the 'Mirror Wall' project was to create a dynamic, interactive public art installation and provide a creative and accessible activity for all during English Day",
  ],
  
  // Main lecture content
  lectureContent: [
    {
      section: "Material Sourcing",
      content: [
        "• We procured a large notice board to serve as a sturdy frame and backing.",
        "• The designed poster was professionally printed in a large format.",
        "• We mounted the poster onto the notice board, creating a smooth, continuous surface.",
      ]
    },
    {
      section: "Deployment",
      content: [
        "• The wall was installed in a high-traffic area on English Day.",
        "• We provided multiple cups filled with colored markers.",
        "• Team members were present at intervals to briefly explain the concept and invite participation, then allowed the interaction to flow organically.",
      ]
    },
    {
      section: "Difficulties & Solutions",
      content: [
        "The Challenge was at the start of the day, people were hesitant to be the first to mark the pristine wall.",
        " ",
        "So our Solution was our team members took the initiative to color a few small sections and write the first few messages. This 'broke the ice' and demonstrated that participation was welcome and encouraged.",
      ]
    },
    {
      section: "Lessons Learned",
      content: [
        "Combining two groups, while challenging, ultimately resulted in a more creative and well-rounded project than either group could have produced alone.",

      ]
    },
    {
      section: "Personal Reflection",
      content: [
        "For me, the 'Mirror Wall' was more than just a project; it was a profound demonstration of collective optimism. There was a moment in the afternoon when I stood back and watched a diverse crowd of students from different faculties and years all coloring and writing together, silently and respectfully. The wall ceased to be 'our' project and became the university's story."
      ]
    }
  ],
  
  // Images at the end
  images: [
    {
      url: "/Mirror wall/pic1.jpeg",
      caption: "Group Photo"
    },
    {
      url: "/Mirror wall/pic2.jpeg",
      caption: "Mirror Wall"
    },
    {
      url: "/Mirror wall/pic3.jpeg",
      caption: "Mirror Wall"
    }
  ],
  
  // Optional: Keep materials for download
  // materials: [
  //   {
  //     name: "Lecture Slides - Introduction to Professional Skills.pdf",
  //     url: "/materials/professional-skills-intro.pdf",
  //     type: "slides"
  //   },
  //   {
  //     name: "Johari Window Worksheet.pdf",
  //     url: "/materials/johari-worksheet.pdf",
  //     type: "worksheet"
  //   }
  // ]
},
  // Add more lectures with similar structure...
];
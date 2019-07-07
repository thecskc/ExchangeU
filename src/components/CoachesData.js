const CoachesData = [
    {
        firstName: "Kyle",
        company: "Bloomberg",
        location: "New York, US",
        ratePerHour: 65,
        experience: 2,
        img: "bloomberg",
        bio:
            "I specialize in the entry-level/junior technical interview process at fin-tech and financial companies as well as behavioral interviews." +
            " I successfully navigated the university new grad interview process and received four competing offers from top banks and fin-tech firms in the US. " +
            "I love working with clients to isolate and improve problem areas and make their future interviews less stressful and more successful!" +
            " A fun fact about me: I love baking and I have a major sweet tooth!",
        isa: true,
        id: 2
    },
    {
        firstName: "Jason",
        company: "Google",
        location: "New York, US",
        ratePerHour: 120,
        experience: 3.5,
        img: "google",
        bio:
            "Currently working on YouTube recommendations, previously worked as a full-stack generalist at various startups.\n",
        isa: false,
        id: 3
    },
    {
        firstName: "Danial M",
        company: "Rackspace",
        location: "Reston, US",
        ratePerHour: 100,
        experience: 4.5,
        img: "rackspace",
        bio:
            "I am a cyber security engineer who has over 4 years of experience. I have worked in a variety of roles within security, ranging from compliance to vulnerability management. I have hands-on experience with a  wide variety of tools. Tenable/Nessus, Tripwire, Trend Micro, and Splunk are just to name a few. I would like to divulge the information that I have retained in the security field over the past 4 years to a novice who is eager to launch a career in this vital field." +
            "It is becoming evident just how prevalence of security will continue to rise in the future.   ",
        isa: false,
        id: 4
    },
    {
        firstName: "AK",
        company: "Google",
        location: "India",
        ratePerHour: 70,
        experience: 3,
        img: "google",
        bio:
            "Backend engineer. \n" +
            "Worked in Microsoft and a startup before joining Google.\n" +
            "Like writing good quality code in office and playing badminton outside office. \n" +
            "Acm icpc top 10 in regionals.",
        isa: false,
        id: 5
    },
    {
        firstName: "RH",
        company: "Google",
        location: "Los Angeles, US",
        ratePerHour: 120,
        experience: 3,
        img: "google",
        bio: "I used to write code at Uber and Intel.  I am now at Google.\n",
        isa: true,
        id: 6
    },
    {
        firstName: "Amit",
        company: "Goldman Sachs",
        location: "Poland",
        ratePerHour: 60,
        experience: 5,
        img: "goldman_sachs",
        bio:
            "Software Engineer with a passion for distributed systems, managed services and machine learning. " +
            "I enjoy building enterprise scale web applications that focus on delivering business values while utilising established and emerging technologies. \n" +
            "\n" +
            "I have extensive experience with enterprise application development, user requirement coordination, technical system design evaluation, testing patterns, and software development constructs. " +
            "I have experience in building a variety of systems for business critical processes such as invoice processing, margin agreement life cycle, and trade reporting. ",
        isa: false,
        id: 7
    },
    {
        firstName: "MR",
        company: "Facebook",
        location: "New York, US",
        ratePerHour: 120,
        experience: 4,
        img: "facebook",
        bio:
            "Currently working as a Machine Learning Tech Lead of a team in New York for Facebook. " +
            "Having graduated from Cambridge as an Information Engineer in 2011, " +
            "I joined a startup called from Flux in San Francisco, and later moved to New York for Facebook in 2016.\n",
        isa: true,
        id: 8
    },
    {
        firstName: "SD",
        company: "Goldman Sachs",
        location: "India",
        ratePerHour: 80,
        experience: 3,
        img: "goldman_sachs",
        bio:
            "Technology Professional with experience in Application Development & Statistical Analysis. " +
            "Have co-founded and worked with multiple tech start-ups in Education & Medical Services domain since college. Have been honoured with Healthcare Innovation Award by FICCI (India). Regular interviewer for candidates applying for Full-Stack and UI Developer role in my current company." +
            " Fun Fact: I can give you tips on how to be successful not only in the interviewer but, also on your first year at work by being impactful!\n",
        isa: true,
        id: 9
    },
    {
        firstName: "PS",
        company: "Adobe",
        location: "San Francisco, US",
        ratePerHour: 90,
        experience: 3,
        img: "adobe",
        bio:
            "I am a Machine Learning Engineer, currently focused on vision models and data pipelines at Adobe, San Francisco. Previously, completed Masters in the Computer Science Department at the University of Illinois, Urbana Champaign in 2017. " +
            "In other parts of my life, I am an avid fan of stand-up comedy, TV shows and someday hope to perfect the art of preparing drip brew coffee.\n",
        isa: false,
        id: 10
    },
    {
        firstName: "AK",
        company: "Google",
        location: "India",
        ratePerHour: 100,
        experience: 4.5,
        img: "google",
        bio:
            "I have been doing/teaching algorithmic coding for more than 5 years now. Currently working at Google where I have been actively part of taking interviews and hiring. " +
            "Have over 3 years of experience in tech industry and have previous experience in mentoring.",
        isa: false,
        id: 11
    },
    {
        firstName: "DW",
        company: "Google",
        location: "San Bruno, US",
        ratePerHour: 120,
        experience: 8,
        id: 12,
        isa: true,
        img: "google",
        bio: "Hi, I have been interviewing onsite candidates at Google for more than 3 years. I am good at helping mentees to master the core of general coding interviews, making groundbreaking progress in a short time and acquire big package offers. I offer trainings in C++, Java, Go, Javascript and Python3."

     },
    {
        firstName: "HV",
        company: "Amazon",
        location: "Seattle, US",
        ratePerHour: 100,
        experience: 5,
        img: "amazon",
        bio:
            "Im a full stack engineer. I have a non-linear career path, going from startup founder to UX/UI engineer to self-taught computer science into software engineer. " +
            "I have done 300+ leetcodes as well as interviewing within my company so I definitely have some good tips regarding preparation, especially for those that do not have traditional CS background.",
        isa: true,
        id: 13
    },
    {
        firstName: "TZ",
        company: "IBM",
        location: "North Carolina , US",
        ratePerHour: 60,
        experience: 2,
        img: "ibm",
        bio:
            "I'm working at IBM as a full stack software engineer. Before I joined IBM, I cofounded a startup virtual reality (VR) video live streaming company. I was the main mobile developer for iOS. I am familiar with the whole software development cycle from design, development, test, to deployment. I am also proficient in many programming languages, such as C++, Java, Javascript/Typescript, and Objective-C.\n" +
            "\n" +
            "At IBM, I led user stories in many areas, from front end development of their product’s SaaS Web application, and Speech-To-Text training/integration.",
        isa: true,
        id: 14
    },
    {
        firstName: "Ruslan O",
        company: "Google",
        location: "Mountain View , California",
        ratePerHour: 150,
        experience: 8,
        img: "google",
        bio: "I'm a software engineer at Google and " +
            "I am working on internal engineering velocity problems. " +
            "I've failed Google interviews twice, before getting in and starting to interview myself -- " +
            "now with over a hundred interviews under my belt at Google and other companies. " +
            "I've recently published a book, and I'm in the middle of research for my next publication, " +
            "which will be covering the intricacies of technical interviews.",
        isa: false,
        id: 15
    }
];

export default CoachesData;

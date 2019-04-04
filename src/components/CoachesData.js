const CoachesData = [
    {
        firstName: "Kyle",
        company: "Bloomberg",
        location: "New York, US",
        ratePerHour: 65,
        experience: 2,
        img: "bloomberg",
        bio: "I specialize in the entry-level/junior technical interview process at fin-tech and financial companies as well as behavioral interviews." +
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
        bio: "Currently working on YouTube recommendations, previously worked as a full-stack generalist at various startups.\n",
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
        bio: "I am a cyber security engineer who has over 4 years of experience. I have worked in a variety of roles within security, ranging from compliance to vulnerability management. I have hands-on experience with a  wide variety of tools. Tenable/Nessus, Tripwire, Trend Micro, and Splunk are just to name a few. I would like to divulge the information that I have retained in the security field over the past 4 years to a novice who is eager to launch a career in this vital field." +
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
        bio: "Backend engineer. \n" +
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
        bio: "Software Engineer with a passion for distributed systems, managed services and machine learning. " +
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
        bio: "Currently working as a Machine Learning Tech Lead of a team in New York for Facebook. " +
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
        bio: "Technology Professional with experience in Application Development & Statistical Analysis. " +
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
        bio: "Pramod is a Machine Learning Engineer, currently focused on currently working on vision models and data pipelines at Adobe, San Francisco. Previously, he completed his Masters in the Computer Science Department at the University of Illinois, Urbana Champaign in 2017. " +
            "In other parts of his life, he is an avid fan of stand-up comedy, TV shows and someday hopes to perfect the art of preparing drip brew coffee.\n",
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
        bio: "I have been doing/teaching algorithmic coding for more than 5 years now. Currently working at Google where I have been actively part of taking interviews and hiring. " +
            "Have over 3 years of experience in tech industry and have previous experience in mentoring." ,
        isa: false,
        id: 11
    },
    {
        firstName: "DW",
        company: "Google",
        location: "San Bruno, US",
        ratePerHour: 120,
        experience: 8,
        img: "google",
        bio: "Hi I am Di Wang, pronoused as \"The One\" in English. I am have been working at Google for almost 3 years and currently active interviewer for onsite candidates, while I have been in the industry for almost 9 years.  \n" +
            "\n" +
            "During my career I have experienced varieties of interviews at varieties of companies. Some of them invited me for a 1:1 session with their CTO after onsite, and treated me with a nice dinner of course ; )  Some of them interviewed me for roles from hands-on engineer to VP in one single onsite day. And some of them just asked me to implement a mobile game and bring to their office, play with their engineering team members.   \n" +
            "\n" +
            "I have been helping candidates with tech interviews on schedule in a few weeks, or sometimes in a few days to improve, and get their offers. Here are some testimonies: \n" +
            "Hello Di\n" +
            "Thank you very much for yesterday's mock interview and the valuable feedback.\n" +
            "It was really helpful for me to prepare for the real interview this week.\n" +
            "-B***\n" +
            "\n" +
            "We started with discussing an easy problem followed by moderate follow up.\n" +
            "However Di gave very accurate feedback about my behavior and I understood what is my main weakness.\n" +
            "Di also made very good points about the interview process in general (that I payed not enough attention before)\n" +
            "-Z******\n" +
            "\n" +
            "This written feedback is wonderful! Thanks so much for doing the interview and writing the feedback. This has been tremendously helpful for me and it’s totally worth the price. I’m going to take your advice and practice some basic coding problems like reverse linkedlist, quick sort, and binary search etc.\n" +
            "-D**",
        isa: true,
        id: 12
    },
    {
        firstName: "HV",
        company: "Amazon",
        location: "Seattle, US",
        ratePerHour: 100,
        experience: 5,
        img: "amazon",
        bio: "Im a full stack engineer. I have a non-linear career path, going from startup founder to UX/UI engineer to self-taught computer science into software engineer. " +
            "I have done 300+ leetcodes as well as interviewing within my company so I definitely have some good tips regarding preparation, especially for those that do not have traditional CS background.",
        isa: true,
        id: 13
    },

];

export default CoachesData;

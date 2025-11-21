// Comprehensive activities database for all 16 MBTI types
// 10-12 curated activities per type

const createActivity = (id, data) => ({ id, ...data });

// INTJ - The Architect
const INTJ_ACTIVITIES = [
    createActivity('intj_1', {
        title: "Strategic Board Game Marathon",
        description: "Dive into complex strategy games like Chess, Go, or Settlers of Catan. Analyze patterns, predict outcomes, and dominate through superior planning.",
        steps: ["Choose a challenging strategy game", "Study optimal strategies", "Play 3-5 rounds analyzing each move", "Document winning patterns"],
        groupSize: "Solo or Pairs",
        time: "2-4 hours",
        energy: "Moderate",
        vibe: ["Strategic", "Analytical", "Focused"],
        reason: "INTJs excel at long-term planning and strategic thinking."
    }),
    createActivity('intj_2', {
        title: "Build a Personal Knowledge System",
        description: "Create a comprehensive digital knowledge base using Notion or Obsidian. Organize everything you know into an interconnected web of ideas.",
        steps: ["Choose knowledge management tool", "Create category hierarchies", "Import existing notes", "Link related concepts", "Set up daily review"],
        groupSize: "Solo",
        time: "3-6 hours",
        energy: "Moderate",
        vibe: ["Organized", "Systematic", "Productive"],
        reason: "INTJs love creating efficient systems and organizing information."
    }),
    createActivity('intj_3', {
        title: "Learn a Programming Language",
        description: "Master a new programming language through structured tutorials and building real projects.",
        steps: ["Choose language (Python, Rust, etc.)", "Complete tutorials", "Build 3 small projects", "Read best practices", "Join community"],
        groupSize: "Solo",
        time: "10-20 hours over weeks",
        energy: "Moderate",
        vibe: ["Educational", "Logical", "Progressive"],
        reason: "Programming appeals to INTJs' love of logic and systems."
    }),
    createActivity('intj_4', {
        title: "Design Your Ideal Future",
        description: "Create a detailed 5-10 year life plan with specific goals, milestones, and strategies for achievement.",
        steps: ["Define long-term vision", "Set SMART goals", "Create action plans", "Identify potential obstacles", "Design tracking system"],
        groupSize: "Solo",
        time: "3-5 hours",
        energy: "Moderate",
        vibe: ["Strategic", "Future-focused", "Intentional"],
        reason: "INTJs excel at long-term planning and systematic goal achievement."
    }),
    createActivity('intj_5', {
        title: "Master Chess Tactics",
        description: "Systematically improve chess skills through tactics puzzles, opening study, and game analysis.",
        steps: ["Solve 50 tactics puzzles", "Study one opening deeply", "Play 5 games", "Analyze mistakes", "Identify patterns"],
        groupSize: "Solo",
        time: "2-3 hours",
        energy: "Moderate",
        vibe: ["Strategic", "Focused", "Improving"],
        reason: "Chess perfectly matches INTJs' love of strategy and pattern recognition."
    }),
    createActivity('intj_6', {
        title: "Research Emerging Technologies",
        description: "Deep dive into cutting-edge tech like quantum computing, AI, or biotech. Analyze future implications.",
        steps: ["Select technology field", "Read research papers", "Create timeline of developments", "Analyze potential impacts", "Write summary"],
        groupSize: "Solo",
        time: "3-5 hours",
        energy: "Low",
        vibe: ["Intellectual", "Future-focused", "Analytical"],
        reason: "INTJs are drawn to understanding future trends and complex systems."
    }),
    createActivity('intj_7', {
        title: "Optimize Your Productivity System",
        description: "Analyze your current workflow and create an optimized productivity system based on research and data.",
        steps: ["Track current activities", "Identify inefficiencies", "Research productivity methods", "Design new system", "Test for 30 days"],
        groupSize: "Solo",
        time: "5-8 hours setup",
        energy: "Moderate",
        vibe: ["Efficient", "Systematic", "Self-improvement"],
        reason: "INTJs constantly seek to improve systems, including their own lives."
    }),
    createActivity('intj_8', {
        title: "Philosophy Deep Dive",
        description: "Read and analyze philosophical texts, taking detailed notes and forming your own arguments.",
        steps: ["Choose philosophy book", "Read one chapter at a time", "Take detailed notes", "Write counter-arguments", "Create summary"],
        groupSize: "Solo",
        time: "1-2 hours daily",
        energy: "Low",
        vibe: ["Intellectual", "Contemplative", "Deep"],
        reason: "INTJs enjoy abstract thinking and developing comprehensive worldviews."
    }),
    createActivity('intj_9', {
        title: "Financial Independence Planning",
        description: "Create a comprehensive financial plan for achieving independence through investing and optimization.",
        steps: ["Calculate current net worth", "Research investment strategies", "Create diversified portfolio plan", "Set up automation", "Track progress monthly"],
        groupSize: "Solo",
        time: "4-6 hours",
        energy: "Moderate",
        vibe: ["Strategic", "Future-focused", "Practical"],
        reason: "INTJs excel at long-term planning and optimizing complex systems."
    }),
    createActivity('intj_10', {
        title: "Build a Home Automation System",
        description: "Design and implement smart home automation using IoT devices for maximum efficiency.",
        steps: ["Audit home inefficiencies", "Research smart platforms", "Purchase devices", "Set up automation rules", "Optimize and test"],
        groupSize: "Solo",
        time: "5-10 hours",
        energy: "Moderate",
        vibe: ["Technical", "Efficient", "Innovative"],
        reason: "INTJs love creating efficient technical systems."
    })
];

// INTP - The Logician
const INTP_ACTIVITIES = [
    createActivity('intp_1', {
        title: "Theoretical Physics Exploration",
        description: "Dive deep into fascinating physics concepts like relativity, quantum mechanics, or string theory through videos and articles.",
        steps: ["Choose a physics topic", "Watch educational videos", "Read explanatory articles", "Create concept maps", "Explore thought experiments"],
        groupSize: "Solo",
        time: "3-5 hours",
        energy: "Low",
        vibe: ["Intellectual", "Mind-bending", "Fascinating"],
        reason: "INTPs love exploring abstract theoretical concepts and understanding how the universe works."
    }),
    createActivity('intp_2', {
        title: "Build a Passion Project",
        description: "Start a coding or creative project based purely on curiosity, with no pressure for completion.",
        steps: ["Brainstorm interesting ideas", "Choose one that excites you", "Research approaches", "Start building", "Follow your curiosity"],
        groupSize: "Solo",
        time: "Flexible, ongoing",
        energy: "Moderate",
        vibe: ["Creative", "Exploratory", "Satisfying"],
        reason: "INTPs thrive when following their intellectual curiosity without constraints."
    }),
    createActivity('intp_3', {
        title: "Logic Puzzle Marathon",
        description: "Solve increasingly complex logic puzzles, riddles, and brain teasers for pure mental stimulation.",
        steps: ["Gather puzzle collection", "Start with medium difficulty", "Progress to harder puzzles", "Time yourself", "Track improvement"],
        groupSize: "Solo",
        time: "2-3 hours",
        energy: "Moderate",
        vibe: ["Challenging", "Satisfying", "Focused"],
        reason: "INTPs enjoy pure logical challenges that exercise their analytical minds."
    }),
    createActivity('intp_4', {
        title: "Wikipedia Deep Dive",
        description: "Start with a random article and follow your curiosity through interconnected topics for hours.",
        steps: ["Click 'Random Article'", "Read interesting sections", "Follow intriguing links", "Take notes on connections", "Create knowledge map"],
        groupSize: "Solo",
        time: "2-4 hours",
        energy: "Low",
        vibe: ["Curious", "Exploratory", "Relaxed"],
        reason: "INTPs love following their curiosity and connecting disparate ideas."
    }),
    createActivity('intp_5', {
        title: "Debate Both Sides",
        description: "Choose a controversial topic and thoroughly research arguments for both sides, playing devil's advocate.",
        steps: ["Select debate topic", "Research all perspectives", "Create arguments for each side", "Identify logical fallacies", "Form nuanced conclusion"],
        groupSize: "Solo or Pairs",
        time: "2-3 hours",
        energy: "Moderate",
        vibe: ["Analytical", "Balanced", "Intellectual"],
        reason: "INTPs excel at seeing multiple perspectives and logical analysis."
    }),
    createActivity('intp_6', {
        title: "Learn Esoteric Knowledge",
        description: "Study an obscure or niche topic that fascinates you, from ancient languages to obscure mathematics.",
        steps: ["Choose fascinating niche topic", "Find quality resources", "Take detailed notes", "Connect to other knowledge", "Share interesting findings"],
        groupSize: "Solo",
        time: "3-6 hours",
        energy: "Low",
        vibe: ["Curious", "Unique", "Enriching"],
        reason: "INTPs love accumulating knowledge in unusual areas."
    }),
    createActivity('intp_7', {
        title: "Thought Experiment Session",
        description: "Explore famous thought experiments and create your own, pushing the boundaries of logic and imagination.",
        steps: ["Study classic thought experiments", "Analyze their logic", "Create your own variations", "Discuss with others", "Document insights"],
        groupSize: "Solo or Small Group",
        time: "2-3 hours",
        energy: "Moderate",
        vibe: ["Abstract", "Creative", "Mind-expanding"],
        reason: "INTPs excel at abstract thinking and exploring hypotheticals."
    }),
    createActivity('intp_8', {
        title: "Coding Challenge Binge",
        description: "Solve algorithmic problems on platforms like LeetCode or Project Euler for the pure joy of problem-solving.",
        steps: ["Choose coding platform", "Select interesting problems", "Solve without time pressure", "Explore multiple solutions", "Learn new algorithms"],
        groupSize: "Solo",
        time: "2-4 hours",
        energy: "Moderate",
        vibe: ["Challenging", "Satisfying", "Educational"],
        reason: "INTPs enjoy solving complex problems with elegant solutions."
    }),
    createActivity('intp_9', {
        title: "Create a Theory of Everything",
        description: "Develop your own comprehensive theory or framework for understanding a complex system or phenomenon.",
        steps: ["Choose a complex topic", "Research existing theories", "Identify gaps or inconsistencies", "Develop your framework", "Test against examples"],
        groupSize: "Solo",
        time: "5-10 hours",
        energy: "Moderate",
        vibe: ["Theoretical", "Creative", "Ambitious"],
        reason: "INTPs love creating comprehensive theoretical frameworks."
    }),
    createActivity('intp_10', {
        title: "Reverse Engineer Something",
        description: "Take apart a device, system, or concept to understand how it works from first principles.",
        steps: ["Choose something to analyze", "Break it down into components", "Understand each part", "Map relationships", "Rebuild understanding"],
        groupSize: "Solo",
        time: "3-5 hours",
        energy: "Moderate",
        vibe: ["Analytical", "Hands-on", "Insightful"],
        reason: "INTPs love understanding how things work at a fundamental level."
    })
];

// ENTJ - The Commander  
const ENTJ_ACTIVITIES = [
    createActivity('entj_1', {
        title: "Launch a Side Business",
        description: "Identify a market opportunity and create a detailed business plan to launch a profitable side venture.",
        steps: ["Research market gaps", "Validate business idea", "Create business plan", "Set up operations", "Launch MVP"],
        groupSize: "Solo or Small Team",
        time: "20-40 hours",
        energy: "High",
        vibe: ["Ambitious", "Strategic", "Exciting"],
        reason: "ENTJs are natural entrepreneurs who love building and leading ventures."
    }),
    createActivity('entj_2', {
        title: "Organize a Group Project",
        description: "Lead a team to accomplish a challenging goal, from charity events to community improvements.",
        steps: ["Define clear objective", "Recruit team members", "Assign roles", "Create timeline", "Execute and adjust"],
        groupSize: "Small to Large Group",
        time: "10-30 hours",
        energy: "High",
        vibe: ["Leadership", "Impactful", "Collaborative"],
        reason: "ENTJs excel at organizing people and resources to achieve goals."
    }),
    createActivity('entj_3', {
        title: "Competitive Debate Tournament",
        description: "Join or organize a debate competition, leading your team to victory through preparation and strategy.",
        steps: ["Form debate team", "Research topics thoroughly", "Practice arguments", "Develop team strategy", "Compete and win"],
        groupSize: "Small Group",
        time: "15-25 hours",
        energy: "High",
        vibe: ["Competitive", "Intellectual", "Thrilling"],
        reason: "ENTJs love competitive intellectual challenges and leading teams."
    }),
    createActivity('entj_4', {
        title: "Network Building Challenge",
        description: "Systematically expand your professional network by attending events and making strategic connections.",
        steps: ["Identify target connections", "Attend networking events", "Follow up strategically", "Provide value first", "Build relationships"],
        groupSize: "Solo",
        time: "Ongoing",
        energy: "High",
        vibe: ["Strategic", "Social", "Productive"],
        reason: "ENTJs understand the value of networks and excel at building them."
    }),
    createActivity('entj_5', {
        title: "Master Public Speaking",
        description: "Join Toastmasters or practice public speaking to become a more effective communicator and leader.",
        steps: ["Join speaking club", "Prepare speeches", "Practice delivery", "Get feedback", "Compete in contests"],
        groupSize: "Small to Large Group",
        time: "2-3 hours weekly",
        energy: "High",
        vibe: ["Challenging", "Growth-focused", "Empowering"],
        reason: "ENTJs value effective communication as a leadership tool."
    }),
    createActivity('entj_6', {
        title: "Strategic Career Planning",
        description: "Create a detailed 5-year career roadmap with specific milestones and action steps.",
        steps: ["Define career goals", "Research required skills", "Create development plan", "Network strategically", "Track progress monthly"],
        groupSize: "Solo",
        time: "4-6 hours",
        energy: "Moderate",
        vibe: ["Ambitious", "Strategic", "Future-focused"],
        reason: "ENTJs approach career advancement strategically and systematically."
    }),
    createActivity('entj_7', {
        title: "Efficiency Optimization Project",
        description: "Identify and eliminate inefficiencies in a system, whether at work, home, or in your community.",
        steps: ["Analyze current system", "Identify bottlenecks", "Design improvements", "Implement changes", "Measure results"],
        groupSize: "Solo or Small Team",
        time: "5-15 hours",
        energy: "High",
        vibe: ["Productive", "Impactful", "Systematic"],
        reason: "ENTJs excel at optimizing systems and driving results."
    }),
    createActivity('entj_8', {
        title: "Lead a Fitness Challenge",
        description: "Organize and lead a group fitness challenge, motivating others while achieving your own goals.",
        steps: ["Set challenge parameters", "Recruit participants", "Create tracking system", "Motivate team", "Celebrate results"],
        groupSize: "Small to Large Group",
        time: "30-60 min daily for 30 days",
        energy: "High",
        vibe: ["Motivating", "Competitive", "Healthy"],
        reason: "ENTJs enjoy leading others toward shared goals."
    }),
    createActivity('entj_9', {
        title: "Mentorship Program",
        description: "Mentor someone in your field, helping them develop skills while refining your leadership abilities.",
        steps: ["Find mentee", "Set clear goals", "Create development plan", "Meet regularly", "Track their progress"],
        groupSize: "Pairs",
        time: "2-3 hours monthly",
        energy: "Moderate",
        vibe: ["Impactful", "Rewarding", "Leadership"],
        reason: "ENTJs enjoy developing others and sharing their expertise."
    }),
    createActivity('entj_10', {
        title: "Competitive Strategy Game Tournament",
        description: "Organize or compete in strategy game tournaments, testing your tactical and leadership skills.",
        steps: ["Choose game (Starcraft, etc.)", "Study meta strategies", "Practice intensively", "Compete in tournaments", "Analyze performance"],
        groupSize: "Solo or Team",
        time: "10-20 hours",
        energy: "High",
        vibe: ["Competitive", "Strategic", "Exciting"],
        reason: "ENTJs love competitive environments that test strategic thinking."
    })
];

// ENTP - The Debater
const ENTP_ACTIVITIES = [
    createActivity('entp_1', {
        title: "Devil's Advocate Debate Night",
        description: "Argue the opposite of your actual beliefs on various topics, exploring all angles of complex issues.",
        steps: ["Choose controversial topics", "Research opposing views", "Debate with friends", "Switch positions mid-debate", "Find common ground"],
        groupSize: "Pairs or Small Group",
        time: "2-3 hours",
        energy: "High",
        vibe: ["Stimulating", "Playful", "Intellectual"],
        reason: "ENTPs love intellectual sparring and exploring multiple perspectives."
    }),
    createActivity('entp_2', {
        title: "Brainstorm 100 Ideas",
        description: "Generate 100 creative ideas for a problem, business, or project without judging any of them.",
        steps: ["Define the challenge", "Set timer for 60 minutes", "Write every idea that comes", "No filtering or judging", "Review and combine later"],
        groupSize: "Solo or Small Group",
        time: "1-2 hours",
        energy: "High",
        vibe: ["Creative", "Energizing", "Innovative"],
        reason: "ENTPs excel at generating creative ideas and thinking outside the box."
    }),
    createActivity('entp_3', {
        title: "Learn Through Experimentation",
        description: "Pick a new skill and learn it through trial, error, and unconventional methods instead of following tutorials.",
        steps: ["Choose skill to learn", "Skip the manual", "Experiment freely", "Learn from failures", "Develop unique approach"],
        groupSize: "Solo",
        time: "5-10 hours",
        energy: "Moderate",
        vibe: ["Exploratory", "Unconventional", "Fun"],
        reason: "ENTPs prefer hands-on experimentation over structured learning."
    }),
    createActivity('entp_4', {
        title: "Startup Weekend Challenge",
        description: "Participate in a startup weekend or create your own, building a business concept in 48 hours.",
        steps: ["Form team", "Pitch ideas", "Choose concept", "Build MVP", "Present to judges"],
        groupSize: "Small Team",
        time: "48 hours",
        energy: "Very High",
        vibe: ["Intense", "Creative", "Collaborative"],
        reason: "ENTPs thrive in fast-paced, creative, entrepreneurial environments."
    }),
    createActivity('entp_5', {
        title: "Improvisation Workshop",
        description: "Join an improv class or practice improv games, thinking on your feet and creating spontaneously.",
        steps: ["Find improv group", "Learn basic games", "Practice 'yes, and'", "Perform scenes", "Embrace failure"],
        groupSize: "Small to Large Group",
        time: "2-3 hours weekly",
        energy: "High",
        vibe: ["Playful", "Spontaneous", "Social"],
        reason: "ENTPs excel at quick thinking and creative spontaneity."
    }),
    createActivity('entp_6', {
        title: "Hack Something Together",
        description: "Build a quick prototype or hack using whatever tools and resources you have available.",
        steps: ["Identify problem to solve", "Gather available resources", "Build scrappy solution", "Test and iterate", "Share with others"],
        groupSize: "Solo or Pairs",
        time: "3-8 hours",
        energy: "High",
        vibe: ["Creative", "Resourceful", "Satisfying"],
        reason: "ENTPs love creative problem-solving and building things quickly."
    }),
    createActivity('entp_7', {
        title: "Explore Random Interests",
        description: "Spend a day diving into 3-5 completely random topics that catch your interest.",
        steps: ["List interesting topics", "Spend 1-2 hours on each", "Take notes on connections", "Share discoveries", "Follow curiosity"],
        groupSize: "Solo",
        time: "6-10 hours",
        energy: "Moderate",
        vibe: ["Curious", "Eclectic", "Stimulating"],
        reason: "ENTPs have wide-ranging interests and love making unexpected connections."
    }),
    createActivity('entp_8', {
        title: "Social Experiment Design",
        description: "Design and conduct a harmless social experiment to test human behavior or social norms.",
        steps: ["Develop hypothesis", "Design experiment", "Get consent if needed", "Conduct experiment", "Analyze results"],
        groupSize: "Solo or Small Group",
        time: "5-10 hours",
        energy: "High",
        vibe: ["Curious", "Mischievous", "Insightful"],
        reason: "ENTPs enjoy testing ideas and understanding human behavior."
    }),
    createActivity('entp_9', {
        title: "Rapid Prototyping Challenge",
        description: "Build 5 different prototypes or MVPs in one week, testing various ideas quickly.",
        steps: ["Brainstorm 5 ideas", "Allocate one day per idea", "Build minimal versions", "Test with users", "Iterate on best one"],
        groupSize: "Solo or Pairs",
        time: "40-50 hours over a week",
        energy: "Very High",
        vibe: ["Intense", "Creative", "Productive"],
        reason: "ENTPs love variety and testing multiple ideas simultaneously."
    }),
    createActivity('entp_10', {
        title: "Philosophical Debate Marathon",
        description: "Engage in deep philosophical discussions on topics like free will, ethics, and consciousness.",
        steps: ["Choose philosophical topics", "Research different positions", "Debate with others", "Challenge assumptions", "Refine arguments"],
        groupSize: "Pairs or Small Group",
        time: "3-5 hours",
        energy: "High",
        vibe: ["Intellectual", "Stimulating", "Deep"],
        reason: "ENTPs love intellectual debates and exploring abstract ideas."
    })
];

// Export all activities
export const ACTIVITIES_DB = {
    INTJ: INTJ_ACTIVITIES,
    INTP: INTP_ACTIVITIES,
    ENTJ: ENTJ_ACTIVITIES,
    ENTP: ENTP_ACTIVITIES,
    // Simplified versions for other types - will create full versions
    INFJ: INTJ_ACTIVITIES.map((a, i) => ({ ...a, id: `infj_${i + 1}` })), // Placeholder
    INFP: INTP_ACTIVITIES.map((a, i) => ({ ...a, id: `infp_${i + 1}` })), // Placeholder
    ENFJ: ENTJ_ACTIVITIES.map((a, i) => ({ ...a, id: `enfj_${i + 1}` })), // Placeholder
    ENFP: ENTP_ACTIVITIES.map((a, i) => ({ ...a, id: `enfp_${i + 1}` })), // Placeholder
    ISTJ: INTJ_ACTIVITIES.map((a, i) => ({ ...a, id: `istj_${i + 1}` })), // Placeholder
    ISFJ: INTJ_ACTIVITIES.map((a, i) => ({ ...a, id: `isfj_${i + 1}` })), // Placeholder
    ESTJ: ENTJ_ACTIVITIES.map((a, i) => ({ ...a, id: `estj_${i + 1}` })), // Placeholder
    ESFJ: ENTJ_ACTIVITIES.map((a, i) => ({ ...a, id: `esfj_${i + 1}` })), // Placeholder
    ISTP: INTP_ACTIVITIES.map((a, i) => ({ ...a, id: `istp_${i + 1}` })), // Placeholder
    ISFP: INTP_ACTIVITIES.map((a, i) => ({ ...a, id: `isfp_${i + 1}` })), // Placeholder
    ESTP: ENTP_ACTIVITIES.map((a, i) => ({ ...a, id: `estp_${i + 1}` })), // Placeholder
    ESFP: ENTP_ACTIVITIES.map((a, i) => ({ ...a, id: `esfp_${i + 1}` })) // Placeholder
};

// Helper function to get random activities for a type
export const getRandomActivities = (mbtiCode, count = 4) => {
    const activities = ACTIVITIES_DB[mbtiCode] || [];
    const shuffled = [...activities].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

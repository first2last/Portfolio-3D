export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },

    {
        id: 4,
        name: 'Journey',
        href: '#journey',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },

    {
        id: 6,
        name: 'Resume',
        href: '#resume',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'SnapVista - A Social Media app',
        desc: 'SnapVista is a modern social media platform that redefines how people connect and share moments. With a focus on visuals, it lets users post photos, videos, and stories while enjoying real-time interaction and community-driven engagement.',
        subdesc:
            'Built as a full-stack app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion, and ShadCN, SnapVista is designed for speed, scalability, and a smooth user experience.',

        href: 'https://snap-vista-topaz.vercel.app/sign-in',
        texture: '/textures/project/snapVista.mp4',
        logo: '/assets/snapvista.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'FurFrnd - Smart Pet Adoption',
        desc: 'FurFrnd is an all-in-one platform designed to simplify pet adoption and care. From discovering lovable pets to exploring verified sellers, it ensures a safe and seamless experience for pet enthusiasts and adopters alike.',
        subdesc:
            'Built with Express.js, Tailwind CSS, and MongoDB, FurFrnd offers a reliable, scalable, and user-friendly solution for connecting pet lovers with their future companions.',
        href: 'https://furfrnd.onrender.com/',
        texture: '/textures/project/furfrnd.mp4',
        logo: '/assets/furfrnd.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'Express',
                path: '/assets/express.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongodb.png',
            },
            {
                id: 4,
                name: 'html',
                path: '/assets/html.png',
            },
        ],
    },
    {
        title: 'पर्यटन Paradise - Explore the Beauty of Travel',
        desc: 'पर्यटन Paradise is a visually stunning travel-themed website built with HTML, CSS, and Bootstrap. With responsive layouts and captivating carousel images, it offers an elegant front-end experience that highlights the beauty of destinations.',
        subdesc:
            'Crafted using Bootstrap, HTML, and CSS, पर्यटन Paradise focuses on design and responsiveness, delivering a smooth browsing experience across devices while showcasing travel destinations through a clean and attractive interface.',
        href: 'https://first2last.github.io/-Paradise/',
        texture: '/textures/project/paradise.mp4',
        logo: '/assets/travel.jpeg',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'html',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'bootstrap',
                path: '/assets/bootstrap.png',
            },
        ],
    },
    {
        title: 'Butterfly Effect - Interactive Visualization',
        desc: 'Butterfly Effect is a simple JavaScript project that demonstrates the chaos theory concept visually. Users can tweak formula values in real time and instantly see how small changes transform the dynamic butterfly-shaped graph.',
        subdesc:
            'Built with HTML, CSS, and JavaScript, this project focuses on mathematical visualization and interactivity, allowing users to explore the sensitivity of chaotic systems through a responsive and engaging front-end interface.',
        href: 'https://first2last.github.io/The-Butterfly-Effect/',
        texture: '/textures/project/butterfly.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'html',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'URL Shortener - Web Application',
        desc: 'A URL Shortener app that transforms long links into short, shareable URLs with ease. It includes a modern React-based front-end and an admin dashboard to view and manage all shortened links in one place.',
        subdesc:
            '\'Developed using React, Node.js, Express, and MongoDB, this full-stack project combines responsive front-end design with backend functionality, showcasing link generation, storage, and an admin panel for efficient URL management.',
        href: 'https://url-shortener-rho-six.vercel.app/',
        texture: '/textures/project/url.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'html',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/nodejs.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/mongodb.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'विद्यालय Vyapaar - Modern Business Website',
        desc: 'विद्यालय Vyapaar is a sleek and simple website built with HTML, CSS, and JavaScript. Featuring a clean modern design and a smooth login/registration toggle section, it demonstrates interactive front-end functionality.',
        subdesc:
            'Developed using only HTML, CSS, and JavaScript, विद्यालय Vyapaar highlights responsive design and essential UI features, making it a polished showcase of modern front-end development practices.',
        href: 'https://first2last.github.io/Login/index.html',
        texture: '/textures/project/vyapaar.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'html',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'Amazon - Frontend Clone',
        desc: 'An Amazon-inspired front-end clone built with HTML, CSS, and JavaScript. It recreates the familiar e-commerce interface with a responsive layout, navigation bar, product listings, and styled sections that mimic the real platform’s look and feel.',
        subdesc:
            'Developed using only HTML, CSS, and JavaScript, this project focuses on front-end design and responsiveness, showcasing essential e-commerce UI elements without any backend functionality.',
        href: 'https://first2last.github.io/Amazon-Clone/',
        texture: '/textures/project/amazon.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'html',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'Wynk Music - Frontend Clone',
        desc: 'A front-end clone of Wynk Music built with HTML, CSS, and JavaScript, replicating its clean interface and music-focused design. The project includes responsive layouts, styled components, and interactive UI elements.',
        subdesc:
            'Created with HTML, CSS, and JavaScript, this Wynk Music clone focuses on front-end design and responsiveness, showcasing modern UI practices while recreating the look and feel of a popular music application.',
        href: 'https://first2last.github.io/Wynk-Music-Clone/',
        texture: '/textures/project/wynk.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'html',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'javascript',
                path: '/assets/javascript.png',
            },
            {
                id: 4,
                name: 'tailwindcss',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: '1st Year',
        pos:'Exploring the basics',
        duration: '2023 — 2024',
        title:
            'Started my B.Tech journey and explored the world of web development. Learned HTML, CSS, and JavaScript, experimented with CSS frameworks, and built frontend clones to sharpen fundamentals.',
        icon: '/assets/html.png', // replace with your own icon
        animation: 'victory',
    },
    {
        id: 2,
        name: '2nd Year',
        pos: 'Diving into backend',
        duration: '2024 - 2025',
        title:
            'Moved into backend development with Node.js, Express, and MongoDB. At the same time, experimented with Tailwind CSS and React, building more dynamic and scalable frontend projects.',
        icon: '/assets/nodejs.png', // replace with your own icon
        animation: 'clapping',
    },
    {
        id: 3,
        name: '3rd Year',
        pos: 'Full-stack & beyond',
        duration: '2025 - Present',
        title:
            'Started making full-stack projects, combining frontend and backend. Explored modern tools and frameworks like Next.js, Three.js, shadcn, TanStack Query, and Appwrite to create more dynamic and real-world applications.',
        icon: '/assets/reactjs.png', // replace with your own icon
        animation: 'salute',
    },
];
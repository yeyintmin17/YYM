import moment from 'moment-timezone';

const calcAge = (birthDate, timeZone) => {
    const currentDate = moment().tz(timeZone);
    return currentDate.diff(birthDate, 'years');
}

const age = calcAge(moment('2003-12-17'), 'Asia/Yangon');

export const navLinks = [
    { title: "home", subtitle: null, icon: <i className="fa-solid fa-house"></i>, link: '/#home-section' },

    { title: "about", subtitle: 'who am i ?', icon: <i className="fa-solid fa-user-astronaut"></i>, link: '/#about-section' },

    { title: "skills", subtitle: 'what can i do ?', icon: <i className="fa-solid fa-lightbulb"></i>, link: '/#skills-section' },

    { title: "projects", subtitle: 'what have i done ?', icon: <i className="fa-solid fa-cubes"></i>, link: '/more-projects/all' },
    
    { title: "contact", subtitle: 'get in touch', icon: <i className="fa-solid fa-mobile-screen-button"></i>, link: '/#contact-section' },
]

export const homeSectionTxts = [
    { txt: "Hi, I’m <span class='txt-primary'>Ye Yint Min</span>", width: "auto", size: { xs: "18px", sm: "30px", lg: "40px" }, color: "var(--white)" },

    { txt: "Front-End Developer from Myanmar", width: "auto", size: { xs: "20px", sm: "40px", lg: "50px" }, color: "var(--white)" },

    { txt: "While the process of creating can be challenging, there is no greater satisfaction than seeing your hard work come to fruition", width: { xs: "90%", sm: "80%", md: '70%', lg: "50%"  }, size: { xs: "12px", sm: "20px" }, color: "var(--white-non-active)" }
]

export const aboutMe = {
    img: '../assets/img/profile/pro2.jpg',
    txt: `Hello everyone. I’m Ye Yint Min. ${age} years old. I started studying programming in July 2021. Currently, I am learning React & PHP. Have a nice day.`
}

export const skills = [
    { name: 'HTML', icon: <i className='bx bxl-html5'></i>, link: true },
    { name: 'CSS', icon: <i className='bx bxl-css3'></i>, link: true },
    { name: 'Bootstrap', icon: <i className='bx bxl-bootstrap'></i>, link: true },
    { name: 'Tailwind CSS', icon: <i className='bx bxl-tailwind-css'></i>, link: true },
    { name: 'JavaScript', icon: <i className='bx bxl-javascript'></i>, link: true },
    { name: 'jQuery', icon: <i className='bx bxl-jquery'></i>, link: true },
    { name: 'Figma', icon: <i className='bx bxl-figma'></i>, link: false }
]

export const projects = [
    { 
        num: 1,
        img: "../assets/img/pj/pj1.png",

        links: {
            demo: {
                icon: <i className="fa-solid fa-link"></i>,
                link: "https://moscowyym.netlify.app/",
            },

            repo: {
                icon: <i className="fa-brands fa-github"></i>,
                link: "https://github.com/yeyintmin17/moscowcafe",
            },
        },

        mainUsed: {
            txt: 'JavaScript',
            icon: <i className='bx bxl-javascript'></i>
        },  
        
        details: {
            name: "Moscow",
            used: "JavaScript",
            date: "30 July 2022 to 23 Sep 2022",
            description: "This website is one of my favorites. To revise JavaScript, created it. I played localStorage in Full Menu section. You can also make booking in the Booking section.",
        },

        show: true
    },

    { 
        num: 2,
        img: "../assets/img/pj/pj2.png", 

        links: {
            demo: {
                icon: <i className="fa-solid fa-link"></i>,
                link: "https://tyndalecloneyym.netlify.app/",
            },

            repo: {
                icon: <i className="fa-brands fa-github"></i>,
                link: "https://github.com/yeyintmin17/tyndaleclone",
            },
        },

        mainUsed: {
            txt: 'Bootstrap',
            icon: <i className='bx bxl-bootstrap'></i>
        },  

        details: {
            name: "Tyndale Clone",
            used: "Bootstrap, jQuery",
            date: "17 Oct 2022 to 14 Nov 2022",
            description: "To practice Bootstrap & jQuery. But I had no idea so took the template from <a href='https://styleshout.com' target='_blank' class='link-hover'>StyleShout</a> but created some parts according to my idea. I don’t like this website very much. The animation is pretty good, but each section has no pictures, so It feel like lifeless.",
        },

        show: true
    },

    { 
        num: 3,  
        img: "../assets/img/pj/pj3.png",

        links: {
            demo: {
                icon: <i className="fa-solid fa-link"></i>,
                link: "https://oetsuyym.netlify.app/",
            },

            repo: {
                icon: <i className="fa-brands fa-github"></i>,
                link: "https://github.com/yeyintmin17/oetsu",
            },
        },

        mainUsed: {
            txt: 'Tailwind CSS',
            icon: <i className='bx bxl-tailwind-css'></i>
        },  
        
        details: {
            name: "Oetsu", 
            used: "Tailwind CSS, jQuery",
            date: "12 Jan 2023 to 18 Jan 2023",
            description: "At first, it was just to practice Figma, but I liked the design and wrote the code. At that time, I was still learning Tailwind CSS, so added it to practice. This website is the first website where the design is carefully drawn and then the code is written.",
        },

        show: true
    },
]

export const contacts = [
    { icon: <i className="fa-solid fa-square-phone"></i>, txt: "+959 260 898 441", link: 'tel:+956260898441', show: true },

    { icon: <i className="fa-solid fa-square-envelope"></i>, txt: "blone5128@gmail.com", link: 'mailto:blone5128@gmail.com', show: true },

    { icon: <i className="fa-brands fa-linkedin"></i>, txt: "LinkedIn", link: 'https://linkedin.com/in/ye-yint-min-0a10a1261', show: true },

    { icon: <i className="fa-brands fa-square-github"></i>, txt: "GitHub", link: 'https://github.com/yeyintmin17', show: true },

    { icon: <i className="fa-brands fa-facebook"></i>, txt: "Facebook", link: 'https://www.facebook.com/profile.php?id=100077012995984', show: true },

    { icon: <i className="fa-brands fa-telegram"></i>, txt: "Telegram", link: 'https://t.me/yeyintmin17', show: true }
]

export const projectCategories = [
    'Bootstrap', 'Tailwind CSS', 
    'JavaScript', 'jQuery'
]
export const navLinks = [
    { title: "home", subtitle: null, icon: <i className="fas fa-home"></i> },

    { title: "about", subtitle: 'who am i ?', icon: <i className="fas fa-user-astronaut"></i> },

    { title: "skills", subtitle: 'what can i do ?', icon: <i className="fas fa-lightbulb"></i> },

    { title: "projects", subtitle: 'what have i done ?', icon: <i className="fas fa-cubes"></i> },
    
    { title: "contact", subtitle: 'get in touch', icon: <i className="fas fa-envelope"></i> },
]

export const homeSectionTxts = [
    { txt: "Hi, I’m <span class='txt-primary'>Ye Yint Min</span>", width: "auto", size: { xs: "18px", sm: "30px", lg: "40px" }, color: "var(--white)" },

    { txt: "Frontend Developer from Myanmar", width: "auto", size: { xs: "20px", sm: "40px", lg: "50px" }, color: "var(--white)" },

    { txt: "While the process of creating can be challenging, there is no greater satisfaction than seeing your hard work come to fruition", width: { xs: "90%", sm: "80%", md: '70%', lg: "50%"  }, size: { xs: "12px", sm: "20px" }, color: "var(--white-non-active)" }
]

export const aboutMe = {
    img: './assets/img/profile/pro2.jpg',
    txt: "Hello  everyone. I’m Ye Yint Min. 19 years old. I started studying programming in July 2021. Currently, I am learning React & PHP. Have a nice day."
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
        name: "moscow",
        img: "./assets/img/pj/pj1.png",

        date: "30 July 2022 to 23 Sep 2022",
        detail: "This website is one of my favorites. To revise JavaScript, created it. I played localStorage in Full Menu section. You can also make booking in the Booking section.",

        mainUsed: {
            txt: 'JavaScript',
            icon: <i className='bx bxl-javascript'></i>
        },  
        used: "JavaScript",

        demo: "https://moscowyym.netlify.app/",
        repo: "https://github.com/yeyintmin17/moscowcafe",
    },

    { 
        num: 2,
        name: "tyndale clone",
        img: "./assets/img/pj/pj2.png", 

        date: "17 Oct 2022 to 14 Nov 2022",
        detail: "To practice Bootstrap & jQuery. But I had no idea so took the template from <a href='https://styleshout.com' target='_blank'>StyleShout</a> but created some parts according to my idea. I don’t like this website very much. The animation is pretty good, but each section has no pictures, so It feel like lifeless.",

        mainUsed: {
            txt: 'Bootstrap',
            icon: <i className='bx bxl-bootstrap'></i>
        },  
        used: "Bootstrap, jQuery",

        demo: "https://tyndalecloneyym.netlify.app/",
        repo: "https://github.com/yeyintmin17/tyndaleclone",
    },

    { 
        num: 3,
        name: "oetsu", 
        img: "./assets/img/pj/pj3.png",

        date: "12 Jan 2023 to 18 Jan 2023",
        detail: "At first, it was just to practice Figma, but I liked the design and wrote the code. At that time, I was still learning Tailwind CSS, so added it to practice. This website is the first website where the design is carefully drawn and then the code is written.",

        mainUsed: {
            txt: 'Tailwind CSS',
            icon: <i className='bx bxl-tailwind-css'></i>
        },  
        used: "Tailwind CSS, jQuery",

        demo: "https://oetsuyym.netlify.app/",
        repo: "https://github.com/yeyintmin17/oetsu",
    },
]
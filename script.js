let techno = false;

function show(icon){
    if (icon.id === 'objectiveIcon'){
        document.querySelector('#nav-objective-text').classList.remove('hide')
    }else if (icon.id === 'graduationIcon'){
        document.querySelector('#nav-graduation-text').classList.remove('hide')
    }else if (icon.id === 'experienceIcon'){
        document.querySelector('#nav-experience-text').classList.remove('hide')
    }else if (icon.id === 'skillIcon'){
        document.querySelector('#nav-skill-text').classList.remove('hide')
    }else if (icon.id === 'personalIcon'){
        document.querySelector('#nav-personal-text').classList.remove('hide')
    }else if (icon.id === 'languagesIcon' && techno){
        document.querySelector('#nav-languages-text').classList.remove('hide')
    }else if (icon.id === 'projectsIcon' && techno){
        document.querySelector('#nav-projects-text').classList.remove('hide')
    }
}

function hide(icon){
    if (icon.id === 'objectiveIcon'){
        document.querySelector('#nav-objective-text').classList.add('hide')
    }else if (icon.id === 'graduationIcon'){
        document.querySelector('#nav-graduation-text').classList.add('hide')
    }else if (icon.id === 'experienceIcon'){
        document.querySelector('#nav-experience-text').classList.add('hide')
    }else if (icon.id === 'skillIcon'){
        document.querySelector('#nav-skill-text').classList.add('hide')
    }else if (icon.id === 'personalIcon'){
        document.querySelector('#nav-personal-text').classList.add('hide')
    }else if (icon.id === 'languagesIcon' && techno){
        document.querySelector('#nav-languages-text').classList.add('hide')
    }else if (icon.id === 'projectsIcon' && techno){
        document.querySelector('#nav-projects-text').classList.add('hide')
    }
}

function openPage(page){
    const pages = document.querySelectorAll('.section')
    pages.forEach(section =>{
        section.classList.add('hide')
    })
    if (page === 'objectives'){
        pages[0].classList.remove('hide')
    }else if (page === 'graduation'){
        pages[1].classList.remove('hide')
    }else if (page === 'experience'){
        pages[2].classList.remove('hide')
    }else if (page === 'skill'){
        pages[3].classList.remove('hide')
    }else if (page === 'personal'){
        pages[4].classList.remove('hide')
    }else if (page === 'languages' && techno){
        pages[5].classList.remove('hide')
    }else if (page === 'projects' && techno){
        pages[6].classList.remove('hide')
    }
}

function changePage(which){
    const geral = document.querySelector('#geral')
    const tech = document.querySelector('#tech')
    const changeColor = document.querySelectorAll('.text')
    const linkColor = document.querySelector('a')
    const textColor = document.querySelectorAll('.glow')
    const favicon = document.querySelector('#favicon')
    const navigationGeral = document.querySelector('#nav1')
    const navigationTech = document.querySelector('#nav2')
    const pfp = document.querySelector('#pfp')
    const contact = document.querySelector('#contact')
    const video = document.querySelector('video')
    const line = document.querySelectorAll('hr')

    if (which === 'first'){
        techno = false
        video.src = "Videos/plexus white.mp4"
        tech.classList.remove('active')
        geral.classList.add('active')

        changeColor.forEach(element =>{
            element.classList.remove('theme')
        })
        textColor.forEach(element =>{
            element.classList.remove('theme')
        })
        line.forEach(element =>{
            element.classList.remove('theme')
        })

        let a = document.createElement('a')
        let i = document.createElement('i')
        a.href = "https://www.linkedin.com/in/bruno-soares-100498412/";
        a.target = "_blank"
        a.rel = "nofollow"
        a.textContent = "LinkedIn";
        i.classList = "fa-brands fa-linkedin"
        a.append(i)

        contact.textContent = "E-mail: Bruuhsoares.santos@outlook.com | "
        contact.append(a);

        navigationGeral.classList.remove('theme')
        navigationTech.classList.add('theme')
        linkColor.classList.remove('theme')
        pfp.classList.remove('theme')
        favicon.href = "Images/NormalFavicon.ico"
    }else if (which === 'second'){
        techno = true
        video.src = "Videos/plexus blue.mp4"
        geral.classList.remove('active')
        tech.classList.add('active')

        changeColor.forEach(element =>{
            element.classList.add('theme')
        })
        textColor.forEach(element =>{
            element.classList.add('theme')
        })
        line.forEach(element =>{
            element.classList.add('theme')
        })

        let a = document.createElement('a')
        let i = document.createElement('i')
        let a2 = document.createElement('a')
        let i2 = document.createElement('i')
        a.href = "https://www.linkedin.com/in/bruno-soares-100498412/";
        a.textContent = "LinkedIn";
        a.classList.add('theme')
        a.target = "_blank"
        a.rel = "nofollow"
        i.classList = "fa-brands fa-linkedin"
        a.append(i)

        a2.href = "https://github.com/Soares-B";
        a2.textContent = "GitHub";
        a2.classList.add('theme')
        a2.target = "_blank"
        a2.rel = "nofollow"
        i2.classList = "fa-brands fa-github"
        a2.append(i2)

        contact.textContent = "E-mail: Bruuhsoares.santos@outlook.com | "
        contact.append(a, " | ", a2);

        navigationGeral.classList.add('theme')
        navigationTech.classList.remove('theme')
        linkColor.classList.add('theme')
        pfp.classList.add('theme')
        favicon.href = "Images/TechFavicon.ico"
    }
}
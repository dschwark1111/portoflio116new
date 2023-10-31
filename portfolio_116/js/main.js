let projects;
let experience;

fetch('../data/projects.json').then(response => {
    
    return response.json();
}).then(createProjectCards);

fetch('./data/experience.json').then(response => response.json()).then(createExperienceCards);

function createProjectCards(json){
    projects = json;

    const projectsListElement = document.getElementById("projects-list");

    const projectsSize = projects.length;

    for (let i=0; i < projectsSize; i++) {
        projectsListElement.innerHTML += `
        <div class="project-card">
            <a href="${projects[i].repository}" target="_blank">
                <img src="${projects[i].img}" alt="">
                <p>${projects[i].name}</p>
                <p>${projects[i].description}</p>
                <p>${projects[i].year}</p>

                <div id="technology-${i}" class="technologies center">
                    
                </div>
            </a>
        </div>`;

        const technologiesElement = document.getElementById(`technology-${i}`);
        const technologiesSize = projects[i].technologies.length;

        for (let j = 0; j <technologiesSize; j++){
            technologiesElement.innerHTML+=`
            <label>${projects[i].technologies[j]}</label>
            
            `;
        }
    }
}

function createExperienceCards(json){
    experience = json;

    const experienceListElement = document.getElementById("experience-list");
    const experienceSize = experience.length;

    for (let i = 0; i <experienceSize; i ++){
        experienceListElement.innerHTML +=`
        <div class="experience-card">
        <h3>${experience[i].entity}</h3>
        <br>
        <p style="font-style: italic;">${experience[i].title}</p>
        <p>${experience[i].description}</p>
        <p>${experience[i].period}</p>
        <div id="technology-skill-${i}" class="technologies center"> 

        </div>

        </div>
        
        
        `;

        const technologySkillElement = document.getElementById(`technology-skill-${i}`)
        const technologySkillSize = experience[i].technology.length;

        for(let j = 0; j <technologySkillSize; j++){
            technologySkillElement.innerHTML +=`
            <label> ${experience[i].technology[j]} </label>
            `
        }
    }
}
function openTab(evt, tab_name, tab_button_name) {
    var i, tab_content, tab_button;

    // hide content in other tabs
    tab_content = document.getElementsByClassName("tabcontent");
    tab_button = document.getElementsByClassName("tablinks");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
        tab_button[i].classList.remove("active");
    }

    // show selected tab content
    document.getElementById(tab_name).style.display = "block";

    // highlight selected tab button
    document.getElementById(tab_button_name).classList.add("active");
}

window.onload = function () {
    updateProject("ds");
    updateProject("cs");
    updateProject("ss");
    document.getElementById("ds_tab_button").click();
    //document.getElementById("ds_tab_button").classList.add("active");
}

const projects = {
    ds: [
        {
            image: "../thumbnails/songbird.png",
            title: "Songbird",
            description: "AI Song Generator (DS TEST)"
        },
        {
            image: "../../ryan_square.jpg",
            title: "me!",
            description: "me but square!"
        }
    ],
    cs: [
        {
            image: "../thumbnails/songbird.png",
            title: "Songbird",
            description: "AI Song Generator (CS TEST)"
        },
        {
            image: "../../ryan_square.jpg",
            title: "me!",
            description: "me but square!"
        }
    ],
    ss: [
        {
            image: "../thumbnails/songbird.png",
            title: "Songbird",
            description: "AI Song Generator (CS TEST)"
        },
        {
            image: "../../ryan_square.jpg",
            title: "me!",
            description: "me but square!"
        }
    ]
}

const currentIndex = {
    ds: 0,
    cs: 0,
    ss: 0
}

function updateProject(tab) {
    const project = projects[tab][currentIndex[tab]];
    document.getElementById(`${tab}_image`).src = project.image;
    document.getElementById(`${tab}_title`).textContent = project.title;
    document.getElementById(`${tab}_description`).textContent = project.description;
}

function changeProject(tab, direction) {
    const numProjects = projects[tab].length;

    currentIndex[tab] =
        (currentIndex[tab] + direction + numProjects) %
        numProjects;

    updateProject(tab);
}
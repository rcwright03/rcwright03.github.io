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
    document.getElementById("ds_tab_button").click();
    document.getElementById("ds_tab_button").classList.add("active");
}
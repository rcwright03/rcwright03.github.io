function openTab(evt, tab_name) {
    var i, tab_content, tab_buttons;

    // hide content in other tabs
    tab_content = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    // display element that was clicked on
    document.getElementById(tab_name).style.display = "block";

    console.log("test")
}

window.onload = function () {
    document.getElementById("default_tab").click()
}
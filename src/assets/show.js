

function load() {
    let AsiderButton = document.getElementById("AsiderButton")
    let Asider = document.getElementById("Asider")
    let AsiderButtonClose = document.getElementById("AsiderButtonClose")
    let AsiderButtonICon = document.getElementById("AsiderButtonICon")
    let ADsearchButton = document.getElementById("search")
    let ADsearchPortal = document.getElementById("ADsearchPortal")

}

function ToggleOpenAside() {
    document.getElementById("Asider").classList.remove("hidden")
    document.getElementById("Asider").classList.add("opacity-100 transition")

} 

function ToggleCloseAside() {
    document.getElementById("Asider").classList.add("hidden")
}



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {

    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onload = function (event) {

    document.getElementById("defaultOpen").click();
}


var modal = document.getElementById("myModal");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
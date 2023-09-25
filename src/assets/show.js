

function load() {
    let AsiderButton = document.getElementById("AsiderButton")
    let Asider = document.getElementById("Asider")
    let AsiderButtonClose = document.getElementById("AsiderButtonClose")
    let AsiderButtonICon = document.getElementById("AsiderButtonICon")
    let ADsearchButton = document.getElementById("search")
    let ADsearchPortal = document.getElementById("ADsearchPortal")

    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal
    if (btn) {
        btn.addEventListener("click", function () {
            modal.style.display = "block";
            console.log("nrlo");
        })
    }
    
    
    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.addEventListener("click", function () {
            modal.style.display = "none";
            console.log("nrlo");
        })
    }

    if (AsiderButton) {
        AsiderButton.addEventListener('click', function () {

            Asider.classList = 'absolute inset-0 bg-black/50 z-50 transition-all block min-[1000px]:hidden'
        })
    }

    if (AsiderButtonClose) {
        AsiderButtonClose.addEventListener('click', function () {

            Asider.classList = 'absolute inset-0 bg-black/50 z-50 transition-all min-[1000px]:hidden hidden'
        })
    }

    if (ADsearchButton) {
        ADsearchButton.addEventListener('keyup', event => {
            console.log(event);
            ADsearchPortal.classList.remove("ad-hidden")

        })

        ADsearchButton.addEventListener('focusout', event => {
            console.log(event);
            ADsearchPortal.classList.add("ad-hidden")

        })
    }

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
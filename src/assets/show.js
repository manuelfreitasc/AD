

function load() {
    let AsiderButton = document.getElementById("AsiderButton")
    let Asider = document.getElementById("Asider")
    let AsiderButtonClose = document.getElementById("AsiderButtonClose")
    let AsiderButtonICon =document.getElementById("AsiderButtonICon")
    console.log("Nelo");

    AsiderButton.addEventListener('click', function () {

     Asider.classList = 'absolute inset-0 bg-black/50 z-50 transition-all block min-[1000px]:hidden'
    })

    
    AsiderButtonClose.addEventListener('click', function () {

        Asider.classList = 'absolute inset-0 bg-black/50 z-50 transition-all min-[1000px]:hidden hidden'
       })

}
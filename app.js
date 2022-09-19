const pageSection = document.querySelector(".page-section")
const loading = document.querySelector(".loading")

function delayPage() {
    pageSection.classList.remove('inactive')
}

setTimeout(delayPage, 3070)


function removeLoading() {
    loading.classList.add('inactive')
}

setTimeout(removeLoading, 3100)


const hero = document.getElementById("hero")

function bgColorNone() {
    hero.style.backgroundColor="transparent"
}

setTimeout(bgColorNone, 4000)
import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()
// Render each HTML string to the correct DOM element
const fishSection = document.getElementById("fishList")
if (fishSection) {
    // found, set HTML
    fishSection.innerHTML = fishHTML
} else {
    console.error('Could not find element with id "fishList"')
}

// Generate the care tips
const tipHTML = tipList()
const tipSection = document.getElementById("tipList")
if (tipSection) {
    // found, set HTML
    tipSection.innerHTML = tipHTML
} else {
    console.error('Could not find element with id "tipList"')
}

// Generate the location list
const locationHTML = locationList()
const locationSection = document.getElementById("locationList")
if (locationSection) {
    // found, set HTML
    locationSection.innerHTML = locationHTML
} else {
    console.error('Could not find element with id "locationList"')
}

// Render each HTML string to the correct DOM element

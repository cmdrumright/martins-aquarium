import { database } from './aquariumData.js';

const fishHTML = (fish) => {
    // Generate and HTML representaion of each fish
    let fishHTML = '';

    fishHTML += `
        <article class="fish">
            <img src="${fish.image}" alt="${fish.name} image" class="fish__image">
            <div class"fish__details">
                <h2 class="fish__name">${fish.name}</h2>
                <ul cladd="fish__detail-list">
                    <li>${fish.species}</li>
                    <li>${fish.length} cm</li>
                    <li>found at ${fish.location}</li>
                    <li>${fish.diet}</li>
                </ul>
            </div>
        </article>
    `;

    return fishHTML
};

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    for (const fish of database.fish) {
        // if fish.length is devisible by 3
        if (fish.length % 3 === 0) {
            holyFish += fishHTML(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let holyishFish = ""

    for (const fish of database.fish) {
        // if fish.length is devisible by 5
        if (fish.length % 5 === 0) {
            holyishFish += fishHTML(fish)
        }
    }

    return holyishFish
}

export const regularFish = () => {
    // Any fish not a multiple of 3 or 5
    let unholyFish = ""

    for (const fish of database.fish) {
        // if fish.length is devisible by 5
        if (!(fish.length % 5 === 0 || fish.length % 3 === 0)) {
            unholyFish += fishHTML(fish)
        }
    }

    return unholyFish
}

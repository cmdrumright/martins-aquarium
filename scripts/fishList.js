import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate and HTML representaion of each fish
    let fishHTML = '';

    for (const fish of database.fish) {
        fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name} image" class="fish-image">
                <div class"fish-details">
                    <h2 class="fish-name">${fish.name}</h2>
                    <ul cladd="detail-list">
                        <li>${fish.species}</li>
                        <li>${fish.length} cm</li>
                        <li>found at ${fish.location}</li>
                        <li>${fish.diet}</li>
                    </ul>
                </div>
            </article>
        `;
    }

    return fishHTML
};

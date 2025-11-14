import { database } from './aquariumData.js';

export const locationList = () => {
    // Generate and HTML representaion of each location
    let locationHTML = '';

    for (const location of database.locations) {
        locationHTML += `
            <section class="location">
                <h2 class="location__name">${location.name}</h2>
                <h3 class="location__country">${location.country}</h3>
                <p class="location__description">${location.description}</p>
            </section>
        `;
    }

    return locationHTML
};


import { database } from './aquariumData.js';

export const locationList = () => {
    // Generate and HTML representaion of each location
    let locationHTML = '<article class=locations>';

    for (const location of database.locations) {
        locationHTML += `
            <section class="location">
                <h2 class="location-name">${location.name}</h2>
                <h3 class="location-country">${location.country}</h3>
                <p class="location-description">${location.description}</p>
            </article>
        `;
    }

    return locationHTML
};


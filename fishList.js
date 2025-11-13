import { database } from './aquariumData.js';

export const fishList = () => {
    // Generate and HTML representaion of each fish
    let fishHTML = '<ul>\n';

    for (const fish of database.fish) {
        fishHTML += `   <li>${fish.name}</li>\n`
    }
   
    fishHTML += '</ul>'

    return fishHTML
};

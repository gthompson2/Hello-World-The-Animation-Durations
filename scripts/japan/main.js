// Import functions from each list section (Cities, Landmarks & Citizens)
import { citiesToPage } from "./city/cityList.js";
import { landmarksToPage } from "./landmark/landmarkList.js";
import { citizensToPage } from "./citizen/citizenList.js";

// Call the functions to fill the list items on the index.html page (Japan)
// Pushes cities in the cityProvider.js array to the page
citiesToPage();

// Pushes landmarks in the landmarkProvider.js array to the page
landmarksToPage();

// Pushes citizens in the citizenProvider.js array to the page
citizensToPage();
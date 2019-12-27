import random from "lodash/random";
import get from "lodash/get";

// TODO: add better logic for selecting current user
const phones = ["555-555-1234", "555-555-5555"];
const homeTowns = ["Fairfield, CT", "Fort Collins, CO"];
const currentIndex = random(0, phones.length - 1);
export const currentUserHomeTown = get(homeTowns, currentIndex);
export const currentUserPhone = get(phones, currentIndex);

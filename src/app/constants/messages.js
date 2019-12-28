import random from "lodash/random";
import get from "lodash/get";

export const FAKE_MESSAGES = [
  "https://photos.metrotimes.com/wp-content/uploads/2018/04/tfw.jpg",
  "https://www.freecodecamp.org/news/content/images/2019/10/o60oxupyz8cfce0cknvz.png",
  "https://media.farandwide.com/4e/50/4e505d7c1c3a4f64917a70d40ee1385c.jpeg",
  "https://consequenceofsound.net/wp-content/uploads/2018/09/screen-shot-2018-09-17-at-9-46-16-pm.png"
];

const currentIndex = random(0, FAKE_MESSAGES.length - 1);
export const nextMessage = get(FAKE_MESSAGES, currentIndex);

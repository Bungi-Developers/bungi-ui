import get from "lodash/get";
import tail from "lodash/tail";
import { createSelector } from "reselect";

const fromProps = what => (_, props) => get(props, what);

export const selectFeaturedImage = createSelector(
  fromProps("profile.imageUrls"),
  images =>
    get(
      images,
      0,
      "https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-24px-volume-5/24/2097-512.png"
    )
);

export const selectImageUrls = createSelector(
  fromProps("profile.imageUrls"),
  images => tail(images)
);

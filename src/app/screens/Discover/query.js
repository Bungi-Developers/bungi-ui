import { gql } from "apollo-boost";

import { currentUserHomeTown, currentUserPhone } from "../../constants/user";

export default gql`
  {
    users: discover(sex: "Female", location: ${`"${currentUserHomeTown}"`}, phone: ${`"${currentUserPhone}"`}) {
      id
      name
      rating
      phone
      profile {
        imageUrls
        sex
        age
        height
        location
        job
        education
        politicalIdeology
        religion
        hometown
      }
    }
  }
`;

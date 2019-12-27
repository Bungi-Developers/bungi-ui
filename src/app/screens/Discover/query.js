import { gql } from "apollo-boost";

import { currentUserHomeTown } from "../../constants/user";

export default gql`
  {
    users: discover(sex: "Female", location: ${`"${currentUserHomeTown}"`}) {
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

import { gql } from "apollo-boost";
import { currentUserPhone } from "../../constants/user";

export default gql`
  {
    user(phone: ${`"${currentUserPhone}"`}) {
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

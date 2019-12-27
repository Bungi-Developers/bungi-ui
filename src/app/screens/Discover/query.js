import { gql } from "apollo-boost";

export default gql`
  {
    users {
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

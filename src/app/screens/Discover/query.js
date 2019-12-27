import { gql } from "apollo-boost";

export default gql`
  {
    users: discover(sex: "Female", location: "Fairfield, CT") {
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

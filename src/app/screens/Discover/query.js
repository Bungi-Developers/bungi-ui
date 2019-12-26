import { gql } from 'apollo-boost';

export default gql`
  {
    users {
      id
      lastName
      firstName
      rating
      phone
      profile {
        imageUrls
        age
        heightInches
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
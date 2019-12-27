import { gql } from "apollo-boost";
import random from "lodash/random";
import get from "lodash/get";

// TODO: Remove once we have a current user query based on token.
const phones = ["555-555-1234", "555-555-5555"];
const phone = get(phones, random(0, phones.length - 1), phones[0]);

export default gql`
  {
    user(phone: ${`"${phone}"`}) {
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

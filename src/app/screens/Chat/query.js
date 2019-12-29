import { gql } from "apollo-boost";
import { currentUserPhone } from "../../constants/user";

export default gql`
  {
    currentChats(phone: ${`"${currentUserPhone}"`}) {
      messages {
        url
      }
    }
  }
`;

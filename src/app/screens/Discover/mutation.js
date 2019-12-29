import { gql } from "apollo-boost";

import { currentUserPhone } from "../../constants/user";
import { nextMessage } from "../../constants/messages";

export default gql`
  mutation CreateChat($recipient: String!) {
    createChat(recipient: $recipient, createdBy: ${`"${currentUserPhone}"`}, message: ${`"${nextMessage}"`}) {
      messages {
        url
      }
    }
  }
`;

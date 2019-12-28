import { gql } from "apollo-boost";

import { currentUserPhone } from "../../constants/user";
import { nextMessage } from "../../constants/messages";

export default gql`
  mutation CreateChat {
    createChat(recipient: $recipient, createdBy: ${currentUserPhone}, message: ${nextMessage}) {}
  }
`;

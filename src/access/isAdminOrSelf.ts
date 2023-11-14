import { Access } from "payload/config";
import { User } from "payload/generated-types";

export const isAdminOrSelf: Access<any, User> = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    if (user.user_type === "admin") {
      return true;
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      },
    };
  }

  // Reject everyone else
  return false;
};

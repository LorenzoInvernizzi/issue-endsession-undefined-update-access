import { Access } from "payload/config";
import { Timecard, User } from "payload/generated-types";
import { FieldAccess } from "payload/types";

export const isAdminOrOwner: Access<Timecard, User> = ({
  req: { user },
  data,
}) => {
  // Need to be logged in
  if (user) {
    if (user.user_type === "admin") {
      return true;
    }

    return {
      user: {
        equals: user.id,
      },
    };
  }

  return false;
};

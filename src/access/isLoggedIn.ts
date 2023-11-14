import { Access } from "payload/config";
import { User } from "payload/generated-types";
import { FieldAccess } from "payload/types";

export const isLoggedIn: Access<any, User> = ({ req: { user } }) => {
  // Return true if user is logged in, false if not
  return Boolean(user);
};

export const isLoggedInField: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  // Return true if user is logged in, false if not
  return Boolean(user);
};

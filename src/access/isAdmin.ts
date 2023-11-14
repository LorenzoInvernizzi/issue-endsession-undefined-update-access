import { Access, FieldAccess } from "payload/types";
import { User } from "../payload-types";

export const isAdmin: Access<any, User> = ({ req }) => {
  if (req.user) {
    return req.user.user_type === "admin";
  }
  return false;
};

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
  req,
}) => {
  // Return true or false based on if the user has an admin role
  if (req.user) {
    return req.user.user_type === "admin";
  }
  return false;
};

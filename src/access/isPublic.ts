import { Access } from "payload/config";
import { User } from "payload/generated-types";

export const isPublic: Access<any, User> = ({ req: { user } }) => {
  return true;
};

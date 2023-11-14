import payload from "payload";
import { Access } from "payload/config";
import { Timecard, User } from "payload/generated-types";

export const isAdminOrDeveloper: Access<Timecard, User> = async ({
  req: { user },
  data,
  id,
}) => {
  // Need to be logged in
  if (user) {
    if (user.user_type === "admin") {
      return true;
    }

    if (!data && id) {
      const currentDataTimecard = await payload.findByID({
        collection: "timecards",
        id: id,
      });
      if (currentDataTimecard && currentDataTimecard.user === user.id) {
        return true;
      }
    }

    if (data && data.user === user.id) {
      return true;
    }

    if (!data && !id) {
      return false;
    }

    return true;
  }

  return false;
};

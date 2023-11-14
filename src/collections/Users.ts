import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Utente",
    plural: "Utenti",
  },
  auth: {
    // This property controls how deeply "populated"
    // relationship docs are that are stored in the req.user.
    // It should be kept to as low as possible, which
    // keeps performance fast.
    depth: 0,
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    // Only admins
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    // Generic User Info
    {
      name: "user_type",
      label: "Tipo utente",
      saveToJWT: true,
      type: "select",
      required: true,
      hasMany: false,
      defaultValue: "admin",
      options: [
        {
          label: "Developer",
          value: "developer",
        },
        {
          label: "Admin",
          value: "admin",
        },
      ],
    },
  ],
};

export default Users;

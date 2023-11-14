import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isLoggedIn } from "../access/isLoggedIn";

const Clients: CollectionConfig = {
  slug: "clients",
  labels: {
    singular: "Cliente",
    plural: "Clienti",
  },
  admin: {
    useAsTitle: "organization_name",
  },
  access: {
    create: isAdmin,
    read: isLoggedIn,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      label: "Informazioni Generali",
      type: "collapsible",
      fields: [
        {
          name: "organization_name",
          label: "Ragione sociale",
          type: "text",
          required: true,
          minLength: 1,
        },
      ],
    },
  ],
};

export default Clients;

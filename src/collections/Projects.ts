import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import Clients from "./Clients";
import { isLoggedIn } from "../access/isLoggedIn";

const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Progetto",
    plural: "Progetti",
  },
  admin: {
    useAsTitle: "project_name",
  },
  access: {
    create: isAdmin,
    read: isLoggedIn,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "project_name",
      label: "Nome progetto",
      type: "text",
      required: true,
      minLength: 1,
    },
    {
      name: "client",
      label: "Cliente",
      type: "relationship",
      relationTo: Clients.slug,
      required: true,
    },
  ],
};

export default Projects;

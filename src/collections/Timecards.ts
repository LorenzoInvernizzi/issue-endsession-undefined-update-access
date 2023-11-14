import { CollectionConfig, FilterOptions } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import Clients from "./Clients";
import { isLoggedIn } from "../access/isLoggedIn";
import { isAdminOrOwner } from "../access/isAdminOrOwner";
import Users from "./Users";
import Projects from "./Projects";
import { isAdminOrDeveloper } from "../access/isAdminOrDeveloper";

const projectsFilterOptions: FilterOptions<any> = ({
  relationTo,
  data,
  siblingData,
}) => {
  return {
    client: { equals: data.client },
  };
};

const Timecards: CollectionConfig = {
  slug: "timecards",
  labels: {
    singular: "Timecard",
    plural: "Timecards",
  },

  access: {
    create: isLoggedIn,
    read: isAdminOrOwner,
    // update: isAdminOrDeveloper,
    update: isAdminOrOwner,
    delete: isAdmin,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "user",
          label: "Utente",
          type: "relationship",
          relationTo: Users.slug,
          defaultValue: ({ user, locale }) => user.id,
          required: true,
        },
        {
          name: "start_week_date",
          label: "Data inizio settimana",
          type: "date",
          required: true,
        },
        {
          name: "end_week_date",
          label: "Data fine settimana",
          type: "date",
          required: false,
        },
      ],
    },

    // progetti
    {
      name: "projects",
      type: "array",
      label: "Carica ore",
      interfaceName: "CardSlider", // optional
      labels: {
        singular: "Progetto",
        plural: "Progetti",
      },

      fields: [
        {
          type: "row",
          fields: [
            {
              name: "clients",
              label: "Cliente",
              type: "relationship",
              relationTo: Clients.slug,
              required: true,
            },
            {
              name: "project",
              label: "Progetto",
              type: "relationship",
              relationTo: Projects.slug,
              required: true,
              // filterOptions: ({ relationTo, data, siblingData }) => {
              //   console.log(data);
              //   return {
              //     client: { equals: data.client },
              //   };
              // },
            },
            {
              name: "monday_hrs",
              label: "Lun",
              type: "number",
              required: true,
              min: 0,
              max: 12,
              defaultValue: 0,
            },
            {
              name: "tuesday_hrs",
              label: "Mar",
              type: "number",
              required: true,
              min: 0,
              max: 12,
              defaultValue: 0,
            },
            {
              name: "wednesday_hrs",
              label: "Mer",
              type: "number",
              required: true,
              min: 0,
              max: 12,
              defaultValue: 0,
            },
            {
              name: "thursday_hrs",
              label: "Gio",
              type: "number",
              required: true,
              min: 0,
              max: 12,
              defaultValue: 0,
            },
            {
              name: "friday_hrs",
              label: "Ven",
              type: "number",
              required: true,
              min: 0,
              max: 12,
              defaultValue: 0,
            },
            {
              name: "saturday_hrs",
              label: "Sab",
              type: "number",
              required: true,
              min: 0,
              max: 12,
              defaultValue: 0,
            },
            {
              name: "sunday_hrs",
              label: "Dom",
              type: "number",
              required: true,
              min: 0,
              max: 12,
              defaultValue: 0,
            },
          ],
        },
      ],
    },
  ],
};

export default Timecards;

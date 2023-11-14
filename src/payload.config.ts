import { buildConfig } from "payload/config";
import path from "path";
import { viteBundler } from "@payloadcms/bundler-vite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";

import Users from "./collections/Users";
import Clients from "./collections/Clients";
import Projects from "./collections/Projects";
import Timecards from "./collections/Timecards";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),

  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),

  csrf: [],
  collections: [Users, Clients, Projects, Timecards],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});

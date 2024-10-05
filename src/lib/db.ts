import { PrismaClient } from "@prisma/client";
import { MongoClient } from "mongodb";

import { env } from "@/constants/env";

declare global {
  var prisma: PrismaClient | undefined;
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = env.DB_URI;
const options = {};
const db = global.prisma || new PrismaClient();

let client: MongoClient;

if (env.ENVIRONMENT === "development") {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

const clientPromise: Promise<MongoClient> = global._mongoClientPromise;

export { clientPromise, db };

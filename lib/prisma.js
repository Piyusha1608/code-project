// import {PrismaClient}  from '@prisma/client'

// export const prisma = globalThis.prisma || new PrismaClient();

// if(process.env.NODE_ENV !== "production"){
//     globalThis.prisma = prisma;
// }

// lib/prisma.js
import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
export { prisma };


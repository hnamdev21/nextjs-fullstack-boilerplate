"use server";

import { User } from "@prisma/client";

import { db } from "@/lib/db";

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export const getUserById = async (id: string): Promise<User | null> => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const createUser = async (data: { email: string; password: string | null }): Promise<User> => {
  const user = await db.user.create({
    data,
  });

  return user;
};

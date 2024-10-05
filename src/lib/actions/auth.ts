"use server";

import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import { revalidatePath } from "next/cache";

import { signIn } from "@/auth";
import ApiResponseBuilder from "@/dto/ApiResponseBuilder";

import { createUser, getUserByEmail } from "./user";

export const loginWithCredentials = async (formData: FormData): Promise<ApiResponse<User | null>> => {
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    return ApiResponseBuilder.build({ data: null, error: "Email and password are required" });
  }

  const user = await getUserByEmail(email as string);
  if (!user || !user.password) {
    return ApiResponseBuilder.build({ data: null, error: "User not found" });
  }

  const isPasswordValid = await compare(password as string, user.password);
  if (!isPasswordValid) {
    return ApiResponseBuilder.build({ data: null, error: "Invalid password" });
  }

  try {
    await signIn("credentials", { email: user.email, password: user.password });
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    } else {
      return ApiResponseBuilder.build({ data: null, error: "Something went wrong" });
    }
  }

  revalidatePath("/");

  return ApiResponseBuilder.build({ data: user, error: "" });
};

export const register = async (formData: FormData): Promise<ApiResponse<null>> => {
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    return ApiResponseBuilder.build({ data: null, error: "Email and password are required" });
  }

  const user = await getUserByEmail(email as string);
  if (user) {
    return ApiResponseBuilder.build({ data: null, error: "User already exists" });
  }

  await createUser({ email: email as string, password: password as string });

  return ApiResponseBuilder.build({ data: null, error: "" });
};

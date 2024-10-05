"use client";

import { signIn, signOut } from "next-auth/react";

export const login = async (provider: string, options: { redirectTo: string; redirect: boolean }) => {
  const { redirectTo, redirect } = options;

  await signIn(provider, { redirectTo, redirect });
};

export const logout = async (options: { redirect: boolean }) => {
  const { redirect } = options;

  await signOut({ redirect });
};

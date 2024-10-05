import { genSalt, hash } from "bcryptjs";

export const saltAndHashPassword = async ({ rawPassword, saltRounds }: { rawPassword: string; saltRounds: number }) => {
  const salt = await genSalt(saltRounds);

  return hash(rawPassword, salt);
};

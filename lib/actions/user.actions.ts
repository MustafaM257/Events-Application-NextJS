"use server";

import { CreateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../mongodb/db";
import User from "../mongodb/db/models/user.model";
export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

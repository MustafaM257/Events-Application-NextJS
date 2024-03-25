"use server";
import Category from "@/lib/mongodb/db/models/category.model";
import { connectToDatabase } from "../mongodb/db";
import { handleError } from "../utils";
import { CreateCategoryParams } from "@/types";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectToDatabase();
    const category = await Category.create({ name: categoryName });
    return JSON.parse(JSON.stringify(category));
  } catch (error) {
    handleError(error);
  }
};
export const getAllCategories = async () => {
  try {
    await connectToDatabase();
    const categories = await Category.find();
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};

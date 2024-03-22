import { Schema, models, model } from "mongoose";

export interface ICategory {
  _id: string;
  name: string;
}
const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const Category = models.Category || model("Category", CategorySchema);

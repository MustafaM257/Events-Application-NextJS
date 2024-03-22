import { Schema, Document } from "mongoose";

export interface ICategory extends Document {}
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const Category = models.Category || model("Category", CategorySchema);

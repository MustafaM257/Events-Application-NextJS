"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/mongodb/db/models/category.model";

const CategoryFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categories && setCategories(categoryList as ICategory[]);
    };
    getCategories();
  }, []);

  const onSelectCategory = (category: string) => {
    let url = "";
    if (category && category !== "All") {
      url = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: category,
      });
    } else {
      url = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    }

    router.push(url, {
      scroll: false,
    });
  };
  return (
    <Select onValueChange={(value: string) => onSelectCategory(value)}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">
          All
        </SelectItem>
        {categories.map((category) => {
          return (
            <SelectItem
              key={category._id}
              value={category.name}
              className="select-item p-regular-14"
            >
              {category.name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import searchImage from "@/public/assets/icons/search.svg";
import { Input } from "../ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { url } from "inspector";
const Search = ({ placeholder = "Search..." }: { placeholder?: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");
  useEffect(() => {
    // debouncing
    let url = "";
    const debouncer = setTimeout(() => {
      if (query) {
        url = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      } else {
        url = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }

      router.push(url, {
        scroll: false,
      });
    }, 300);

    return () => clearTimeout(debouncer);
  }, [query, searchParams, router]);
  return (
    <div className="min-h-14 w-full flex-center overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <Image src={searchImage} alt="Search..." width={24} height={24} />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;

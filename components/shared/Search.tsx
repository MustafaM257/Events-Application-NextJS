"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import searchImage from "@/public/assets/icons/search.svg";
import { Input } from "../ui/input";
import { formUrlQuery } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
const Search = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  useEffect(() => {
    // debouncing
    const debouncer = setTimeout(() => {
      if (query) {
        const url = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: query,
        });
      }
    }, 300);
  }, [query]);
  return (
    <div className="min-h-14 w-full flex-center overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <Image src={searchImage} alt="Search..." width={24} height={24} />
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        className="p-regular-16 border-0 bg-grey-50 outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default Search;

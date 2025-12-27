import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

async function fetchCategoriesData() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) throw new Error(error.message || "failed to fetch the categories");

  return data;
}

export const useCategoriesData = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategoriesData,
  });

  return { categories, isLoading, error };
};

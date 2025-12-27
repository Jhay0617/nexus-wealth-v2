import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

async function fetchProfileData() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error)
    throw new Error(error.message || "failed to fetch the profile`s data");

  return data;
}

export const useProfileData = () => {
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfileData,
  });

  return { profile, isLoading, error };
};

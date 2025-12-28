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
    .maybeSingle();

  if (!data) {
    console.log("No profile row found. Providing initial auth data.");
    return { id: user.id, email: user.email, isNewUser: true };
  }

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

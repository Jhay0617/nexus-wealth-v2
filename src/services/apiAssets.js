import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "./supabase";
import { toast } from "sonner";
async function fetchAssetData() {
  const { data, error } = await supabase.from("assets").select("*");

  if (error) throw new Error(error.message || "Failed to fetch the data");

  return data;
}

export const useAssetsData = () => {
  const {
    data: assets,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssetData,
  });

  return { assets, isLoading, error };
};

export const useCreateAsset = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createAsset,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (newAsset) => {
      const { data, error } = await supabase
        .from("assets")
        .insert([newAsset])
        .select()
        .single();

      if (error) throw new Error(error.message || "failed to create new asset");
      return data;
    },
    onSuccess: () => {
      toast.success("Asset has been created");
      queryClient.invalidateQueries({ queryKey: ["assets"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isPending, isError, createAsset };
};

export const useDeleteAsset = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteAsset,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (id) => {
      const { data, error } = await supabase
        .from("assets")
        .delete()
        .eq("id", id);

      if (error) throw new Error(error.message || "failed to delete asset");
      return data;
    },

    onSuccess: () => {
      toast.success("Asset has been deleted");
      queryClient.invalidateQueries({ queryKey: ["assets"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isPending, deleteAsset, isError };
};

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "./supabase";
import { toast } from "sonner";

async function fetchTransactionData() {
  const { data, error } = await supabase
    .from("transactions")
    .select("*,categories(name)");
  if (error)
    throw new Error(error.message || "failed to fetch transaction data");

  return data;
}

export function useTransactionsData() {
  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactionData,
  });

  return { transactions, isLoading, error };
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();

  const {
    mutate: createTransaction,
    isPending,
    isError,
  } = useMutation({
    mutationFn: async (newTransaction) => {
      const { data, error } = await supabase
        .from("transactions")
        .insert([newTransaction])
        .select()
        .single();

      if (error)
        throw new Error(error.message || "failed to create the transaction");

      return data;
    },
    onSuccess: () => {
      toast.success("Transaction has been created");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { createTransaction, isPending, isError };
}

export const getTransactions = async (id) => {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("asset_id", id);

  if (error) throw new Error(error.message || "Failed to get the transaction");

  return data;
};

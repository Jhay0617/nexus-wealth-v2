import { useParams } from "react-router-dom";
import { useAssetsData } from "../services/ApiAssets";
import { getTransactions } from "../services/ApiTransactions";
import { useQuery } from "@tanstack/react-query";

export const useAssetDetails = () => {
  const { assets } = useAssetsData();
  const { id } = useParams();

  const assetById = assets?.find((info) => info.id === id);

  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["transactions", id],
    queryFn: () => getTransactions(id),
  });

  return { assetById, transactions, isLoading, error };
};

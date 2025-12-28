import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useProfileData } from "../services/apiProfiles";
import { useCreateTransaction } from "../services/ApiTransactions";

export const useTransactionForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { profile } = useProfileData();

  const { id: assetId } = useParams();

  const { createTransaction, isPending, isError } = useCreateTransaction();

  const onSubmit = (data) => {
    const transactionData = {
      ...data,
      amount: Number(data.amount),
      asset_id: assetId,
      user_id: profile?.id,
    };

    createTransaction(transactionData, {
      onSuccess: () => {
        reset();
      },

      onError: isError,
    });
  };

  return { register, handleSubmit: handleSubmit(onSubmit), errors, isPending };
};

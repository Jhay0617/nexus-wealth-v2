import { useTransactionForm } from "../hooks/useTransactionForm";
import { NeonButton } from "../styles/LoginStyles";
import { StyledInput, StyledSelect } from "../styles/StyledModal";
import * as S from "../styles/StyledForm";
import { useCategoriesData } from "../services/apiCategories";
function TransactionForm() {
  const { register, handleSubmit, errors, isPending } = useTransactionForm();
  const { categories } = useCategoriesData();
  return (
    <S.FormContainer>
      <S.FormTitle>New Transaction</S.FormTitle>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.Label>Amount</S.Label>
        <StyledInput
          {...register("amount", { required: true })}
          type="number"
          placeholder="0.00"
        />

        <S.Label>Description</S.Label>
        <StyledInput
          {...register("description", { required: true })}
          placeholder="e.g. Weekly Groceries"
        />

        <S.Label>Category</S.Label>
        <StyledSelect {...register("category_id")} className="glass-select">
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name} ({cat.type})
            </option>
          ))}
        </StyledSelect>

        <NeonButton type="submit" className="neon-btn" disabled={isPending}>
          Add Transaction
        </NeonButton>
      </S.StyledForm>
    </S.FormContainer>
  );
}

export default TransactionForm;

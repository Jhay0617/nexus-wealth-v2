import { useForm } from "react-hook-form";
import * as Style from "../styles/StyledModal";
import { useCreateAsset } from "../services/ApiAssets";
import { useProfileData } from "../services/apiProfiles";

function CreateAssetModal({ onClose }) {
  const { profile } = useProfileData();
  const { register, handleSubmit, reset } = useForm();
  const { createAsset, isPending } = useCreateAsset();
  console.log(profile?.id);
  const onSubmit = (data) => {
    const newAsset = {
      name: data.name,
      type: data.type,
      user_id: profile?.id,
      amount: data.amount,
    };
    console.log(profile?.id);
    createAsset(newAsset, {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  return (
    <Style.ModalOverlay onClick={onClose}>
      <Style.ModalContent onClick={(e) => e.stopPropagation()}>
        <Style.StyledForm onSubmit={handleSubmit(onSubmit)}>
          <h2>New Asset</h2>

          <Style.InputGroup>
            <label>Name</label>
            <Style.StyledInput
              {...register("name")}
              placeholder="e.g. BPI Savings"
              required
            />
          </Style.InputGroup>

          <Style.InputGroup>
            <label>Type</label>
            <Style.StyledSelect {...register("type")} className="custom-select">
              <option value="Cash">Cash</option>
              <option value="Crypto">Crypto</option>
              <option value="Bank">Bank Account</option>
            </Style.StyledSelect>
          </Style.InputGroup>

          <Style.InputGroup>
            <label>Initial Balance</label>
            <Style.StyledInput
              {...register("amount")}
              type="number"
              placeholder="0.00"
              required
            />
          </Style.InputGroup>

          <button type="submit" disabled={isPending} className="neon-btn">
            {isPending ? "Syncing..." : "Initialize Asset"}
          </button>
        </Style.StyledForm>
      </Style.ModalContent>
    </Style.ModalOverlay>
  );
}

export default CreateAssetModal;

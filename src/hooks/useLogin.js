import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi, login as loginApi } from "../services/ApiAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account created successfully!");
    },
    onError: (err) => toast.error(err.message),
  });
  return { signup, isPending };
}

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
      toast.success("Welcome back!");
    },
    onError: (err) => toast.error(err.message),
  });
  return { login, isPending };
}

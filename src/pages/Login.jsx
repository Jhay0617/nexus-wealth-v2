import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLogin, useSignup } from "../hooks/useLogin";
import { StyledInput } from "../styles/StyledModal";
import {
  AuthSubtitle,
  AuthTitle,
  LoginCard,
  LoginWrapper,
  NeonButton,
  ToggleText,
} from "../styles/LoginStyles";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  const { login, isPending: isLoggingIn } = useLogin();
  const { signup, isPending: isSigningUp } = useSignup();

  const onSubmit = (data) => {
    if (isLogin) {
      login({ email: data.email, password: data.password });
    } else {
      signup({
        email: data.email,
        password: data.password,
        username: data.username,
      });
    }
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <AuthTitle>{isLogin ? "Welcome" : "Join Nexus"}</AuthTitle>
        <AuthSubtitle>
          {isLogin
            ? "Enter your credentials to use the App"
            : "Start your financial orchestration"}
        </AuthSubtitle>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
        >
          {!isLogin && (
            <StyledInput
              {...register("username")}
              placeholder="Username"
              className="glass-input"
              required
            />
          )}

          <StyledInput
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="glass-input"
            required
          />

          <StyledInput
            {...register("password")}
            type="password"
            placeholder="Password"
            className="glass-input"
            required
          />

          <NeonButton
            type="submit"
            className="neon-btn"
            disabled={isLoggingIn || isSigningUp}
          >
            {isLogin
              ? isLoggingIn
                ? "Syncing..."
                : "Login"
              : isSigningUp
              ? "Creating..."
              : "Create Account"}
          </NeonButton>
        </form>

        <ToggleText>
          {isLogin ? "New to the system?" : "Already an architect?"}{" "}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              reset();
            }}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </ToggleText>
      </LoginCard>
    </LoginWrapper>
  );
}

export default Login;

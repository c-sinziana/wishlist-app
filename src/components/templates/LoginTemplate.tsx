import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { ErrorMessages } from "../../constants/ErrorMessages";
import { Validators } from "../../constants/Validators";
import { NavigationButton } from "../atoms/NavigationButton";
import { UserContext } from "../../hooks/context/context";

type FormInput = {
  email: string;
  password: string;
};

export const LoginTemplate: React.FC = (): React.ReactElement => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitSuccessful, isValid},
    reset,
  } = useForm<FormInput>({ defaultValues: { email: "", password: "" } });

  React.useEffect(() => {
    reset({
      email: "",
      password: "",
    });

    console.log("Muie dinamo: ", isSubmitSuccessful);

    if (isSubmitSuccessful === true && isValid === true) {
      localStorage.setItem("token", JSON.stringify("tokenContent"));
    }
  }, [isSubmitSuccessful]);

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  /*
  let bazdac = getValues("firstName");
  console.log("Valoarea la bazdac: ", bazdac);
  */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
          pattern: {
            value: Validators.EMAIL_VALIDATION,
            message: ErrorMessages.VALIDATION_ERROR,
          },
        }}
        render={({ field }) => (
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
            placeholder="email"
            value={field.value}
            onChange={field.onChange}
            error={errors.email ? true : false}
            helperText={errors.email && ErrorMessages.EMAIL_ERROR}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: true,
          pattern: {
            value: Validators.PASSWORD_VALIDATION,
            message: ErrorMessages.VALIDATION_ERROR,
          },
        }}
        render={({ field }) => (
          <TextField
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
            type="password"
            placeholder="password"
            value={field.value}
            onChange={field.onChange}
            error={errors.password ? true : false}
            helperText={errors.password && ErrorMessages.PASSWORD_ERROR}
          />
        )}
      />

      <NavigationButton
        buttonType="submit"
        buttonText="Login"
        onClickLogic={console.log("Apas register")}
        to="/"
      />
    </form>
  );
};

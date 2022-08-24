import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import * as ErrorMessages from "../../constants/errors";
import * as Validators from "../../constants/validators";
import { NavigationButton } from "../atoms/NavigationButton";
import { Description } from "../atoms/Description";

type FormInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  city: string;
  street: string;
  zipCode: string | number;
};

export const RegisterTemplate: React.FC = (): React.ReactElement => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormInput>({ defaultValues: { email: "", password: "" } });

  React.useEffect(() => {
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      city: "",
      street: "",
      zipCode: "",
    });
  }, [isSubmitSuccessful]);

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  /*
  let values = getValues("firstName");
  console.log("Valoarea: ", values);
  */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: true,
          pattern: {
            value: Validators.NAME_VALIDATION,
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
            placeholder="first name"
            value={field.value}
            onChange={field.onChange}
            error={errors.firstName ? true : false}
            helperText={errors.firstName && ErrorMessages.REQUIRED_ERROR}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{
          required: true,
          pattern: {
            value: Validators.NAME_VALIDATION,
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
            placeholder="last name"
            value={field.value}
            onChange={field.onChange}
            error={errors.lastName ? true : false}
            helperText={errors.lastName && ErrorMessages.REQUIRED_ERROR}
          />
        )}
      />

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

      <Description description="Address:"></Description>
      <Controller
        control={control}
        name="country"
        rules={{
          required: true,
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
            placeholder="country"
            value={field.value}
            onChange={field.onChange}
            error={errors.country ? true : false}
            helperText={errors.country && ErrorMessages.REQUIRED_ERROR}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        rules={{
          required: true,
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
            placeholder="city"
            value={field.value}
            onChange={field.onChange}
            error={errors.city ? true : false}
            helperText={errors.city && ErrorMessages.REQUIRED_ERROR}
          />
        )}
      />
      <Controller
        control={control}
        name="street"
        rules={{
          required: true,
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
            placeholder="street"
            value={field.value}
            onChange={field.onChange}
            error={errors.street ? true : false}
            helperText={errors.street && ErrorMessages.REQUIRED_ERROR}
          />
        )}
      />
      <Controller
        control={control}
        name="zipCode"
        rules={{
          required: true,
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
            placeholder="ZIP Code"
            value={field.value}
            onChange={field.onChange}
            error={errors.zipCode ? true : false}
            helperText={errors.zipCode && ErrorMessages.REQUIRED_ERROR}
          />
        )}
      />

      <NavigationButton
        buttonType="submit"
        buttonText="Register"
        onClick={() => console.log("Apas register")}
      />
    </form>
  );
};

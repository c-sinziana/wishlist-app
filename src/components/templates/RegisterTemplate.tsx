import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import { ErrorMessages } from "../../constants/ErrorMessages";
import { Validators } from "../../constants/Validators";
import { NavigationButton } from "../atoms/NavigationButton";
import { Description } from "../atoms/Description";
import { Navigate, useNavigate } from "react-router-dom";
import { RegisterApi, RegisterResponse } from "../../api/RegisterApi";
import { Email, Password } from "@mui/icons-material";

type FormInput = {
  emailInput: string;
  passwordInput: string;
  dobInput: string;
  nameInput: string;
  phoneInput: string;
};

export const RegisterTemplate: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormInput>({
    defaultValues: {
      emailInput: "",
      passwordInput: "",
      dobInput: "",
      nameInput: "",
      phoneInput: "",
    },
  });

  React.useEffect(() => {
    reset({
      emailInput: "",
      passwordInput: "",
      dobInput: "",
      nameInput: "",
      phoneInput: "",
    });

    if (isSubmitSuccessful == true) {
      navigate("/home");
    }
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: FormInput) => {
    console.log(data);
  };

  const [token, setToken] = React.useState<RegisterResponse>();
  /*
  let values = getValues("firstName");
  console.log("Valoarea: ", values);
  */

  const registerApi = async () =>
    RegisterApi.postRegister({
      email: getValues("emailInput"),
      password: getValues("passwordInput"),
      dob: getValues("dobInput"),
      name: getValues("nameInput"),
      phone: getValues("phoneInput"),
    })
      .then((data) => {
        setToken(data);
        console.log("Token is: ", token);
      })
      .catch((err) => {
        console.log(err);
      });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Controller
          control={control}
          name="nameInput"
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField
              sx={{
                display: "flex",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
              placeholder="nameInput"
              value={field.value}
              onChange={field.onChange}
              error={errors.nameInput ? true : false}
              helperText={errors.nameInput && ErrorMessages.REQUIRED_ERROR}
            />
          )}
        />
        <Controller
          control={control}
          name="dobInput"
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
              placeholder="date of birth"
              value={field.value}
              onChange={field.onChange}
              error={errors.dobInput ? true : false}
              helperText={errors.dobInput && ErrorMessages.REQUIRED_ERROR}
            />
          )}
        />
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Controller
          control={control}
          name="phoneInput"
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField
              sx={{
                display: "flex",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
              placeholder="phoneInput"
              value={field.value}
              onChange={field.onChange}
              error={errors.phoneInput ? true : false}
              helperText={errors.phoneInput && ErrorMessages.REQUIRED_ERROR}
            />
          )}
        />
      </Grid>

      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Controller
          control={control}
          name="emailInput"
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
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
              placeholder="emailInput"
              value={field.value}
              onChange={field.onChange}
              error={errors.emailInput ? true : false}
              helperText={errors.emailInput && ErrorMessages.EMAIL_ERROR}
            />
          )}
        />
      </Grid>
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Controller
          control={control}
          name="passwordInput"
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
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
              type="passwordInput"
              placeholder="passwordInput"
              value={field.value}
              onChange={field.onChange}
              error={errors.passwordInput ? true : false}
              helperText={errors.passwordInput && ErrorMessages.PASSWORD_ERROR}
            />
          )}
        />
      </Grid>

      <Button type="submit" onClick={() => console.log("Apas register")}>
        Register
      </Button>
    </form>
  );
};

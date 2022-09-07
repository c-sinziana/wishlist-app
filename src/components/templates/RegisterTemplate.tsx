import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Alert, Button, Grid, TextField } from "@mui/material";

import { ErrorMessages } from "../../constants/ErrorMessages";
import { Validators } from "../../constants/Validators";
import { RegisterApi, RegisterPostRequest } from "../../api/RegisterApi";

export const RegisterTemplate: React.FC = (): React.ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<RegisterPostRequest>({
    defaultValues: {
      email: "",
      password: "",
      dob: "",
      name: "",
      phone: "",
    },
  });

  const [registerResponseData, setRegisterResponseData] =
    React.useState<RegisterPostRequest>({
      email: "",
      password: "",
      dob: "",
      name: "",
      phone: "",
    });
  const [isResponseSuccesful, setIsResponseSuccessful] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    async function registerFunction() {
      await registerFetcher(registerResponseData);
    }

    if (isSubmitSuccessful == true) {
      registerFunction();
    }

    reset({
      email: "",
      password: "",
      dob: "",
      name: "",
      phone: "",
    });
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: RegisterPostRequest) => {
    setRegisterResponseData(data);
  };

  const registerFetcher = async (bodyData: RegisterPostRequest) => {
    await RegisterApi.postRegister(bodyData)
      .then((data) => {
        if (data.id !== undefined && data.errors === undefined) {
          setIsResponseSuccessful(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isResponseSuccesful === false ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
            <Controller
              control={control}
              name="name"
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
                  placeholder="name"
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.name ? true : false}
                  helperText={errors.name && ErrorMessages.REQUIRED_ERROR}
                />
              )}
            />
            <Grid
              container
              display="flex"
              flexDirection="row"
              justifyContent="center"
            >
              <Controller
                control={control}
                name="phone"
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
                    placeholder="phone"
                    value={field.value}
                    onChange={field.onChange}
                    error={errors.phone ? true : false}
                    helperText={errors.phone && ErrorMessages.REQUIRED_ERROR}
                  />
                )}
              />
            </Grid>
            <Controller
              control={control}
              name="dob"
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
                  error={errors.dob ? true : false}
                  helperText={errors.dob && ErrorMessages.REQUIRED_ERROR}
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
          </Grid>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="center"
          >
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
          </Grid>

          <Button type="submit" onClick={() => console.log("Apas register")}>
            Register
          </Button>
        </form>
      ) : (
        <Alert severity="success">Account succesfully created</Alert>
      )}
    </>
  );
};

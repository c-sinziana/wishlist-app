import React, { useState, useEffect, useReducer } from "react";
import { useForm, Controller } from "react-hook-form";
import { Alert, Button, Grid, TextField } from "@mui/material";

import { RegisterApi, RegisterPostRequest } from "../../api/RegisterApi";

import { Configs } from "../../constants/Configs";
import { ErrorMessages } from "../../constants/ErrorMessages";
import { Validators } from "../../constants/Validators";

export const RegisterTemplate: React.FC = (): React.ReactElement => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
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
    useState<RegisterPostRequest>({
      email: "",
      password: "",
      dob: "",
      name: "",
      phone: "",
    });
  const [isResponseSuccesful, setIsResponseSuccessful] = useState<
    boolean | undefined
  >();

  useEffect(() => {
    if (isSubmitSuccessful === true) {
      registerFetcher(registerResponseData);
      reset({
        email: "",
        password: "",
        dob: "",
        name: "",
        phone: "",
      });
    }
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (isResponseSuccesful === true) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        window.location.pathname = "/login";
      }, Configs.ALERT_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [isResponseSuccesful]);

  const registerFetcher = async (bodyData: RegisterPostRequest) => {
    await RegisterApi.postRegister(bodyData)
      .then((data) => {
        if (data.id !== undefined && data.errors === undefined) {
          setIsResponseSuccessful(true);
        } else {
          setIsResponseSuccessful(false);
        }
      })
      .catch((err) => {
        setIsResponseSuccessful(false);
        console.log(err);
      });
  };

  const onSubmit = async (data: RegisterPostRequest) => {
    setRegisterResponseData(data);
  };

  return (
    <>
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
              pattern: {
                value: Validators.DOB_VALIDATION,
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
                placeholder="date of birth"
                value={field.value}
                onChange={field.onChange}
                error={errors.dob ? true : false}
                helperText={errors.dob && ErrorMessages.DOB_ERROR}
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

        <Button type="submit">Register</Button>
      </form>
      {isResponseSuccesful === true && (
        <Alert severity="success">Account succesfully created!</Alert>
      )}
      {isResponseSuccesful === false && (
        <Alert severity="error">
          There was a problem creating your account
        </Alert>
      )}
    </>
  );
};

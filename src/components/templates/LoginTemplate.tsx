import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { Alert, Button, TextField } from "@mui/material";
import { ErrorMessages } from "../../constants/ErrorMessages";
import { Validators } from "../../constants/Validators";
import { NavigationButton } from "../atoms/NavigationButton";
import { UserContext } from "../../hooks/context/context";
import { LoginApi } from "../../api/LoginApi";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type FormInput = {
  email: string;
  password: string;
};

export const LoginTemplate: React.FC = (): React.ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormInput>({ defaultValues: { email: "", password: "" } });

  const navigate = useNavigate();

  const [loginResponseData, setLoginResponseData] = React.useState<FormInput>({
    email: "",
    password: "",
  });
  const [isResponseSuccesful, setIsResponseSuccessful] =
    React.useState<boolean>();

  React.useEffect(() => {
    async function loginFunction() {
      await loginFetcher(loginResponseData);
    }

    if (isSubmitSuccessful == true) {
      loginFunction();
      //let tokenValue = localStorage.getItem("token");
      let tokenLogin: string | undefined = Cookies.get("token");
      console.log("The token is", tokenLogin);
    }

    reset({
      email: "",
      password: "",
    });
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: FormInput) => {
    setLoginResponseData(data);
  };

  const loginFetcher = async (bodyData: FormInput) => {
    await LoginApi.postLogin(bodyData)
      .then((data) => {
        if (data.token !== undefined && data.errors === undefined) {
          setIsResponseSuccessful(true);
          //localStorage.setItem("token", JSON.stringify(data.token));
          Cookies.set("token", data.token, { expires: 0.5 });
        } else {
          setIsResponseSuccessful(false);
        }
      })
      .catch((err) => {
        setIsResponseSuccessful(false);
        console.log(err);
      });
  };

  return (
    <>
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

        <Button type="submit">Login</Button>
      </form>
      {isResponseSuccesful === false && (
        <Alert severity="error">
          There was a problem when trying to sign in!
        </Alert>
      )}
    </>
  );
};

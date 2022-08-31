export const Validators = {
  NAME_VALIDATION: /[A-Z][A-Za-z-]{0,60}$/,
  EMAIL_VALIDATION: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  PASSWORD_VALIDATION:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  ADDRESS_VALIDATION: /^[a-zA-Z0-9\s,'-]*$/,
};

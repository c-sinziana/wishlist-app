export const NAME_VALIDATION: RegExp = /[A-Z][A-Za-z-]{0,60}$/;
export const EMAIL_VALIDATION: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const PASSWORD_VALIDATION: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const ADDRESS_VALIDATION: RegExp = /^[a-zA-Z0-9\s,'-]*$/;

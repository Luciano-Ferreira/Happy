// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidation(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

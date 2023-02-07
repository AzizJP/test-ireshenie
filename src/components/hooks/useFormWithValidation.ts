import { useState, useCallback, ChangeEvent } from 'react';

export function useFormWithValidation(
  initialValues: any,
  initialErrors: any,
  initialValid: any
) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(initialValid);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      validity: { valid },
    } = evt.target;

    const validation = () => {
      if (name === 'copy-password') {
        return values['password'] === value;
      }
      return valid;
    };
    const validationMessage = () => {
      if (name === 'word') {
        if (!validation()) {
          return 'Неверное контрольное слово';
        }
      }
      if (name === 'password') {
        if (!validation()) {
          return 'Пароль должен быть не менее 6 символов';
        }
      }
      if (name === 'copy-password') {
        if (!validation()) {
          return 'Пароли не совпадают';
        }
      }
      return evt.target.validationMessage;
    };
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage() });
    setIsValid({ ...isValid, [name]: validation() });
  };
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
    resetForm,
  };
}

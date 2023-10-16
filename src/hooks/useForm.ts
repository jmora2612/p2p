/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import { IOnInputChange, IFormValidations, IFormCheckedValues } from "../shared";

export const useForm = (
  initialForm = {},
  formValidations: IFormValidations = {}
) => {
  const [formState, setFormState] = useState<any>(initialForm);
  const [formValidation, setFormValidation] = useState<any>({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }: IOnInputChange) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: IFormCheckedValues = {
      registerNameValid: null,
      registerEmailValid: null,
      registerPasswordValid: null,
      registerPassword2Valid: null,
    };

    for (const formField of Object.keys(
      formValidations
    ) as (keyof IFormValidations)[]) {
      const [fn, errorMessage]: any = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid,
  };
};

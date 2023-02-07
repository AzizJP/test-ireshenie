import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IFormInputProps {
  name: string;
  placeholder: string;
  type: string;
  isRequired: boolean;
  isNewPassInput?: boolean;
  isValidate?: boolean;
  errorText?: string;
  minLength?: number;
  maxLength?: number;
  value?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onEyeClick?: MouseEventHandler<HTMLButtonElement>;
}

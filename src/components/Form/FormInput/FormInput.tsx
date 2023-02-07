import { FC, memo } from 'react';

import { ReactComponent as Eye } from '../../../assets/eye.svg';

import './FormInput.scss';

import { IFormInputProps } from './FormInputTypes';

const FormInput: FC<IFormInputProps> = memo(
  ({
    name,
    placeholder,
    type,
    isRequired,
    isNewPassInput,
    isValidate,
    errorText,
    minLength,
    maxLength,
    value,
    onChange,
    onEyeClick,
  }) => {
    return (
      <label className="form__row">
        <span className="form__row_symbol">&#42;</span>
        <input
          name={name}
          className={`form__input ${
            !isValidate && 'form__input-error'
          }`}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
        {isNewPassInput && (
          <button
            className="form__row-button"
            type="button"
            onClick={onEyeClick}
          >
            <Eye className="form__row-icon" />
          </button>
        )}
        {!isValidate && (
          <span className="form__row-error">{errorText}</span>
        )}
      </label>
    );
  }
);

export default FormInput;

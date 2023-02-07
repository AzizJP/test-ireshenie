import { FC, FormEvent, memo, useCallback, useState } from 'react';

import FormHeader from './FormHeader/FormHeader';
import FormInput from './FormInput/FormInput';
import FormFooter from './FormFooter/FormFooter';

import './Form.scss';

import { useFormWithValidation } from '../hooks/useFormWithValidation';

const Form: FC = memo(() => {
  const [inputType, setInputType] = useState('password');
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation(
      {
        'login': '',
        'word': '',
        'password': '',
        'copy-password': '',
      },
      {
        'login': '',
        'word': '',
        'password': '',
        'copy-password': '',
      },
      {
        'login': true,
        'word': true,
        'password': true,
        'copy-password': true,
      }
    );
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (
      values['login'] &&
      values['word'] &&
      values['password'] &&
      values['copy-password']
    ) {
      if (
        isValid['login'] &&
        isValid['word'] &&
        isValid['password'] &&
        isValid['copy-password']
      ) {
        resetForm(
          {
            'login': '',
            'word': '',
            'password': '',
            'copy-password': '',
          },
          {
            'login': '',
            'word': '',
            'password': '',
            'copy-password': '',
          }
        );
        return console.log('Успешное изменение пароля');
      }
    }
    return console.log('Не заполнена форма');
  };

  const toggleEyeClick = useCallback(() => {
    if (inputType === 'password') return setInputType('text');
    return setInputType('password');
  }, [inputType]);

  return (
    <form className="form" noValidate onSubmit={handleSubmit}>
      <FormHeader />
      <section className="form__main">
        <FormInput
          name="login"
          isRequired={true}
          isValidate={isValid['login']}
          type="text"
          placeholder="Email / Логин"
          value={values['login']}
          onChange={handleChange}
        />
        <FormInput
          name="word"
          isRequired={true}
          isValidate={isValid['word']}
          errorText={errors['word']}
          type="text"
          placeholder="Контрольная строка"
          minLength={6}
          maxLength={32}
          value={values['word']}
          onChange={handleChange}
        />
        <FormInput
          name="password"
          isRequired={true}
          isValidate={isValid['password']}
          errorText={errors['password']}
          isNewPassInput={true}
          type={inputType}
          placeholder="Новый пароль"
          minLength={6}
          value={values['password']}
          onChange={handleChange}
          onEyeClick={toggleEyeClick}
        />
        <FormInput
          name="copy-password"
          isRequired={true}
          isValidate={isValid['copy-password']}
          errorText={errors['copy-password']}
          type="password"
          placeholder="Подтверждение пароля"
          value={values['copy-password']}
          onChange={handleChange}
        />
        <p className="form__text">
          <span>&#42;</span> Обязательные поля
        </p>
      </section>
      <FormFooter />
    </form>
  );
});

export default Form;

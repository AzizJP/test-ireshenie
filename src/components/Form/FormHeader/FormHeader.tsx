import { FC, memo } from 'react';

import { ReactComponent as Logo } from '../../../assets/logo.svg';

import './FormHeader.scss';

const FormHeader: FC = memo(() => {
  return (
    <section className="form__header">
      <div className="form__logo">
        <Logo className="form__logo-icon" />
      </div>
      <h1 className="form__title">Изменение пароля</h1>
    </section>
  );
});

export default FormHeader;

import { FC, memo } from 'react';

import Button from './Button/Button';

import './FormFooter.scss';

const FormFooter: FC = memo(() => {
  return (
    <section className="form__footer">
      <Button />
      <div className="form__routes">
        <a href="#" className="form__routes_link">
          Зарегистрироваться
        </a>
        <a href="#" className="form__routes_link">
          Войти
        </a>
      </div>
    </section>
  );
});

export default FormFooter;

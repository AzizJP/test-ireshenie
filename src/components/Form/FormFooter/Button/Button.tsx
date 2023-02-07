import { FC, memo } from 'react';

import { ReactComponent as Arrow } from '../../../../assets/arrow.svg';

import './Button.scss';

const Button: FC = memo(() => {
  return (
    <button type="submit" className="button">
      Изменить пароль
      <Arrow className="button__arrow" />
    </button>
  );
});

export default Button;

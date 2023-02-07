import { FC, memo } from 'react';

import Form from '../Form/Form';

import './App.scss';

const App: FC = memo(() => {
  return (
    <div className="page">
      <Form />
    </div>
  );
});

export default App;

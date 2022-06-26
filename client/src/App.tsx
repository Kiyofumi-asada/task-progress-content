import React from 'react';
import { Toaster } from 'react-hot-toast';
import Content from './presentation/components/content';

const App: React.FC = () => {
  return (
    <>
      <Toaster />
      <Content />
    </>
  );
};

export default App;

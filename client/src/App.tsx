import React from 'react';
import { Toaster } from 'react-hot-toast';
import TableContainer from './presentation/components/table-container';

const App: React.FC = () => {
  return (
    <>
      <Toaster />
      <TableContainer />
    </>
  );
};

export default App;

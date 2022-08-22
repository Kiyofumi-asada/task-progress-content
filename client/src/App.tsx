import React from 'react';
import { Toaster } from 'react-hot-toast';
import TableContainer from './presentation/components/table-container';

const App: React.FC = () => {
  return (
    <div className="App">
      <Toaster />
      <TableContainer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Router />} />
          <Route path="study" element={<StudyContainer />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;

import React from 'react';
import { Toaster } from 'react-hot-toast';
import TableContainer from './presentation/components/table-container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './presentation/components/edit-user';
import EditProjects from './presentation/components/edit-projects';

const App: React.FC = () => {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableContainer />} />
          <Route path="user" element={<EditUser />} />
          <Route path="projects" element={<EditProjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

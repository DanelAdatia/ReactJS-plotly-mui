import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import GraphPage from './pages/GraphPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path='/date/:date' element={<GraphPage />} />
    </Routes>
  );
};

export default Router;

import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { HOME_ROUTE } from './routeKeys';
import Home from 'pages/Home/Home';

function Layout() {
  return (
    <div className="flex bg-gray-100">
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Layout />}>
        <Route path={HOME_ROUTE} index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

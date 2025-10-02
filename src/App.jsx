import Login from './Pages/Login/Login.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Sobre from './Pages/Sobre/Sobre.jsx';
import Contato from './Pages/Contato/Contato.jsx';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route }  from 'react-router';

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route index element={<HomePage />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Sobre' element={<Sobre />} />
    <Route path='/Contato' element={<Contato />} />

  </Route>
)) 

function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
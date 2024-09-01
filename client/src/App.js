import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './component/action/Login';
import DataProvider from './context/DataProvider';
import { BrowserRouter ,Route,Routes,Outlet,Navigate} from 'react-router-dom';
import Home from './component/home/Home';
import Header from './component/header/Header';
import CreatePost from './component/create/CreatePost';
import DetailView from './component/details/DetailView';
import Update from './component/create/Update';
import Contact from './component/contact/Contact';
import About from './component/about/About';
import { Box } from '@mui/material';
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  // const token = sessionStorage.getItem('accessToken');
  return isAuthenticated 
  // && token
   ? 
    <>
    <Header/>
      
       <Outlet />
    </> : <Navigate replace to='/action' />
};

function App() {
  const [isAuthenticated ,isUserAuthenticated]=useState(false);
  return (
    <div className="App">
   <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element={<Update />} />
            </Route>

            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/about' element={<About />} />
            </Route>

            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element={<Contact />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
     
    </div>
  );
}

export default App;

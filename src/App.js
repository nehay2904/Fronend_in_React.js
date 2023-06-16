import * as React from 'react';
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import OverAll_Design from './components/OverAll_Design';
import Register from './components/Register';
import Find_donor from './components/Find_donor';
import Policy from './components/Policy';
import Login from './components/Login';
import Request from './components/Request';
import About from './components/About';
import Privacy from './components/Privacy';
import Dash from './components/Dash';
import Profile from './components/Profile';
import Update from './components/Update';



export default function App() {
  return (
    <>
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< OverAll_Design />}></Route>
                 {/* <Route  path='search_donor' element={< Option/>}></Route> */}
                 <Route  path='/register' element={<Register/>}></Route>
                 <Route  path='/about' element={< About/>}></Route>
                 <Route  path='/policy' element={< Policy/>}></Route>
                 <Route  path='/request' element={< Request/>}></Route>
                 <Route  path='/privacy' element={< Privacy/>}></Route>
                 <Route  path='/find_donor' element={< Find_donor/>}></Route>
                 <Route  path='/dashboard' element={< Dash/>}></Route>
                 <Route  path='/profile' element={< Profile/>}></Route>
                 <Route  path='/update' element={<Update/>}></Route>
                 <Route  path='/login' element={<Login/>}></Route>
         </Routes>
          </div>
       </Router>
    </>
  );
}

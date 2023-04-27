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
// import Option from './components/Option';
import Thanks from './components/Thanks';
import Policy from './components/Policy';
import BasicTable from './Material_com/Tables';
import Forms from './Material_com/Forms';
import Login from './components/Login';



export default function App() {
  return (
    <>
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< OverAll_Design />}></Route>
                 {/* <Route  path='search_donor' element={< Option/>}></Route> */}
                 <Route  path='/register' element={< Register />}></Route>
                 <Route  path='register/login' element={< Login/>}></Route>
                 <Route  path='/policy' element={< Policy/>}></Route>
                 <Route  path='policy/list_donor' element={< Find_donor/>}></Route>
                 <Route  path='/register/thanks' element={< Thanks/>}></Route>
          </Routes>
          </div>
       </Router>
    </>
  );
}

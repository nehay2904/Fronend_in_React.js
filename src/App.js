import * as React from 'react';
import Home from './components/Home';
import './App.css'
import Donar from './components/Donar';
import Response from './components/Response';
import Safe from './components/Safe';
import Community from './components/Community';
export default function App() {
  return (
    <>
    <Home />
    <Donar />
    <Response />
    <Safe />
    <Community />
    </>
  );
}

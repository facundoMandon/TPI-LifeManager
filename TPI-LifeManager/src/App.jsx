import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header, Footer, TaskCard, NavBar} from './components';
import {Ejercicio, Bienestar, Estudios, Finanzas, Tareas, Trabajo} from './sections'




function App() {
  return (
    <div>
    <Header />
    <main className='container'>
      <Estudios />
      <Trabajo />
      <Ejercicio />
      <Bienestar />
      <Finanzas />
      <Tareas />
    </main>
    <Footer />
    </div>

  );
}

export default App

import React from 'react';
import './App.css';
import NewNote from './components/NewNote';
import Notes from './components/Notes';


const App = () => {
 /*  const state = useSelector(state => state) //seleccion que parte del estado quiero suscribirme y leer, lo guardo en el state
  const dispatch = useDispatch()  */

  return (
    <div className="App">
      <NewNote />
      <Notes />
    </div>
  );
}

export default App;

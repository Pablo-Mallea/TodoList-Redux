import { useDispatch } from "react-redux";
import { createNote } from "../reducers/notereducer";

const NewNote = () => {
  
  const dispatch = useDispatch()
  
  const addNote = (e) => {
    e.preventDefault();

    const { target } = e; //obtengo el o los input
    const content = target.note.value; //obtengo el valor del inpute con el name note
    target.note.value = ""; //reseteo el valor del target
    dispatch(createNote(content)); //Action creator
  };
  return (
    <form onSubmit={addNote}>
      <input name="note"></input>
      <button>Agregar</button>
    </form>
  );
};

export default NewNote;

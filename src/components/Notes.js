import { useDispatch, useSelector } from "react-redux";
import { changeImportant } from "../reducers/notereducer";
const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch()

  const important = (id) => {
    dispatch(changeImportant(id))
  }
  return (
    <div>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              {note.content}
              <strong onClick={ () => important(note.id)}>{note.important ? "important" : "no important"}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notes;

import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";
import { useSelector } from "react-redux"

export const Filters = () => {
    const notes = useSelector((state) => state.notes)
    
    const dispatch = useDispatch() 

    const filterSelected = (value) => {
        console.log(value, notes)
        dispatch(filterChange(value, notes))
    }
  return (
    <div>
      <ul>
        All
        <input type="radio" name="filter" onChange={() => {filterSelected('all')}} />
        Important
        <input type="radio" name="filter" onChange={() => {filterSelected('important')}} />
        No important
        <input type="radio" name="filter" onChange={() => {filterSelected('noImportant')}} />
      </ul>
    </div>
  );
};

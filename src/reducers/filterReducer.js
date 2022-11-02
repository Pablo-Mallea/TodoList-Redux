import { filterImportant,filterNoImportant } from "./notereducer";

const initialFilter = { type: "all" };

export const filterReducer = (state = initialFilter, filterAction) => {
  if (filterAction.type === "all") {
    const notes = filterAction.payload;
    console.log(notes);
  }
  if (filterAction.type === "important") {
    const notes = filterAction.payload;
    console.log(notes)
    const importantId = notes.map((e) => {
      if (e.important === true) {
        return e.id
      }
      return 0;
    });
    console.log(importantId);
    filterImportant(importantId);
  }
  if (filterAction.type === "noImportant") {
    const notes = filterAction.payload;
    console.log(notes)
    const noImportantId = notes.map((e) => {
      if (e.important === false) {
        return e.id
      }
      return 0;
    });
    console.log(noImportantId);
    filterNoImportant(noImportantId);
  }
  return state;
};

export const filterChange = (value, notes) => {
  return {
    type: value,
    payload: notes,
  };
};

const initialState = [{
    content: 'Escribe tus notas',
    important: true,
    id: 1
}]
export const notereducer = (state = initialState, action) => {
    if(action.type === 'newNote'){
      //return state.concat(action.payload)
      return [...state, action.payload]
    }

    if(action.type === 'important'){
      const {id} = action.payload
      return state.map ( note => {
        if(note.id === id){
          return {
            ...note,
            important: !note.important
          }
        }
        return note
      })
    }
  return state
}

const generateId = () => Math.floor(Math.random() * 999) + 1 //genero un numero entre el 1 y el 999

export const createNote = content => {
    return {  
        type: 'newNote',
        payload: {
          content,
          important: false,
          id: generateId()
        }
    }
}

export const changeImportant = id => {
  return {
    type: "important",
    payload: { id }
  }
}
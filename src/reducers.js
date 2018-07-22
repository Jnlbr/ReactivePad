import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_NOTE,
  SET_NOTES,
} from './constants/notes';

const initialState = {
  notes: [],
  note: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [{ id: action.id, type: action.noteType }, ...state.notes]
      }
    case DELETE_NOTE:
      return {
        notes: state.notes.filter(note => note.id !== action.id)
      }
    case EDIT_NOTE:
      const notes = state.notes.map(note => {
        if(note.id === action.id) {
          return {
            ...note,
            ...action.values
          }
        }
        return note
      })
      return {
        notes: notes,
      }
    case SET_NOTES:
      return {
        notes: action.notes,
      }
    case GET_NOTE:
    const note = state.notes.find(note => note.id === action.id)
      return {
        ...state,
        note: note,
      }
    default:
      return state;
  }
}
import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_NOTE,
  SET_NOTES,
  DID_UNDO,
  DID_NOT_UNDO
} from './constants/notes';

const initialState = {
  notes: [],
  note: {},
  undo: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case DID_UNDO: 
      return {
        ...state,
        undo: true,
      }
    case DID_NOT_UNDO:
      return {
        ...state,
        undo: false,
      }
    case ADD_NOTE:
      return {
        ...state,
        notes: [{ id: action.id, type: action.noteType, title: "new note", date: new Date().toLocaleString() }, ...state.notes]
      }
    case DELETE_NOTE:
      return {
        ...state,
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
        ...state,
        notes: notes,
      }
    case SET_NOTES:
      return {
        ...state,
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
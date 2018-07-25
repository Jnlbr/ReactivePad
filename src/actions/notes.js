import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_NOTE,
  SET_NOTES,
  DID_UNDO,
  DID_NOT_UNDO
} from '../constants/notes';
import { getItem, setItem } from '../helpers/storage';

export const didUndo = () => {
  return {
    type: DID_UNDO,
  }
}
export const didNotUndo = () => {
  return {
    type: DID_NOT_UNDO,
  }
}

export const addNote = (noteType) => {
  const id = String(Date.now() + Math.random());
  return (dispatch, getState) => {
    dispatch({ type: ADD_NOTE, id, noteType });
    const { notes } = getState();
    setItem('notes', JSON.stringify(notes)).then((res) => {
      // Handle success
    })
  }
  return 
}

export const deleteNote = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_NOTE, id })
    const { notes } = getState();
    setItem('notes', JSON.stringify(notes)).then((res) => {
      // Handle success
    })
  }
}

export const editNote = (id,values) => {
  return (dispatch, getState) => {
    dispatch({ type: EDIT_NOTE, id, values });
    const { notes } = getState();
    setItem('notes', JSON.stringify(notes)).then((res) => {
      // Handle success
    })
  }
}

export const getNote = (id) => {
  return {
    type: GET_NOTE,
    id
  }
}

export const setNotes = (notes) => {
  return {
    type: SET_NOTES,
    notes,
  }
}
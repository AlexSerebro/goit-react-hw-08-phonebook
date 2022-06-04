import constants from './constants'

export default function phonebookReducer(state = { contacts: [], filter: '' }, action) {
  switch (action.type) {
    case constants.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    case constants.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }
    case constants.DEL_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      }
    
    case constants.UPD_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      }
      
  
    default:
      return state;
  }
};
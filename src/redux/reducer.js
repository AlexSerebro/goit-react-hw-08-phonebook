import { combineReducers } from 'redux';
import constacts from './constacts';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// export default function phonebookReducer(state = initialState, action) {
//   switch (action.type) {
//     case constants.SET_FILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     case constants.ADD_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case constants.DEL_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };

//     case constants.UPD_CONTACTS:
//       return {
//         ...state,
//         contacts: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// const phonebookInitialState = [];

function phonebookReducer(state = [], { type, payload }) {
  switch (type) {
    case constacts.ADD_CONTACT:
      return [...state, payload];

    case constacts.DEL_CONTACT:
      // console.log(state);
      return [...state.filter(contact => contact.id !== payload)];

    case constacts.UPD_CONTACTS:
      return payload;

    default:
      return state;
  }
}

// const filterState = '';

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case constacts.SET_FILTER:
      return payload;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  contacts: phonebookReducer,
  filter: filterReducer,
});

export default rootReducer;

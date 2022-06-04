import constants from "./constants"

export const setFilterValue = (value) => {
  return {
    type: constants.SET_FILTER,
    payload: value,
  }
};

export const addContact = (contact) => {
  return {
    type: constants.ADD_CONTACT,
    payload: contact,
  }
}

export const delContact = (id) => {
  return {
    type: constants.DEL_CONTACT,
    payload: id,
  }
}

export const updContacts = (contacts) => {
  return {
    type: constants.UPD_CONTACTS,
    payload: contacts,
  }
}


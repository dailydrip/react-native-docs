export const FETCH_CONTENT = 'FETCH_CONTENT'
export const FETCH_DOCS_LIST = 'FETCH_DOCS_LIST'
export const GOT_DOCS_LIST = 'GOT_DOCS_LIST'
export const NO_OP = 'NO_OP'

const setItem = (item) => {
  return {
    type: SET_ITEM,
    item,
  }
}

const fetchDocsList = () => {
  return {
    type: FETCH_DOCS_LIST
  }
}

const gotDocsList = (content) => {
  return {
    type: GOT_DOCS_LIST,
    content,
  }
}

export const Actions = {
  fetchDocsList,
  setItem,
  gotDocsList,
}

export const FETCH_DOCS_CONTENT = 'FETCH_DOCS_CONTENT'
export const FETCH_DOCS_LIST = 'FETCH_DOCS_LIST'

export const GOT_DOCS_LIST = 'GOT_DOCS_LIST'
export const GOT_DOCS_CONTENT = 'GOT_DOCS_CONTENT'

export const NO_OP = 'NO_OP'

const fetchDocsContent = (item) => {
  return {
    type: FETCH_DOCS_CONTENT,
    item
  }
}

const fetchDocsList = () => {
  return {
    type: FETCH_DOCS_LIST
  }
}

const gotDocsContent = (content) => {
  return {
    type: GOT_DOCS_CONTENT,
    content,
  }
}

const gotDocsList = (content) => {
  return {
    type: GOT_DOCS_LIST,
    content,
  }
}

const noOp = () => {
  return {
    type: NO_OP
  }
}

export const Actions = {
  fetchDocsContent,
  fetchDocsList,
  gotDocsContent,
  gotDocsList,
  noOp
}

export const FETCH_CONTENT = 'FETCH_CONTENT'
export const NO_OP = 'NO_OP'

const setItem = (item) => {
  return {
    type: SET_ITEM,
    item,
  }
}

const fetchContent = () => {
  return {
    type: FETCH_CONTENT
  }
}

const setContent = (content) => {
  return {
    type: SET_CONTENT,
    content,
  }
}

const noOp = () => {
  return {
    type: NO_OP
  }
}

export const Actions = {
  setContent,
  setItem,
  fetchContent
}

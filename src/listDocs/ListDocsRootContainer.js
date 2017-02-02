import ListDocs from './ListDocs'
import { connect } from 'react-redux'
import { Actions } from '../actions'

function mapStateToProps (state) {
  const docsList = state.get('content').get('docsList')
  return { docsList }
}

function mapDispatchToProps (dispatch) {
    return {
      fetchDocsContent: (item) => {
        dispatch(Actions.fetchDocsContent(item))
      },
      fetchDocsList: () => {
        dispatch(Actions.fetchDocsList())
      },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDocs)
// export default ListDocsNav

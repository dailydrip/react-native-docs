import ListDocsNav from './ListDocsNav'
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDocsNav)
// export default ListDocsNav

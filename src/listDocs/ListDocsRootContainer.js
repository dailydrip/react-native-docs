import ListDocsNav from './ListDocsNav'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  const docsList = state.get('content').get('docsList')
  return { docsList }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListDocsNav)
// export default ListDocsNav

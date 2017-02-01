import DetailsDocs from './DetailsDocs'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  const docsContent = state.get('content').get('docsContent')
  return { docsContent }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsDocs)
// export default DetailsDocsNav

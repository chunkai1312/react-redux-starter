import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppLayout from '../components/AppLayout'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  router: state.router
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)

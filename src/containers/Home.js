import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomePage from '../components/HomePage'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
  router: state.router,
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

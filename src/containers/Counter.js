import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CounterPage from '../components/CounterPage';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  router: state.router,
  value: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import compose from "lodash/fp/compose";
import mapValues from "lodash/fp/mapValues";

const defaultSelector = () => false;

const mapActions = map => dispatch => bindActionCreators(map, dispatch);

const mapSelectors = map => (...args) =>
  compose(mapValues(item => (item || defaultSelector)(...args)))(map);

const withConnect = (propMap, actionMap) => {
  const mapStateToProps = mapSelectors(propMap);
  const mapDispatchToProps = mapActions(actionMap);
  return connect(
    mapStateToProps,
    mapDispatchToProps
  );
};

export default withConnect;
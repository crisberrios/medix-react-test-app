import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Mediator, MediatorQuery } from "medix";

class MutateStateCommand {
  constructor(state, callback = null) {
    this.data = state;
    this.callback = callback;
  }
}
class GetStoreResponse {
  constructor(store) {
    this.store = store;
  }
}
class GetStoreQuery extends MediatorQuery {
  constructor() {
    super(GetStoreResponse);
  }
}

function referenceStateMutator(store, data) {
  return Object.freeze(Object.assign(Object.seal({ ...store }), { ...data }));
};

class MediatorProvider extends Component {
  constructor(props) {
    super(props);
    const { mediator, store } = props;
    this.store = store;
    this.mediator = mediator;

    mediator.register({
      handler: {
        handle: this.stateMutator
      },
      commandConstructor: MutateStateCommand
    });
    mediator.register({
      handler: { handle: () => new GetStoreResponse(this.store) },
      commandConstructor: GetStoreQuery,
      responseConstructor: GetStoreResponse
    });
    this.state = {
      store,
      mediator
    };
  }
  stateMutator = ({ data, callback = null }) => {
    this.store = this.props.mutator(this.store, data);
    this.setState({ store: this.store }, callback);
  }

  render() {
    const { Provider } = this.props;
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
MediatorProvider.defaultProps = {
  mutator: referenceStateMutator,
  get mediator() {
    return new Mediator()
  }
}
MediatorProvider.propTypes = {
  store: PropTypes.object.isRequired,
  mediator: PropTypes.object.isRequired,
  Provider: PropTypes.object.isRequired,
  mutator: PropTypes.func
}

export { MediatorProvider, MutateStateCommand, GetStoreQuery, GetStoreResponse }

import React, { createContext, Component } from 'react'
import { MutateStateCommand, GetStoreQuery, GetStoreResponse } from './coreActionTypes'

export default function getProvider({ mediator, store = {} }) {
    mediator.register({
        handler: { handle: () => new GetStoreResponse(store) },
        commandConstructor: GetStoreQuery,
        responseConstructor: GetStoreResponse
    })
    const { Provider, Consumer } = createContext({ mediator, store })
    class MediatorProvider extends Component {
        constructor() {
            super();
            mediator.register({
                handler: {
                    handle: ({ data }) => {
                        store = { store, ...data }
                        this.setState({ store })
                    }
                },
                commandConstructor: MutateStateCommand
            })
            this.state = {
                store, mediator
            }
        }
        render() {
            return (
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            )
        }
    }
    return { MediatorProvider, Consumer }
}
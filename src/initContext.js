import store from './store'
import mediator from './mediator'
import getProvider from './MediatorProvider'

const { Consumer, MediatorProvider } = getProvider({ mediator, store })

export {
    MediatorProvider,
    Consumer,
}


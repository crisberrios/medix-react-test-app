import { CounterIncrementQuery } from './counterActionTypes.js'
import { MutateStateCommand, GetStoreQuery } from '../coreActionTypes'

export default function (mediator) {
  const getIncrementCounter = {
    handle: () => {
      const { store } = mediator.send(new GetStoreQuery());
      mediator.send(new MutateStateCommand({ counter: store.counter + 1 }))
    }
  }

  mediator.register({
    handler: getIncrementCounter,
    commandConstructor: CounterIncrementQuery
  })

  return mediator;
}

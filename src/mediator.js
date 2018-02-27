import bindCounterActions from './counter/counterActions'
import { Mediator } from 'medix'

const mediator = new Mediator()
bindCounterActions(mediator)

export default mediator

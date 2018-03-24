import registerCounterActions from "./actions/counter/counterActions";
import { Mediator } from "medix";

const mediator = new Mediator();
registerCounterActions(mediator);
export default mediator;

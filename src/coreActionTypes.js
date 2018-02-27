import { MediatorQuery } from 'medix'

export class MutateStateCommand {
    constructor(state) {
        this.data = state;
    }
}
export class GetStoreResponse {
    constructor(store) {
        this.store = store;
    }
}
export class GetStoreQuery extends MediatorQuery {
    constructor() {
        super(GetStoreResponse)
    }
}
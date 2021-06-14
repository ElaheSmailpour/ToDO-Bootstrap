export class Model {
    user;
    items: any[];

    constructor() {
        this.user = 'Toplearn-Elahe';
        this.items = [
            { action: 'computer buy', done: false },
            { action: 'do work', done: false },
            { action: 'task one', done: true },
            { action: 'work second', done: false }
        ]
    }
}

export class TodoItem {
    action;
    done;
    constructor(action: any, done: any) {
        this.action = action;
        this.done = done;
    }
}
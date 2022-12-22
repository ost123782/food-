import {makeAutoObservable} from "mobx";

class Sidebar {
    isOpen : boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setOpen(condition: boolean) {
        this.isOpen = condition
    }
}

export default new Sidebar()
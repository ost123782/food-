import {makeAutoObservable} from "mobx";

class Popup {
    isOpen : boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    setOpen (condition : boolean) {
        this.isOpen = condition
    }
}

export default new Popup()
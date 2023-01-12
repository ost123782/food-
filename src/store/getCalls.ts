import axios from "axios"
import { makeAutoObservable, runInAction } from "mobx"

interface FetchedCall {
    callID: number,
    name: string,
    phoneNumber: number
}

class GetCalls {
    fetchedCalls : FetchedCall[] = []

    constructor () {
        makeAutoObservable(this)
    }

    setFetchedCalls = async () => {
        runInAction (() => {
            this.fetchedCalls = []
        })
        const response  = await axios.get('http://localhost:5000/calls/')
        return runInAction (() => {
            this.fetchedCalls = response.data
        })
    }

    deleteFetchedCall = (id : number) => {
        this.fetchedCalls = this.fetchedCalls.filter(call => call.callID !== id)
    }

}

export default new GetCalls()
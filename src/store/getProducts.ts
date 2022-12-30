import axios from "axios"
import { makeAutoObservable, runInAction } from "mobx"

type FetchedProduct = {
    productID: number,
    name: string,
    description: string,
    price: number,
    imageURL: string
}

class GetProducts {
    fetchedProducts : FetchedProduct[] = []

    constructor () {
        makeAutoObservable(this)
    }

    getFetchedProducts () {
        return this.fetchedProducts
    }

    setFetchedProducts = async () => {
        const response = await axios.get('http://localhost:5000/products/')
        runInAction(() => {
            this.fetchedProducts = response.data
        })
    }
}

export default new GetProducts()
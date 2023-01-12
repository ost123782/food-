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

    setFetchedProducts = async (id?: number | string | undefined) => {
        if (id) {
            const response = await axios.get(`http://localhost:5000/products`, {params : {productID: id}})
            return runInAction(() => {
                this.fetchedProducts = response.data
            })
            
        }
        const response = await axios.get('http://localhost:5000/products/')
        runInAction(() => {
            this.fetchedProducts = response.data
        })
    }
}

export default new GetProducts()
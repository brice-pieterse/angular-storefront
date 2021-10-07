export class Product {
    id: number
    thumb: string
    name: string
    price: number
    featured: boolean

    constructor(){
        this.id = 0
        this.thumb = ""
        this.name = ""
        this.price = 0
        this.featured = false
    }
}
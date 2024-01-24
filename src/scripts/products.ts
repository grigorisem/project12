import { Storage } from "./storage"
import products from "../data/products.json"
export type Tproducts = {
    product_name: string,
    seller_company: string,
    quantity: number,
    unit_price: number,
    supply_id: number,
    warehouse_id: number
}
export class Products extends Storage {
    private _cart: Tproducts[] = [];
    constructor() {
        super();
        products.forEach((item) => {
            super.setProducts(item.warehouse_id, item); 
        });
    }
    addToCart(product: Tproducts) {
        this._cart.push(product);
    }
    get cart() {
        return this._cart;
    }
    sortProductsAsc() {
        this.allStorages.forEach((storage) => {
            storage.products.sort((a, b) => a.unit_price - b.unit_price);
        });
    }

    sortProductsDesc() {
        this.allStorages.forEach((storage) => {
            storage.products.sort((a, b) => b.unit_price - a.unit_price);
        });
    }
}
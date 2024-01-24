import storage from "../data/storage.json"
import { Tproducts } from "./products";
type Tstorage = {
      city: string,
      name: string,
      address: string,
      warehouse_id: number,
      products: Tproducts[]
}
export class Storage {
    private _data: Tstorage[];
    constructor() {
        this._data = storage;
    }
    get allStorages(){
        return this._data;
    }
    private set updateStorage(storage: Tstorage){
        this._data = this._data.map(item=> {
            if (item.warehouse_id !== storage.warehouse_id) return item
            return storage
        })
    }
    protected getStorage(id:number){
        return this._data.find(item => item.warehouse_id == id) 
    }
    setProducts(id:number, products: Tproducts){
        const storage = this.getStorage(id);
        storage.products.push(products);
        this.updateStorage = storage;
    }
    getProductBySupplyId(supplyId: number): Tproducts | undefined {
        for (const storage of this._data) {
            const product = storage.products.find((p) => p.supply_id === supplyId);
            if (product) {
                return product;
            }
        }
        return undefined;
    }
}
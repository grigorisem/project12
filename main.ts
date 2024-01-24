import { Products } from './src/scripts/products';
import { Storage} from "./src/scripts/storage";
const store = new Products();
const productToAddToCart = store.getProductBySupplyId(201); 
console.log(store.allStorages);
store.setProducts(102, {
  product_name: "Томат",
  seller_company: "Томат Чернозём",
  quantity: 108,
  unit_price: 1000,
  supply_id: 211,
  warehouse_id: 103}
  );
console.log(store.allStorages);
if (productToAddToCart) {
    store.addToCart(productToAddToCart);
    console.log("Продукт добавлен в корзину:", productToAddToCart);
    console.log("Корзина:", store.cart);
} else {
    console.log("Такого товара нет.");
}
store.sortProductsAsc();
console.log(store.allStorages);
store.sortProductsDesc();
console.log(store.allStorages);

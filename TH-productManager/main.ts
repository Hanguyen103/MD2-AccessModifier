import {Product} from "./product";
import {ProductManager} from './productManager';

let laptop = new Product('Laptop',20000);
let iphone = new Product('iPhone',15000);
let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
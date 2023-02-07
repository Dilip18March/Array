import { customers } from './customer';
import { products } from './products';
//import { productSchema } from './product';
//import {userSchema} from './user'

const combinedArray = [...customers, ...products];

console.log(combinedArray);
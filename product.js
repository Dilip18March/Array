import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({

	name: { type: String, required: true },
	price: { type: Number, required: true },
	size: { type: String, required: true },
	image: {
		type: String, required: true, 
		//http://localhost:3500/upload/1673505509049-482336746.jpg


	} ,


}, { timestamps: true,toJSON:{getters:true},id:false})

export default mongoose.model('product',productSchema,'products')
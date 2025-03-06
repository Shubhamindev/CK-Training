import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="block">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden flex items-center justify-center p-4 bg-gray-100">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-contain h-full w-full transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 h-16 overflow-hidden">
                    {product.title}
                </h3>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
                    <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-sm text-gray-600">{product.rating?.rate || "N/A"}</span>
                    </div>
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium">
                    View Details
                </button>
            </div>
        </div>
    </Link>
);
};
export default ProductCard;

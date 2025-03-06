import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch product");
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="object-contain h-80 w-80 transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <div className="flex items-center mt-4">
                        <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                        <div className="flex items-center ml-4 text-yellow-500">
                            <span className="mr-1">★</span>
                            <span className="text-sm text-gray-600">{product.rating?.rate || "N/A"}</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => addToCart(product)}
                        className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
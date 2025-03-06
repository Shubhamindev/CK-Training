import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch products");
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading)
        return <div className="text-center p-4">Loading...</div>;

    if (error)
        return <div className="text-red-500 text-center p-4">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="block">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="h-64 flex items-center justify-center p-4 bg-gray-100">
                                <img src={product.image} alt={product.title} className="h-full w-full object-contain hover:scale-105 transition-transform" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold h-16 overflow-hidden">{product.title}</h3>
                                <div className="flex justify-between mt-4">
                                    <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
                                    <span className="text-yellow-500">★ {product.rating?.rate || "N/A"}</span>
                                </div>
                                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

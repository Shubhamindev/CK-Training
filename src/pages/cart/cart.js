import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();


  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const gst = calculateSubtotal() * 0.18; 
  const deliveryCharge = cart.length > 0 ? 40 : 0; 
  const totalAmount = calculateSubtotal() + gst + deliveryCharge;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty 😞</p>
          <Link
            to="/products"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b pb-4 mb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">
                    Price: ₹{item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Price Details</h2>
            <div className="flex justify-between text-gray-700">
              <p>Subtotal:</p>
              <p>₹{calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>GST (18%):</p>
              <p>₹{gst.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p>Delivery Charge:</p>
              <p>₹{deliveryCharge}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-semibold">
              <p>Total:</p>
              <p>₹{totalAmount.toFixed(2)}</p>
            </div>

            <button
              onClick={() => navigate("/Payment")}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Buy Now
            </button>

            <button
              className="mt-2 w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition-colors duration-300 font-medium"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

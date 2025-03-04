import React from "react";
import { useState , useEffect} from "react";
import { Navigate } from "react-router-dom";
export default function NotFound() {
    const [err, setErr] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setErr(true);
        },
            5000);
            return () => {
                clearTimeout();
            }
    },[]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }
    , []);

    if (err) {
        return <Navigate to ="/" />;
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-200">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    404 Not Found!
                </h2>
                <p className="text-center text-gray-600">
                    The page you are looking for does not exist.
                    you will be redirect to home page in 5 seconds
                    </p>
                <div className="text-center text-8xl text-gray-600">
                    {count}
                </div>
               
            </div>
        </div>
    );
}
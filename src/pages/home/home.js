import React, { useEffect, useState } from "react";
import useLocalstorage from "../../hooks/useLocalstorage";

export default function Home() {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState([]);
  const [fet, setFet] = useState(0);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const { setLocalStorage, getLocalStorage } = useLocalstorage("userData");
  useEffect(() => {
  setLocalStorage({name:"shubham", age:20, role : "Fullstack Developer"})
  const userData = getLocalStorage();
  console.log(userData);
  }, [setLocalStorage, getLocalStorage ]);


  useEffect(()=>{
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false));
  },[fet]);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error:", error))
        .finally(() => setLoading(false));
    },[fet]);
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Home</h1>
      <p className="text-center mt-4">This is the home page</p>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">Counter App</h1>
        <p className="text-2xl mb-4">Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Increase Count
        </button>
      <div className="flex flex-col items-center justify-center  bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <p className="text-2xl mb-4">fet: {fet}</p>
      <button onClick={
        () => setFet(fet + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
        Fetch
        </button>
        <div className="flex flex-col ">
            <h1>fetch user </h1>
            {
                loading
                ? <p>Loading...</p>
                : null
            }
            {
                users.map((user) => (
                    <li><div key={user.id}> {user.name} {user.email}</div></li>
                ))
            }
            
        </div>
        <div className="flex flex-col ">
            <h1>fetch post </h1>
            {
                loading
                ? <p>Loading...</p>
                : null
            }
            {
                post.map((post) => (
                    <li><div key={post.id}> {post.title} {post.body}</div></li>
                ))
            }
            </div>
            </div>
        </div>
    </div>
  );
}

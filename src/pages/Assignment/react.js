import React, { useRef, useState, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

const Parent = () => {
  const [count, setCount] = useState(0);

  const logCounter = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  return <Assignment logCounter={logCounter} count={count} />;
};

function Assignment({ logCounter, count }) {
  const [selectedTab, setSelectedTab] = useState("useRef");
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const { theme } = useTheme();
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const tabs = [
    { id: "useRef", name: "useRef Implementation" },
    { id: "Memo", name: "useMemo Implementation" },
    { id: "callback", name: "useCallback Implementation" },
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    alert(`useRef Alert: ${inputValue}`);
  };

  const filteredNumbers = numbers.filter((num) =>
    num.toString().includes(search)
  );

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Assignment</h1>
      <p className="text-center mt-4">This is the assignment page</p>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex">
        <div className="w-1/3 border-gray-200 border-r pr-6">
          <h2 className="text-xl font-semibold mb-4">Assignment</h2>
          <ul className="space-y-3">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`cursor-pointer p-2 rounded-lg ${
                  selectedTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-2/3 pl-6">
          {selectedTab === "useRef" && (
            <div>
              <h3 className="text-lg font-medium mb-3">
                useRef Implementation
              </h3>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  Type Something
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-lg ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white"
                  }`}
                />
                <button
                  ref={buttonRef}
                  onClick={handleButtonClick}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Alert using useRef
                </button>
              </div>
            </div>
          )}

          {selectedTab === "Memo" && (
            <div>
              <h3 className="text-lg font-medium mb-3">
                useMemo Implementation
              </h3>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  Search numbers{" "}
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`w-full p-2 border rounded-lg ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white"
                  }`}
                  placeholder="Search numbers"
                />
                <div className="mt-4">
                  <h4 className="font-medium">Filtered Numbers:</h4>
                  <div className="flex flex-row gap-2 mt-2">
                    {filteredNumbers.length > 0 ? (
                      filteredNumbers.map((number) => (
                        <span key={number} className="px-3 text-blue-800 ">
                          {number}
                        </span>
                      ))
                    ) : (
                      <p>No numbers found</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "callback" && (
            <div>
              <h3 className="text-lg font-medium mb-3">
                useCallback Implementation
              </h3>
              <p className="text-lg">Counter: {count}</p>

              <button
                onClick={logCounter}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Increment Counter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Parent;
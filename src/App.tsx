import React, { useEffect, useState } from "react";
import { fetchUser } from "./utils/fetchUser";
import User from "./types/User";

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // Store the fetched user

  useEffect(() => {
    const getUser = async () => {
      try {
        const fetchedUser = await fetchUser(); // Wait for the fetchUser promise to resolve
        setUser(fetchedUser); // Set the user state once the data is fetched
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUser(); // Call the async function to fetch the user
  }, []);

  if (user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-4xl font-bold text-blue-500">{user.name.first}</h2>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">codetest-v2</h1>
      </div>
    );
  }
};

export default App;

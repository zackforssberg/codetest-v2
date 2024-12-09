import React, { useEffect, useState } from "react";
import { fetchUser } from "../utils/fetchUser";
import User from "../types/User";
import Flag from "react-world-flags";

const ProfileCard: React.FC = () => {
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
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
        <div className="w-[26rem] h-[38rem] flex-col justify-items-center	bg-teal-900">
          <img
            src={user.picture.large}
            alt="Profile"
            className="rounded-full p-4"
          />
          <div className="flex">
            <Flag code={user.nationality} className="h-8 mr-4" />
            <h2 className="text-2xl text-white font-bold whitespace-nowrap">
              {user.name.first} {user.name.last}
            </h2>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-500">Loading...</h1>
      </div>
    );
  }
};

export default ProfileCard;

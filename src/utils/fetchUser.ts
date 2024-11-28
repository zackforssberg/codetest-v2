import User from "../types/User";

export async function fetchUser(): Promise<User> {
  const response = await fetch("https://randomuser.me/api/");
  if (!response.ok) {
    throw new Error(`Error fetching user: ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("No user data found in API response.");
  }

  const result = data.results[0];

  // Map the API response to the User interface
  const user: User = {
    gender: result.gender,
    name: {
      first: result.name.first,
      last: result.name.last,
    },
    location: {
      street: {
        number: result.location.street.number,
        name: result.location.street.name,
      },
      city: result.location.city,
      state: result.location.state,
      country: result.location.country,
      postcode: result.location.postcode,
      coordinates: {
        latitude: result.location.coordinates.latitude,
        longitude: result.location.coordinates.longitude,
      },
    },
    email: result.email,
    age: result.dob.age,
    phone: result.phone,
    picture: {
      large: result.picture.large,
      medium: result.picture.medium,
      thumbnail: result.picture.thumbnail,
    },
    nationality: result.nat,
  };

  return user;
}

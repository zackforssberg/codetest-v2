export default interface User {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
  email: string;
  age: number;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nationality: string;
}

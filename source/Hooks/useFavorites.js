import { useState } from "react";
import yelp from "../API/yelp";

export default () => {
  const [result, setresult] = useState(null);
  const searchFavRestaurant = async (rid) => {
    setresult([]);
    await rid.map(async (id, index) => {
      try {
        const response = await yelp.get(`/${id}`, {});
        setresult((current) => [...current, response.data]);
      } catch (error) {
        setresult(null);
      }
    });
  };
  return [result, searchFavRestaurant];
};

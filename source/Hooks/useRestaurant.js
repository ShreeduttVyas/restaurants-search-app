import React, { useState } from "react";
import yelp from "../API/yelp";

export default () => {
  const [result, setresult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id) => {
    setresult({
      data: null,
      loading: true,
      error: null,
    });

    try {
      const response = await yelp.get(`/${id}`, {});
      setresult({
        data: response.data.photos,
        loading: false,
        error: null,
      });
    } catch (error) {
      setresult({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };
  return [result, searchRestaurant];
};

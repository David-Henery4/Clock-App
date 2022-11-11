import axios from "axios";

export const fetchAllData = async () => {
  try {
    const calls = [
      "https://ipapi.co/json/",
      "https://programming-quotes-api.herokuapp.com/Quotes/random",
      "/api/ip/",
    ];
    const promises = [];
    //
    calls.forEach((call) => {
      const dataProm = axios.get(call);
      promises.push(dataProm);
    });
    const data = await Promise.all(promises);
    return data;
    //
  } catch (error) {
    console.error(error.message);
    throw new Error(error);
  }
};

export const fetchQuote = async () => {
  try {
    const { data } = await axios.get(
      "https://programming-quotes-api.herokuapp.com/Quotes/random"
    );
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error);
  }
};

import axios from "axios";

// BASE APIS BEING USED
//
// programming joke: https://programming-quotes-api.herokuapp.com/Quotes/random
//
// WILL CHANGE KEY TO ENVIROMENT VARIABLE.
// api key for "ipbase": JpkaKGh1pqDg34k8KrQjyNaKe0bDkz66t3VOn39a
// ipbase url: https://api.ipbase.com/v2/info?apikey=JpkaKGh1pqDg34k8KrQjyNaKe0bDkz66t3VOn39a&ip=1.1.1.1

export const fetchAll = async () => {
  try {
    const calls = [
      "https://api.ipbase.com/v2/info?apikey=JpkaKGh1pqDg34k8KrQjyNaKe0bDkz66t3VOn39a&ip=1.1.1.1",
      "https://programming-quotes-api.herokuapp.com/Quotes/random",
      "http://worldtimeapi.org/api/ip",
    ];
    const urls = []
    calls.forEach(call => {
      const data = axios.get(call)
      urls.push(data)
    })
    const res = await Promise.all(urls)
    console.log(res)
    // const {data} = await axios.get()
  } catch (error) {}
};

// fetchAll()

export const fetchQuote = async () => {
  try {
    const { data } = await axios.get(
      "https://programming-quotes-api.herokuapp.com/Quotes/random"
    );
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchLocal = async () => {
  try {
    const { data } = await axios.get(
      "https://api.ipbase.com/v2/info?apikey=JpkaKGh1pqDg34k8KrQjyNaKe0bDkz66t3VOn39a&ip=1.1.1.1"
    );
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchWorldTime = async () => {
  try {
    const { data } = await axios.get("http://worldtimeapi.org/api/ip");
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

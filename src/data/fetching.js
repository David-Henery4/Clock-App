import axios from "axios";

//

export const fetchAllData = async () => {
  try {
    const calls = [
      "http://ip-api.com/json/",
      "https://programming-quotes-api.herokuapp.com/Quotes/random",
      "http://worldtimeapi.org/api/ip",
    ];
    const promises = []
    //
    calls.forEach(call => {
      const dataProm = axios.get(call)
      promises.push(dataProm)
    })
    const data = await Promise.all(promises)
    return data
    //
  } catch (error) {}
};


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
    const { data } = await axios.get("http://ip-api.com/json/");
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

// export const fetchAll = async () => {
//   try {
//     const calls = [
//       "https://api.ipbase.com/v2/info?apikey=JpkaKGh1pqDg34k8KrQjyNaKe0bDkz66t3VOn39a&ip=1.1.1.1",
//       "https://programming-quotes-api.herokuapp.com/Quotes/random",
//       "http://worldtimeapi.org/api/ip",
//     ];
//     const urls = [];
//     calls.forEach((call) => {
//       const data = axios.get(call);
//       urls.push(data);
//     });
//     const res = await Promise.all(urls);
//     console.log(res);
//     // const {data} = await axios.get()
//   } catch (error) {}
// };
# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users can:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Screenshot

![Background-Screenshot](./readme-image/screenshot-background.png)

### Links

<!-- Links to be added -->
- Solution URL: [Solution](https://www.frontendmentor.io/solutions/clockapp-responsive-cssgrid-flexbox-react-reactquery-axios-rk8UFiLcgK)
- Live Site URL: [Clock-on-time](https://clock-on-time.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- SASS
- SASS Mixins
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React-Query](https://react-query-v3.tanstack.com) - React api data handling library
- [Axios](https://axios-http.com) - Promise based api calling library



### What I learned

When I started this project, because it is a small project, I didn't want to use redux-toolkit and asyncthunk to fetch the data from the api, as I thought this would be a bit overkill. I also didn't want to just call and fetch the data in the component using useEffect. This lead me to researching all the different ways of fetching and handling data inside of react.

After a bit of research and finding all sorts of different ways of doing this. (Eg - Using things like custom hooks with the fetch api or axios to get and handle the data). I stumbled upon a library called react-query.

React-query is a react library for fetching and handling api data. It is primarily used for fetching, editing, adding and deleting server side state data. It also come with various tools and behaviours which make fetching and handling a lot better. (Eg - We can have access to different statuses when making the api calls, such as isLoading. We can use these to create things like loading spinners when it is fetching, and statuses like isError, which allows us to handle the error state a lot easier if somthing were to go wrong.) Another good behaviour that is has, is that it can be called on set intervals, this is to make sure the data of the application is always up to date and doesn't go stale.

Overall, react-query does a lot more than this and reading though their documentation it is clear I have barely scratched the surface of what react-query can do, which is well beyond the scope of what I needed for this project.
Although it seems it can not only be used for projects as small as this one but can be used for much much bigger projects. Thats why, in the future, I look foward to seeing what this library can do on bigger projects and will be using it more in the future.


Here were calling the "fetchAllData" function with useQuery, We can destructor the different status variables we need, while also using config object to control the default behaviours of useQuery.

```js
  const {
    data: initialData,
    isLoading,
    isError,
    refetch,
    isSuccess,
  } = useQuery("allData", fetchAllData, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    
  });
```

Here were using axios to fetch all three different apis at once, and resolve them using Promise.all(), which waits for all the promises to be resolved before being successfull, we then call and handle this function and data as the callback in the useQuery hook above. 

```js
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
  } catch (error) {
    console.error(error.message)
    throw new Error(error)
  }
};
```

### Continued development

In the future I will definitly like to try using the react-query library to handle data on a bigger project. I also would like to try other Similar libraries like another one I found when researching called Redux-Toolkit-query. Which is libray like react-query but used in the context of redux-toolkit and I would like to see the pros and cons of using this type of library over using something like asyncthunk, which I had been using previously. 

Overall I think trying out these different libraries and different ways of handling api data in react will help me understand and learn the whole concept and proccess a lot better.

So in the future I can make a better judgement on how?, why?, what? and when? to use which tool and technique to suit different types of projects, and can help me choose which way is the best needed to use on a specific job or project.

### Useful resources

- [React-query-Documentation](https://www.example.com) - This is a good place to start when using react-query, and can help you get up and running quite quickly.

- [TkDodo's blog Practical React Query](https://tkdodo.eu/blog/practical-react-query) - There is also this blog that they recomend though their documentation which can be quite helpfull.


## Author

- Website - [David Henery](https://www.djhwebdevelopment.com)
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/David-Henery4)
- linkedIn - [David Henery](https://www.linkedin.com/in/david-henery-725458241)


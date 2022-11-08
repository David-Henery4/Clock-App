import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Quote, HomeContent, SlideIn } from "./components";
import { fetchAllData } from "./data/fetching";


function App() {
  const [isSlideInActive, setIsSlideInActive] = useState(false);
  //
  const {data: initialData, isLoading, isError, refetch} = useQuery("allData", fetchAllData, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    // enabled: false,
  })
  // console.log(data)
  // useEffect(() => {
  //   // refetch()
  //   console.log(data);
  // }, [data]);
  //
  return (
    <div className="App overall">
      <main className={isSlideInActive ? "main main-slide-active" : "main"}>
        <Quote isSlideInActive={isSlideInActive} initialData={initialData} />
        <HomeContent slideState={{ isSlideInActive, setIsSlideInActive }} />
      </main>
      <SlideIn isSlideInActive={isSlideInActive} initialData={initialData} />
    </div>
  );
}

export default App;

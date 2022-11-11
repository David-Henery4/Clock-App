import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Quote, HomeContent, SlideIn, Overlay, ErrorModal } from "./components";
import { fetchAllData } from "./data/fetching";

function App() {
  const [isSlideInActive, setIsSlideInActive] = useState(false);
  const [activeQuoteData, setActiveQuoteData] = useState({});
  const [activeSlideInData, setActiveSlideInData] = useState({});
  const [activeTimeLocalData, setActiveTimeLocalData] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [isNight, setIsNight] = useState(false);
  //
  const {
    data: initialData,
    isLoading,
    isError,
    refetch,
    isSuccess,
  } = useQuery("allData", fetchAllData, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    // enabled: false,
  });
  //
  const findQuoteData = (fullData) => {
    if (fullData){
      const { data } = fullData?.find((eachInitData) =>
      eachInitData.request.responseURL.includes("quotes")
      );
      setActiveQuoteData(data);
    }
  };
  //
  const findSlideInData = (fullData) => {
    if (fullData){
      const { data } = fullData?.find((eachInitData) =>
      eachInitData.request.responseURL.includes("time")
      );
      setActiveSlideInData(data);
    }
  };
  //
  const findHomeContentData = (fullData) => {
    if (fullData){
      const { data } = fullData?.find((eachInitData) =>
      eachInitData.request.responseURL.includes("ipapi")
      );
      setActiveTimeLocalData(data);
    }
  };
  //
  const getTime = () => {
    const hours = new Date().getHours().toString().padStart(2, "0");
    const mins = new Date().getMinutes().toString().padStart(2, "0");
    const time = `${hours}:${mins}`;
    setCurrentTime(time);
  };
  //
  const dayOrNight = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 18) {
      setIsNight(false);
      // return false
    }
    if (hours >= 18 || hours < 5) {
      setIsNight(true);
      // return true
    }
  };
  //
  useEffect(() => {
    dayOrNight()
    setInterval(() => {
      dayOrNight();
      getTime();
    }, 1000);
  }, []);
  //
  useEffect(() => {
    if (isSuccess) {
      findHomeContentData(initialData);
      findQuoteData(initialData);
      findSlideInData(initialData);
    }
  }, [initialData]);
  //
  return (
    <div className={isNight ? "App overall bg-night" : "App overall bg-day"}>
      <main className={isSlideInActive ? "main main-slide-active" : "main"}>
        {isError && 
        <>
        <ErrorModal refetch={refetch}/>
        <Overlay isError={isError}/>
        </>
        }
        {isLoading ? (
          <>
            <div className="lds-dual-ring-main"></div>
            <Overlay />
          </>
        ) : (
          <>
            <Quote
              isSlideInActive={isSlideInActive}
              initialData={initialData}
              activeQuoteData={activeQuoteData}
            />
            <HomeContent
              slideState={{ isSlideInActive, setIsSlideInActive }}
              activeTimeLocalData={activeTimeLocalData}
              activeSlideInData={activeSlideInData}
              currentTime={currentTime}
              isNight={isNight}
            />
          </>
        )}
      </main>
      <SlideIn
        isSlideInActive={isSlideInActive}
        activeSlideInData={activeSlideInData}
      />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Quote, HomeContent, SlideIn } from "./components";
import { fetchAllData } from "./data/fetching";

function App() {
  const [isSlideInActive, setIsSlideInActive] = useState(false);
  const [activeQuoteData, setActiveQuoteData] = useState({});
  const [activeSlideInData, setActiveSlideInData] = useState({});
  const [activeTimeLocalData, setActiveTimeLocalData] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [isNight,setIsNight] = useState(false)
  // const [active, setActiveData] = useState([])
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
    const { data } = fullData.find((eachInitData) =>
      eachInitData.request.responseURL.includes("quotes")
    );
    setActiveQuoteData(data);
  };
  //
  const findSlideInData = (fullData) => {
    const { data } = fullData.find((eachInitData) =>
      eachInitData.request.responseURL.includes("worldtimeapi")
    );
    setActiveSlideInData(data);
  };
  //
  const findHomeContentData = (fullData) => {
    const { data } = fullData.find((eachInitData) =>
      eachInitData.request.responseURL.includes("ip-api")
    );
    setActiveTimeLocalData(data);
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
      setIsNight(false)
    }
    if (hours >= 18 || hours < 5 ){
      setIsNight(true)
    }
  };
  //
  useEffect(() => {
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
        {isLoading ? (
          <div className="lds-dual-ring"></div>
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

import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { Quote, HomeContent, SlideIn, Overlay, ErrorModal } from "./components";
import { fetchAllData } from "./data/fetching";

function App() {
  const [isSlideInActive, setIsSlideInActive] = useState(false);
  const [activeQuoteData, setActiveQuoteData] = useState({});
  const [activeTimeLocalData, setActiveTimeLocalData] = useState({});
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
    if (fullData) {
      const { data } = fullData?.find((eachInitData) =>
        eachInitData.request.responseURL.includes("quotes")
      );
      setActiveQuoteData(data);
    }
  };
  //
  const findHomeContentData = (fullData) => {
    if (fullData) {
      const { data } = fullData?.find((eachInitData) =>
        eachInitData.request.responseURL.includes("ipapi")
      );
      setActiveTimeLocalData(data);
    }
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
    dayOrNight();
    setInterval(() => {
      dayOrNight();
    }, 1000);
  }, []);
  //
  useEffect(() => {
    if (isSuccess) {
      findHomeContentData(initialData);
      findQuoteData(initialData);
    }
  }, [initialData]);
  //
  return (
    <div className={isNight ? "App overall bg-night" : "App overall bg-day"}>
      <main className={isSlideInActive ? "main main-slide-active" : "main"}>
        {isError && (
          <>
            <ErrorModal refetch={refetch} />
            <Overlay isError={isError} />
          </>
        )}
        {isLoading ? (
          <>
            <div className="lds-dual-ring-main"></div>
            <Overlay />
          </>
        ) : (
          <>
            <Quote
              isSlideInActive={isSlideInActive}
              activeQuoteData={activeQuoteData}
            />
            <HomeContent
              slideState={{ isSlideInActive, setIsSlideInActive }}
              activeTimeLocalData={activeTimeLocalData}
              isNight={isNight}
            />
          </>
        )}
      </main>
      <SlideIn
        isSlideInActive={isSlideInActive}
        activeTimeLocalData={activeTimeLocalData}
      />
    </div>
  );
}

export default App;

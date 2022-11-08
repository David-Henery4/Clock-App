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
  useEffect(() => {
    if (isSuccess) {
      findHomeContentData(initialData);
      findQuoteData(initialData);
      findSlideInData(initialData);
    }
  }, [initialData]);
  //
  return (
    <div className="App overall">
      <main className={isSlideInActive ? "main main-slide-active" : "main"}>
        {isLoading ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <>
            <Quote
              isSlideInActive={isSlideInActive}
              initialData={initialData}
            />
            <HomeContent
              slideState={{ isSlideInActive, setIsSlideInActive }}
              activeTimeLocalData={activeTimeLocalData}
              activeSlideInData={activeSlideInData}
            />
          </>
        )}
      </main>
      <SlideIn isSlideInActive={isSlideInActive} initialData={initialData} />
    </div>
  );
}

export default App;

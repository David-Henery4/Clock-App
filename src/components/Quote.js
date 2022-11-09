import React from "react";
import { fetchQuote } from "../data/fetching";
import { useQuery } from "react-query";
import { Refresh } from "../assets/desktop";
import { useState, useEffect } from "react";


const Quote = ({ isSlideInActive, activeQuoteData }) => {
  const [currentQuote, setCurrentQuote] = useState("")
  //
  const { refetch, data, isError, isLoading, isSuccess } = useQuery(
    "quote",
    fetchQuote,
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      enabled: false,
    }
  );
  //
  useEffect(() => {
    if (isSuccess){
      setCurrentQuote(data);
    }
  },[data])
  //
  useEffect(() => {
    setCurrentQuote(activeQuoteData)
  }, [activeQuoteData])
  //
  return (
    <div className={isSlideInActive ? "quote quote-slide-active" : "quote"}>
      {isLoading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <>
          <div className="quote-text-icon-wrap">
            <Refresh
              className="quote__refresh-icon"
              onClick={() => {
                refetch();
              }}
            />
            <p className="quote__text basic-text-style">“{currentQuote?.en}.”</p>
          </div>
          <p className="quote__author basic-text-style">{currentQuote?.author}</p>
        </>
      )}
    </div>
  );
};

export default Quote;

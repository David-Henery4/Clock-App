import React from "react";
import { fetchQuote, fetchLocal, fetchWorldTime } from "../data/fetching";
import { useQuery } from "react-query";
import { Refresh } from "../assets/desktop";
import { useState } from "react";

const Quote = ({ isSlideInActive, initialData }) => {
  let quoteData;
  if (initialData) {
    const { data } = initialData.find((eachInitData) =>
      eachInitData.request.responseURL.includes("quotes")
    );
    quoteData = data;
  }
  //
  const {refetch, data, isError, isLoading, isSuccess} = useQuery("quote", fetchQuote, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    enabled: false,
  });
  if (isSuccess){
    quoteData = data
  }
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
              onClick={() => refetch()}
            />
            <p className="quote__text basic-text-style">“{quoteData?.en}.”</p>
          </div>
          <p className="quote__author basic-text-style">{quoteData?.author}</p>
        </>
      )}
    </div>
  );
};

export default Quote;

import React from 'react'

const ErrorModal = ({refetch}) => {
  return (
    <div className="error-modal">
      <h2 className="error-modal__header basic-text-style">Sorry!</h2>
      <p className="error-modal__text basic-text-style">
        There has been a issue with the data. Please try again in a few seconds.
      </p>
      <button className="error-modal__btn basic-text-style" onClick={() => refetch()}>Retry</button>
    </div>
  );
}

export default ErrorModal
import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [spots, setSpots] = useState({
    bamboo: 101,
    black: 64,
    mahogany: 0,
  });
  const [pledgeInput, setPledgeInput] = useState(0);
  const [pledge, setPledge] = useState(89914);
  const [backers, setBackers] = useState(5007);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function userPledgeInput(e) {
    if (isNaN(e.target.value)) {
      return alert("Please enter a number");
    }
    setPledgeInput(e.target.value);
  }

  function addPledge() {
    setPledge((prev) => prev + parseInt(pledgeInput));
    setBackers((prev) => prev + 1);
    handleClose();
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addPledge();
    if (pledgeInput < 200) {
      setIsSubmitted(true);
    }
  }

  function reduceSpots() {
    if (pledgeInput >= 25 && pledgeInput < 75) {
      setSpots((prev) => {
        return { ...prev, bamboo: prev.bamboo - 1 };
      });
    } else if (pledgeInput >= 75 && pledgeInput < 200) {
      setSpots((prev) => {
        return { ...prev, black: prev.black - 1 };
      });
    } else if (pledgeInput >= 200) {
      alert("Sorry, the Mahogany Special Edition is sold out");
    }
  }

  return (
    <Context.Provider
      value={{
        open,
        handleClickOpen,
        handleClose,
        spots,
        setSpots,
        pledgeInput,
        userPledgeInput,
        pledge,
        addPledge,
        backers,
        handleSubmit,
        isSubmitted,
        setIsSubmitted,
        reduceSpots,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };

import React, { useContext } from "react";
import GlobalStyle from "./globalStyles";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Metric from "./Components/Metric";
import About from "./Components/About";
import ThankYou from "./Components/ThankYou";
import { Context } from "./Context";

function App() {
  const { isSubmitted } = useContext(Context);

  return (
    <>
      <GlobalStyle />
      {isSubmitted && <ThankYou />}
      <Navbar />
      <Header />
      <Metric />
      <About />
    </>
  );
}

export default App;

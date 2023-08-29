import React from "react"
import { Helmet } from "react-helmet-async";




const App = () => {
  return (
    <div>
      <Helmet>
        <title>HELMET changed</title>
        <meta name="description" content="Example of using React Helmet with SSR" />
      </Helmet>
      <h1>Helloooooooo!!!!!</h1>
    </div>
  );
};

export default App;

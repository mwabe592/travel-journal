import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const cardData = data.map((item) => {
    return (
      <Card
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });

  return (
    <>
      <Header />
      <main>{cardData}</main>
    </>
  );
}

export default App;

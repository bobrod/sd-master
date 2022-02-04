import React, { useCallback, useEffect, useState } from "react";
import { csvToJsonObject } from "./utils";

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const PlayerList: React.FunctionComponent<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => (
      <li
        style={{ cursor: "default" }}
        key={index}
        onClick={() => onClick?.(item)}
      >
        {item}
      </li>
    ))}
  </ul>
);

interface Payload {
  text: string;
}

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_wBhF_on8l1V1GUeBrW5zWaWPA0GHYg4wZPW-IWFccqDmg0AkLVTuRW99TqxqhLz77mU1bsS9yt40/pub?gid=94746449&output=csv"
    )
      .then((resp) => resp.text())
      .then((data) => {
        setPayload(csvToJsonObject(data));
      });
  }, []);

  return (
    <div>
      <Heading title="Players" />
      <PlayerList items={["p1", "p2", "p3"]} onClick={onListClick} />
      <div>{JSON.stringify(payload)}</div>
    </div>
  );
}

export default App;

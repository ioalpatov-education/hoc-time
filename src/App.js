import "./App.css";
import React, { useState } from "react";

const withPretty = (ComponentWithDate) => {
  return ({ date }) => {
    let dateTitle = "";
    const currentDate = new Date();

    const diffInMinutes = Math.floor((currentDate - new Date(date)) / 60000);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 60) {
      dateTitle = `${diffInMinutes} минут назад`;
    } else if (diffInHours < 24) {
      dateTitle = `${diffInHours} часов назад`;
    } else {
      dateTitle = `${diffInDays} дней назад`;
    }

    return <ComponentWithDate date={dateTitle} />;
  };
};

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

const DateTimePretty = withPretty(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe
        title="props.url"
        src={props.url}
        allow="autoplay; encrypted-media"
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item, itemIdx) => (
    <Video key={itemIdx} url={item.url} date={item.date} />
  ));
}

export default function App() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-04-16 11:14:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-03-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-02-03 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2022-12-02 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}

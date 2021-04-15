import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        text={faker.lorem.sentence()}
        timeAgo={faker.date.recent().toString()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        text={faker.lorem.sentence()}
        timeAgo={faker.date.recent().toString()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        text={faker.lorem.sentence()}
        timeAgo={faker.date.recent().toString()}
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

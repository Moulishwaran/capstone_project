import React, { useState } from "react";
import ReactMarkdown from "react-markdown"


const Markdown = () => {
  const [markDown, setMarkdown] = useState();
  return (
    <>
      <div className="container">
        <textarea
          value={markDown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="textarea"></textarea>
        <div className="output">
          <ReactMarkdown>{markDown}</ReactMarkdown>
          </div>
      </div>
    </>
  );
};

export default Markdown;

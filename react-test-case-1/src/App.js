import { useEffect, useState } from "react";

function App() {
  const buttons = [
    {
      title: "h1",
      tag: "<h1>",
    },
    {
      title: "h2",
      tag: "<h2>",
    },
    {
      title: "h3",
      tag: "<h3>",
    },
    {
      title: "paragraph",
      tag: "<p>",
    },
    {
      title: "bold",
      tag: "<b>",
    },
    {
      title: "italic",
      tag: "<i>",
    },
  ];
  const [selectedText, setSelectedText] = useState("");
  const [style, setStyle] = useState("");

  useEffect(() => {
    window.addEventListener("click", () => {
      setSelectedText(window.getSelection().toString());
    });
  }, []);
  useEffect(() => {
    if (selectedText && style) {
      let outer = document.querySelector(".text").outerHTML;
      const choosenAt = outer.indexOf(selectedText);
      const updatedOuter = `${outer.slice(
        0,
        choosenAt
      )}${style}${selectedText}</${style.slice(1)}${outer.slice(
        choosenAt + selectedText.length
      )}`;
      document.querySelector(".text").outerHTML = updatedOuter;
      setStyle("");
    }
  }, [selectedText, style]);
  return (
    <div className="main-container">
      <div className="buttons">
        {buttons.map((button, index) => {
          return (
            <button
              onClick={() => {
                setStyle(button.tag);
              }}
              className="button"
              key={index}
            >
              {button.title}
            </button>
          );
        })}
      </div>
      <div className="text-main">
        <span className="text">
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph. A paragraph is defined as “a group of sentences or a single
          sentence that forms a unit” (Lunsford and Connors 116). Length and
          appearance do not determine whether a section in a paper is a
          paragraph. For instance, in some styles of writing, particularly
          journalistic styles, a paragraph can be just one sentence long.
          Ultimately, a paragraph is a sentence or group of sentences that
          support one main idea. In this handout, we will refer to this as the
          “controlling idea,” because it controls what happens in the rest of
          the paragraph.
        </span>
      </div>
    </div>
  );
}

export default App;

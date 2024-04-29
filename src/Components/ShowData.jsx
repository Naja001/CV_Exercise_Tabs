import "./style.css";
import { useState } from "react";
import { DATA } from "../data.js";
import TabContent from "./TabContent.jsx";

export default function Experience() {
  const [selectedTopic, setSelectedTopic] = useState("experience");

  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  return (
    <div className="container">
      <div className="button-container">
        
          <TabContent onSelect={() => handleSelect("experience")}>
            Experience
          </TabContent>
       
       
          <TabContent onSelect={() => handleSelect("education")}>
            Education
          </TabContent>
          </div>
<div className="row">
{!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div>
            {DATA[selectedTopic].map((item, index) => (
              <div key={index}>
                <h3>{item.title}</h3>
                <h5>{item.year}</h5>
                <ul>
                  {item.desc.map((descItem, descIndex) => (
                    <li key={descIndex}>{descItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import AccordionListItem from "./AccordionListItem";
import data from "../../utils/data.json";

const AccordionList = () => {
  const [accordionListData, setAccordionListData] = useState([]);

  useEffect(() => {
    setAccordionListData(data);
  }, []);

  return (
    <div>
      <ul>
        {accordionListData.map((accordionItemData, index) => {
          return (
            <li key={index}>
              <AccordionListItem {...accordionItemData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccordionList;
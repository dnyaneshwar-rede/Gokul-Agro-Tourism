import { useEffect, useState } from "react";
import AccordionListItem from "./AccordionListItem";
import { AccordionListItemProps } from "@/types";
import { data } from "@/utils/data";

const AccordionList = () => {
  const [accordionListData, setAccordionListData] = useState<AccordionListItemProps[]>([]);

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
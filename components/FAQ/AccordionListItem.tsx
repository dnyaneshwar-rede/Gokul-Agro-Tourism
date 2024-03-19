import { useState } from "react";
import Image from "next/image";
import { AccordionListItemProps } from "@/types";

const AccordionListItem = (props: AccordionListItemProps) => {
  const title = props.title;
  const body = props.body;
  const [showItem, setShowItem] = useState(false);

  const handleRevealItem = () => {
    setShowItem((prevStatus) => !prevStatus);
  };

  return (
    <div
      className={`p-2 flex flex-col gap-2 border-EAECF0 ${
        showItem ? "bg-F9FAFB rounded-lg border-2" : "border-b-[1px]"
      }`}
    >
      <div
        className="flex justify-between items-center py-1 cursor-pointer"
        onClick={handleRevealItem}
      >
        <div className="text-101828 text-lg font-semibold">{title}</div>
        {showItem ? (
          <Image
            width={20}
            height={20}
            src="/assets/images/accordion-collapse-icon.svg"
            alt="collapse icon"
          />
        ) : (
          <Image
            width={20}
            height={20}
            src="/assets/images/accordion-reveal-icon.svg"
            alt="reveal icon"
          />
        )}
      </div>
      <div>
        {showItem && <p className="w-[95%] text-475467 text-[16px]">{body}</p>}
      </div>
    </div>
  );
};

export default AccordionListItem;
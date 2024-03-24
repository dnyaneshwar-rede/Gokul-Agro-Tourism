import AccordionList from "./AccordionList";

const Faq = () => {
  return (
    
    <section className="py-10 px-3 my-6 max-w-2xl mx-auto border rounded-lg flex flex-col gap-6" id="faqs">
      <section className=" flex flex-col justify-start items-start gap-3">
        <h3 className="text-4xl text-1D2939 font-semibold">FAQs</h3>
        <p className=" text-xl text-667085">
          All your questions about our picnic offerings and payment process are
          covered here.
        </p>
      </section>
      <section className=" p-5">
        <AccordionList />
      </section>
    </section>
  );
};

export default Faq;

import AccordionList from "./AccordionList";

const Faq = () => {
  return (
    <section className="px-6 py-8 flex bg-zinc-50" id="faqs">
      <section className="w-1/2 flex flex-col justify-start items-start gap-3">
        <h3 className="text-4xl text-1D2939 font-semibold">FAQs</h3>
        <p className="w-[75%] text-xl text-667085">
          All your questions about our picnic offerings and payment process are
          covered here.
        </p>
      </section>
      <section className="w-1/2 p-5">
        <AccordionList />
      </section>
    </section>
  );
};

export default Faq;

import AccordionList from "./AccordionList";

const Faq = () => {
  return (
    <section className="py-10 px-3 my-10 max-w-4xl mx-auto border rounded-lg flex flex-col gap-6" id="faqs">
      <section className="flex flex-col justify-center items-center gap-3 md:gap-6">
        <h3 className="text-3xl sm:text-4xl text-gray-800 font-semibold">Frequently Asked Questions</h3>
        <p className="text-lg sm:text-xl text-gray-600">
          All your questions about our picnic offerings and payment process are
          covered here.
        </p>
      </section>
      <section className="p-5">
        <AccordionList />
      </section>
    </section>
  );
};

export default Faq;

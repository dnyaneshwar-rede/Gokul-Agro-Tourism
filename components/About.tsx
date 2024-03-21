import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="px-6 py-8 flex flex-col justify-start items-start gap-6  ">
      <h2 className="text-6xl font-semibold">Gokul Agro Tourism </h2>
      <section className="w-full flex flex-wrap md:flex-row justify-between items-start">
        {/* Text Description */}
        <div className="space-y-6 py-6 w-full md:w-1/2">
          <p className="text-lg leading-normal">
            Gokul agri-tourism and Adventure Park is an eco-friendly destination to spend your weekends in harmony with nature!! An area surrounded by a lush green environment where you can feel the pure air in your lungs!! A natural cow based farming project where you can enjoy the delicious rural cuisine made on earthen Chulha!! A serene retreat for nature and animal lovers to spend their day at a spot full of biodiversity of flora and fauna!!
          </p>
          <p className="text-lg leading-normal">
            It is a perfect place for a family outing, a school picnic, a corporate team building, a friends get-together, a couples day out, a solo trip, or a day with your pet!!
          </p>
          <p className="text-lg leading-normal">
            It is a perfect place for a family outing, a school picnic, a corporate team building, a friends get-together, a couples day out, a solo trip, or a day with your pet!!
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/images/about.jpg"
            alt="about us"
            width={500}
            height={500}
            id="about-us"
            //layout="fill" // Use layout="fill" for responsive image
          />
        </div>
      </section>
    </section>
  );
};

export default About;

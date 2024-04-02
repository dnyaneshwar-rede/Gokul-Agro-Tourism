import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = () => {
  const imageData = [
    {
      src: "/assets/images/boat-2.jpg",
      heading: "Paddle Boating in the Farm Pond",
      des: "Paddle Boat Ride in the Farm Pond at Gokul Agro Tourism Center",
      tags: ["boating", "ride", "adventure"],
      alt : "Paddle Boat Ride in the Farm Pond at Gokul Agro Tourism Center"
    },

    {
      src: "/assets/images/Birthday.jpg",
      heading: "Birthday Celebration at the Farm",
      // des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["photography", "party", "birthday"],
      alt : "Birthday Celebration at the Farm"
    },
    {
      src: "/assets/images/rest.jpg",
      heading: "rest at the farm house",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["photography", "travel", "winter"],
      alt : "rest at the farm house"
    
    },

    {
      src: "/assets/images/special-welcome.jpg",
      heading: "Special Welcome at the Farm House",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["welcome", "party", "vaccation"],
      alt : "Special Welcome  at the  Gokul Farm House"
    },

    {
      src: "/assets/images/train.jpg",
      heading: "Tractor Train Safari at the Farm House",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["tain", "travel", "summer"],
      alt : "Tractor Train Safari at the  Gokul Farm House"
    },

    {
      src: "/assets/images/horse-ride.jpg",
      heading: "Horse Riding at the Farm House",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["adventure", "horseride", "farm"],
      alt : "Horse Riding at the  Gokul Farm House"
    },

    {
      src: "/assets/images/grp-1.jpg",
      heading: "Group Photo at the Farm House",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["family", "trip", "vacation"],
      alt : "Group Photo at the  Gokul Farm House"
    },

    {
      src: "/assets/images/grp-child.jpg",
      heading: "Group Photo with Children at the Farm House",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["photography", "travel", "collage"],
      alt : "Group Photo with Children at the  Gokul Farm House"
    },

    {
      src: "/assets/images/rest-3.jpg",
      heading: "Rest at the Farm House with Family and Friends",
      // des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["weekend", "travel", "sunday"],
      alt : "Rest at the Farm House with Family and Friends"
    },

    {
      src: "/assets/images/farm-frutes.jpg",
      heading: "Farm Fresh Fruits at the Farm House for Breakfast and Lunch",
      // des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["food", "fruits", "farm"],
      alt : "Farm Fresh Fruits at the Farm House for Breakfast and Lunch"
    },

    {
      src: "/assets/images/family.jpg",
      heading: "Family Photo at the Farm House with Family and Friends",
      // des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["photography", "friends", "family"],
      alt : "Family Photo at the Farm House with Family and Friends"
    },

    {
      src: "/assets/images/frutes-2.jpg",
      heading: "Lunch at the Farm House with Family and Friends",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["photography", "food", "farm"],
      alt : "Lunch at the Farm House with Family and Friends"
    },

    {
      src: "/assets/images/child-eating.jpg",
      heading: "Students ejnoying lunch at the Farm ",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["students", "travel", "trip"],
      alt : "Students ejnoying lunch at the Farm"
    },

    {
      src: "/assets/images/farm-lady.jpg",
      heading: "Enjoying the holiday with family and friends",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["photography", "friens", "holiday"],
      alt : "Enjoying the holiday with family and friends"
    },

    {
      src: "/assets/images/couple.jpg",
      heading: "Couple Photoshoot",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["photography", "travel", "couple"],
      alt : "Couple Photoshoot at gokul farm house"
    },

    {
      src: "/assets/images/special-lunch.jpg",
      heading: "Special Lunch ",
      //des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla',
      tags: ["photography", "travel", "food"],
      alt : "Special Lunch at the Gokul Farm House"
    },

    // Add more image data objects as needed
  ];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 py-3 px-3">
      {imageData.map((data, index) => (
        <ImageCard
          key={index}
          src={data.src}
          heading={data.heading}
          tags={data.tags}
        />
      ))}
    </div>
  );
};

export default ImageGallery;

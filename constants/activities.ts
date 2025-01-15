// data/activities.ts
export type ActivitySubCategory = {
    title: string;
    items: string[];
  };
  
  export type ActivityCategory = {
    title: string;
    emoji: string;
    subcategories?: ActivitySubCategory[];
    items?: string[];
  };
  
  export const activitySections: ActivityCategory[] = [
    {
      title: "Recreational Activities",
      emoji: "🏄",
      subcategories: [
        {
          title: "Water Activities",
          items: ["Swimming Pool", "Rain Dance", "Paddle Boating in the Farm Pond"],
        },
        {
          title: "Rides",
          items: ["Camel Riding", "Horse Riding", "Bullock Cart Rides"],
        },
        {
          title: "Other Experiences",
          items: ["Selfie Points", "Photo Shoot Arrangement in the Grape Garden"],
        },
      ],
    },
    {
      title: "Kids' Zone",
      emoji: "🎠",
      items: ["Well-equipped Playground (Jingle Pad, Sliders, Spider, Swing, and others)"],
    },
    {
      title: "Sports and Games",
      emoji: "🏐",
      items: ["Volleyball", "Football", "Badminton", "Cricket Ground"],
    },
    {
      title: "Accommodation",
      emoji: "🏡",
      items: ["Comfortable Accommodation Facilities"],
    },
    {
      title: "Food",
      emoji: "🍽️",
      items: ["Roasted Corn and Dal Batti in Ghee", "Traditional Village Food"],
    },
  ];
  
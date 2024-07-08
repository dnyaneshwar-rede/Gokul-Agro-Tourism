import React from "react";

const Activity = () => {
  return (
    <div className="py-10 px-3 my-6 max-w-2xl mx-auto border rounded-lg flex-center flex-col gap-6">
      <div className=" flex flex-col justify-start items-start gap-3">
        <h2 className="text-2xl text-1D2939 font-semibold text-center">
          Activities and Amenities:
        </h2>

        <ul className="max-w-md space-y-1 text-orange-500 list-disc list-inside dark:text-grey-500">
          <h4 className="text-2xl semi-bold dark:text-white">Things to Do:</h4>
          <li>Hurda Party/Aamras Party (Seasonal)</li>
          <li>Paddle Boating in the Farm Pond</li>
          <li>Water House</li>
          <li>Swimming Pool</li>
          <li>Rain Dance</li>
          <li>Small Boating for Children</li>
          <li>Camel Riding</li>
          <li>Horse Riding</li>
          <li>Tractor Train Safari</li>
          <li>Photo Shoot Arrangement in the Grape Garden</li>
          <h4>Relaxation and Fun:</h4>
          <li>Selfie Points</li>
          <li>Bullock Cart Rides</li>
        </ul>
        <div className=" flex-col justify-center items-start gap-3 ">
          <ul className="max-w-md space-y-1 text-blue-500 list-disc list-inside dark:text-green-500">
            <h4 className="text-2xl font-bold dark:text-white">
              For the Kids:
            </h4>
            <li>
              Well-equipped Playground (Jingle Pad, Sliders, Spider, Swing, and
              others)
            </li>
          </ul>

          <ul className="max-w-md space-y-1 text-blue-500 list-disc list-inside dark:text-green-500">
            <h4 className="text-2xl font-bold dark:text-white">For Adults:</h4>
            <li>Separate Ground (Volleyball, Football, Badminton)</li>
            <li>Cricket Ground (Work in progress on the pitch)</li>
          </ul>

          <ul className="max-w-md space-y-1 text-blue-500 list-disc list-inside dark:text-green-500">
            <h4 className="text-2xl font-bold dark:text-white">
              Accommodation:
            </h4>
            <li>Accommodation Facilities</li>
          </ul>

          <ul className="max-w-md space-y-1 text-blue-500 list-disc list-inside dark:text-green-500">
            <h4 className="text-2xl font-bold dark:text-white">
              Meetings and Events:
            </h4>
            <li>Hall Project Available for Meetings</li>
            <li>
              Hall Available for Domestic/Family and Business Meetings and
              Events
            </li>
          </ul>

          <ul className="max-w-md space-y-1 text-blue-500 list-disc list-inside dark:text-green-500">
            <h4 className="text-2xl font-bold dark:text-white">
              Other Services:
            </h4>
            <li>Secure Parking</li>
          </ul>

          <ul className="max-w-md space-y-1 text-blue-500 list-disc list-inside dark:text-orange-400">
            <h4 className="text-2xl font-bold dark:text-white">Food:</h4>
            <li>Roasted Corn and Dal Batti in Ghee</li>
            <li>Traditional Village Food</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Activity;

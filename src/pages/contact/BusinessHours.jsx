import React from "react";

const BusinessHours = () => {
  const now = new Date();
  const today = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentMinutes = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

  // Define shop schedule
  const openingMinutes = 10 * 60; // 10:00 AM = 600 minutes
  const closingMinutes = 20 * 60; // 8:00 PM = 1200 minutes

  // Shop is closed on Monday (1)
  const isClosedDay = today === 1;

  // if current time is within open hours
  const isOpenNow = !isClosedDay && currentMinutes >= openingMinutes && currentMinutes <= closingMinutes;

  const statusText = isOpenNow ? "* Open Now" : "* Closed Now";
  const statusColor = isOpenNow ? "text-green-600" : "text-red-500";

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h2>
      <p className="text-gray-600">Sunday – Friday: 10:00 AM – 8:00 PM</p>
      <p className="text-gray-400">
        Close – Monday
        <span className={`px-4 font-semibold ${statusColor}`}> {statusText} </span>
      </p>
    </div>
  );
};

export default BusinessHours;

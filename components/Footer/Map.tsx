import React from "react";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7502.848111155016!2d75.9725075!3d19.906527400000044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda5bf5c58d65ff%3A0x7f59128a8ff6f42d!2z4KSX4KWL4KSV4KWB4KSzIOCkleClg-Ckt-ClgCDgpKrgpLDgpY3gpK_gpJ_gpKgg4KSV4KWH4KSC4KSm4KWN4KSwIOCktSDgpKrgpL_gpJXgpKjgpL_gpJUg4KS44KWH4KSC4KSf4KSw!5e0!3m2!1sen!2sin!4v1710784395623!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      id="location"
    ></iframe>
  );
};

export default Map;

import React, { useState } from "react";
import Label from "../../components/Label/Label";

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState(""); // State to hold the selected gender

  // Function to handle gender selection
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value); // Update selected gender state
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <Label className="flex items-center">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === "male"} // Set checked if selectedGender is male
            onChange={handleGenderChange} // Call handleGenderChange function on change
          />
          <span className="ml-2">Male</span>
        </Label>

        <Label className="flex items-center">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === "female"} // Set checked if selectedGender is female
            onChange={handleGenderChange} // Call handleGenderChange function on change
          />
          <span className="ml-2">Female</span>
        </Label>
      </div>
      <div>
        {/* Display selected gender */}
        Selected Gender: {selectedGender && <strong>{selectedGender}</strong>}
      </div>
    </>
  );
};

export default Gender;

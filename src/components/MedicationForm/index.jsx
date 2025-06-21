import React, { useState } from "react";
import API from "../../Api";

const MedicationForm = ({ userId, onMedicationAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "",
    date: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/medications", { ...formData, userId });
      alert("Medication added");
      onMedicationAdded();
      setFormData({ name: "", dosage: "", frequency: "", date: "" });
    } catch (err) {
      alert("Failed to add medication",err);
    }
  };

  return (
    <form 
  onSubmit={handleSubmit} 
  className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto space-y-4"
>
  <input
    name="name"
    placeholder="Medicine Name"
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    name="dosage"
    placeholder="Dosage"
    value={formData.dosage}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    name="frequency"
    placeholder="Frequency"
    value={formData.frequency}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    name="date"
    type="date"
    value={formData.date}
    onChange={handleChange}
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
  >
    Add Medication
  </button>
</form>

  );
};

export default MedicationForm;

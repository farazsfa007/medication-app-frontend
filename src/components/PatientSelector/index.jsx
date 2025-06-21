import React, { useEffect, useState } from "react";
import API from "../../Api";

const PatientSelector = ({ onSelect }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    API.get("/auth/patients").then((res) => setPatients(res.data));
  }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Patient</option>
      {patients.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name} ({p.email})
        </option>
      ))}
    </select>
  );
};

export default PatientSelector;

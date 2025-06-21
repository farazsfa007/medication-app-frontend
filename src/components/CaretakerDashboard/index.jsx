import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientSelector from "../PatientSelector";
import MedicationList from "../MedicationList";

const CaretakerDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  if (!user || user.role !== "caretaker") {
    navigate("/login");
    return null;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome Caretaker <span className="text-blue-600">{user.name}</span>
    </h2>
    <div className="mb-6">
        <PatientSelector onSelect={setSelectedPatientId} />
    </div>
    {selectedPatientId && (
        <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
            Medications of Patient #{selectedPatientId}
        </h3>
        <MedicationList
            userId={selectedPatientId}
            reloadTrigger={false}
            readOnly
        />
        </div>
    )}
    </div>

  );
};

export default CaretakerDashboard;

import React, { useEffect, useState } from "react";
import API from "../../Api";

const MedicationList = ({ userId, reloadTrigger, readOnly = false }) => {
    const [medications, setMedications] = useState([]);

    useEffect(() => {
        const fetchMeds = async () => {
        const res = await API.get(`/medications/${userId}`);
        setMedications(res.data);
        };
        fetchMeds();
    }, [reloadTrigger, userId]);

    const markAsTaken = async (id) => {
        await API.put(`/medications/mark/${id}`);
        alert("Marked as taken");
    };

    const deleteMedication = async (id) => {
        await API.delete(`/medications/${id}`);
        alert("Deleted");
    };

    return (
        <div className="max-w-2xl mx-auto mt-8">
  <h3 className="text-xl font-semibold text-gray-800 mb-6">Medications</h3>
  <div className="space-y-5">
    {medications.map((med) => (
      <div
        key={med.id}
        className="bg-white rounded-lg shadow p-5 flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="text-lg font-bold text-blue-700">{med.name}</p>
          <p className="text-gray-700">
            {med.dosage} &bull; {med.frequency} &bull; {med.date}
          </p>
          <p className="mt-1">
            Taken:{" "}
            <span className={med.isTaken ? "text-green-600" : "text-red-500"}>
              {med.isTaken ? "✅" : "❌"}
            </span>
          </p>
        </div>
        {!readOnly && (
          <div className="mt-4 md:mt-0 flex space-x-3">
            {!med.isTaken && (
              <button
                onClick={() => markAsTaken(med.id)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Mark as Taken
              </button>
            )}
            <button
              onClick={() => deleteMedication(med.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    ))}
  </div>
</div>


    );
};

export default MedicationList;

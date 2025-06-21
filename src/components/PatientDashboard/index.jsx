import React, { useState } from "react";
import MedicationForm from "../MedicationForm";
import MedicationList from "../MedicationList";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const [reload, setReload] = useState(false);

    if (!user || user.role !== "patient") {
        navigate("/login");
        return null;
    }

    const triggerReload = () => setReload((prev) => !prev);

    return (
        <div className="max-w-3xl mx-auto mt-10 p-8 bg-gray-300 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-8">
                Welcome Patient <span className="text-gray-800">{user.name}</span>
            </h2>
            
            <div className="mb-8">
                <MedicationForm userId={user.id} onMedicationAdded={triggerReload} />
            </div>
            
            <div>
                <MedicationList userId={user.id} reloadTrigger={reload} />
            </div>
        </div>

    );
};

export default PatientDashboard;

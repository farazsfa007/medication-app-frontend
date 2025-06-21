import React, { useState } from "react";
import API from "../../Api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);
      alert("Login successful!");

      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));

      // 🔽 Role-based redirect
      if (user.role === "patient") {
        navigate("/patient-dashboard");
      } else if (user.role === "caretaker") {
        navigate("/caretaker-dashboard");
      } else {
        navigate("/"); // fallback
      }

    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;

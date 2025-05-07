import { AuthContext } from "@/_context/AuthContext";
import axios from "axios";
import { useContext, useState } from "react";

export default function RegisterForm() {
  const { setAuthType } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    role: "student",
    password: "",
  });

  const [message, setMessage] = useState({ error: "", success: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ error: "", success: "" });

    try {
      const response = await axios.post("http://localhost:8000/api/accounts/register/", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      
      if (response.status === 201) {
        setMessage({ success: "ثبت‌نام با موفقیت انجام شد. لطفاً وارد شوید." });
      } else {
        setMessage({ error: response.data.error || "خطایی رخ داده است." });
      }
    } catch (err) {
      setMessage({ error: "مشکلی پیش آمده است." });
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">ثبت‌نام</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="نام کامل"
          className="w-full p-3 mb-4 border rounded"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          className="w-full p-3 mb-4 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          className="w-full p-3 mb-4 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          className="w-full p-3 mb-4 border rounded"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="student">دانشجو</option>
          <option value="teacher">مدرس</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
        >
          ثبت‌نام
        </button>
        {message.error && <p className="mt-4 text-red-600 text-center">{message.error}</p>}
        {message.success && <p className="mt-4 text-green-600 text-center">{message.success}</p>}
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-green-600 hover:underline"
            onClick={() => setAuthType("login")}
          >
            حساب دارید؟ وارد شوید
          </button>
        </div>
      </form>
    </div>
  );
}

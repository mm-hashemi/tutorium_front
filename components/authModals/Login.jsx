import { useContext, useState } from "react";
import { AuthContext } from "../../_context/AuthContext";
import axios from "axios";

export default function LoginForm() {
  const { login,authType,setAuthType } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ error: "", success: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ error: "", success: "" });

    try {
      const response = await axios.post("http://localhost:8000/api/accounts/login/", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const { access, refresh } = response.data;

        // ذخیره توکن‌ها در localStorage
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);

        // دریافت اطلاعات پروفایل کاربر
        const profileResponse = await axios.get("http://localhost:8000/api/accounts/me/", {
          headers: { Authorization: `Bearer ${access}` },
        });

        // ذخیره اطلاعات پروفایل کاربر در context
        login({
          full_name: profileResponse.data.full_name,
          profile_picture: profileResponse.data.profile_picture,
        });

        setMessage({ success: "ورود موفقیت‌آمیز بود." });
      } else {
        setMessage({ error: response.data.detail || "خطا در ورود." });
      }
    } catch (err) {
      setMessage({ error: "مشکلی پیش آمده است." });
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        ورود به حساب کاربری
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">ایمیل</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">رمز عبور</label>
          <input
            type="password"
            name="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          ورود
        </button>

        {message.error && <p className="mt-4 text-red-600 text-center">{message.error}</p>}
        {message.success && <p className="mt-4 text-green-600 text-center">{message.success}</p>}

        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => setAuthType("register")}
          >
            حساب کاربری ندارید؟ ثبت‌نام کنید
          </button>
        </div>
      </form>
    </div>
  );
}

import { useState } from "react";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserData((e) => ({
      ...e,
      [name]: value,
    }));
  };

  const localStorageItem = JSON.parse(localStorage.getItem("registration"));

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      localStorageItem.email === userData.email &&
      localStorageItem.password === userData.password
    ) {
      alert("Login Successful");
      window.location.href = "https://www.youtube.com/";
    } else {
      alert("Login Failed");
    }
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="main flex min-h-screen w-full flex-col items-center justify-start bg-[#0a1823] text-white">
      <h1 className="py-3 text-5xl text-[#7cff99]">Login Form</h1>
      <div className="p-10">
        <form
          className="flex w-[500px] flex-col items-center justify-center rounded-3xl border-2 border-[#23303a] p-10"
          onSubmit={handleOnSubmit}
        >
          <div className="mb-5 flex w-full flex-col items-start justify-center">
            <label className="text-xl font-thin">Email :</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              value={userData.email}
              onChange={handleOnChange}
              className="w-full border-b-2 bg-transparent pt-3 text-xl font-thin outline-none"
            />
          </div>
          <div className="mb-5 flex w-full flex-col items-start justify-center">
            <label className="text-xl font-thin">Password :</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
              value={userData.password}
              onChange={handleOnChange}
              className="w-full border-b-2 bg-transparent pt-3 text-xl font-thin outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-10 w-full rounded-xl bg-[#60d17d] py-2 text-xl text-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import { useState } from "react";

function Registration() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUserData((e) => ({
      ...e,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "registration",
      JSON.stringify({
        name: userData.firstName,
        email: userData.email,
        password: userData.password,
        phoneNumber: userData.phoneNumber,
      }),
    );
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    });
    alert("Registration Successful");
    window.location.href = "http://localhost:5173/login";
  };

  return (
    <>
      <div className="main flex min-h-screen w-full flex-col items-center justify-start bg-[#0a1823] text-white">
        <h1 className="py-3 text-5xl text-[#7cff99]">Registration Form</h1>
        <div className="p-10">
          <form
            className="flex w-[500px] flex-col items-center justify-center rounded-3xl border-2 border-[#23303a] p-10"
            onSubmit={handleOnSubmit}
          >
            <div className="mb-5 flex w-full flex-col items-start justify-center">
              <label className="text-xl font-thin">First Name :</label>
              <input
                type="text"
                name="firstName"
                required
                autoComplete="off"
                value={userData.firstName}
                onChange={handleOnChange}
                className="w-full border-b-2 bg-transparent pt-3 text-xl font-thin outline-none"
              />
            </div>
            <div className="mb-5 flex w-full flex-col items-start justify-center">
              <label className="text-xl font-thin">Last Name :</label>
              <input
                type="text"
                name="lastName"
                required
                autoComplete="off"
                value={userData.lastName}
                onChange={handleOnChange}
                className="w-full border-b-2 bg-transparent pt-3 text-xl font-thin outline-none"
              />
            </div>
            <div className="mb-5 flex w-full flex-col items-start justify-center">
              <label className="text-xl font-thin">Email Address :</label>
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
            <div className="mb-5 flex w-full flex-col items-start justify-center">
              <label className="text-xl font-thin">Phone Number :</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                autoComplete="off"
                value={userData.phoneNumber}
                onChange={handleOnChange}
                className="w-full border-b-2 bg-transparent pt-3 text-xl font-thin outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-10 w-full rounded-xl bg-[#60d17d] py-2 text-xl text-black"
            >
              Register
            </button>
            <p className="pt-5">
              <a href={"/login"} className="px-3 text-xl font-thin underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;

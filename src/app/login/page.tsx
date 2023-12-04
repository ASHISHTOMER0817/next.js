"use client";
import Link from "next/link";
import react, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
// import { tree } from "next/dist/build/templates/app-page";

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = react.useState({
    email: "",
    password: ""
  });
  const [buttonDisabled, setbuttonDisabled] = react.useState(false)
  const [loading, setloading] = react.useState(false)


  const onlogin = async () => {
    try {
setloading(true);
 const response = await axios.post('/api/users/login', user)
 console.log("Login success", response.data);
 toast.success("Login success");
 router.push("/profile");
    }catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    }finally{
      setloading(false)
    }
   };

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0) {
setbuttonDisabled(false);
    }else{setbuttonDisabled(true)}
  }, [user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className=" text-white text-2xl">{loading? "Processing": "login"}</h1>
      <br />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        id="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="password"
      />
            <button
        onClick={onlogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 outline focus:outline-none focus:border-gray-600"
      >
        login here
      </button>
      <Link href={"/signup"}>Visit signup Page</Link>
    </div>
  );
}

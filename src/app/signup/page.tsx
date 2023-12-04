"use client";
import Link from "next/link";
import react, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  axios  from "axios";
import { Toast } from "react-hot-toast";



export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = react.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttonDisabled, setbuttonDisabled] = react.useState(false);
    const [loading, setloading] = react.useState(false);
    const onSignup = async () => {
        try {
            setloading(true)
     const response = await axios.post("/api/users/signup", user)
     console.log("Signup success", response.data);
     router.push("/login")

        } catch (error: any) {
console.log("Signup Failed", error.message);

        } finally {
            setloading(false);
        }
    };
    useEffect(() => {
        if (
            user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0
        ) {
            setbuttonDisabled(false);
        } else {
            setbuttonDisabled(true);
        }
    });
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className=" text-white text-2xl">
                {loading ? "Processing" : "Signup"}
            </h1>
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
            <label htmlFor="username">username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                }}
                placeholder="username"
            />
            <button
                onClick={onSignup}
                className="p-2 border border-gray-300 rounded-lg mb-4 outline focus:outline-none focus:border-gray-600"
            >
                {buttonDisabled ? "No signup" : "Signup"}
            </button>
            <Link href={"/login"}>Visit login Page</Link>
        </div>
    );
}

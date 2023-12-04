"use client"
import axios from "axios"
import React,{ useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

export default function ProfilePage() {
const router = useRouter()
const [data, setData] = useState("nothing")
const logout = async () => {
try{
await axios.get('/api/users/logout')
toast.success('Logout successful')
router.push('./login')
}catch (error: any){
  console.log(error.message)
  toast.error(error.message)
}
}
const getUserDetails = async () => {
  const res = await axios.get('/api/users/me')
  console.log(res.data.data.user);
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>Profile</h2>
      <br />
      <h1>Profile Page</h1>
      <h2 className="padding rounded bg-green-500">{data === 'nothing' ? "Nothing": <Link href={`/profile/${data}`}></Link>}</h2>
      <button onClick={logout} className="bg-blue-300 text-white hover:bg-blue-800 font-bold py-2 px-4 mt-2 rounded-md">
        Logout
      </button>
      <button onClick={getUserDetails} className="bg-green-300 text-black hover:bg-green-800 font-bold py-2 px-4 mt-2 rounded-md">
        Get User details
      </button>
    </div>
  );
}

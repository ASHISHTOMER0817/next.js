"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

export default function ProfilePage() {
const router = useRouter()
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>Profile</h2>
      <br />
      <h1>Profile Page</h1>
      <button onClick={logout} className="bg-blue-300 text-white hover:bg-blue-800 font-bold py-2 px-4 mt-2 rounded-md">
        Logout
      </button>
    </div>
  );
}

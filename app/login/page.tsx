"use client"

import { useState } from "react";

const page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Login = async () => {
        const response = await fetch("http://www.localhost:3000/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        console.log(response);
        return response.json();
    }

    return (
        <div className="flex flex-col gap-8 mt-5 mr-5">
        <div className="flex gap-5">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input 
                type="text"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
                type="text"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit" onClick={()=>Login()}>Login</button>
            </form>    
        </div>
      </div>
    ) 
}

export default page;
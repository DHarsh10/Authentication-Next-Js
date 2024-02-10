"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { strict } from "assert";


const Signup = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })


    return(
        <div>
            <div className="px-8 py-12">
                <div className="flex flex-col align-middle justify-center">
                    <h1 className="text-4xl text-center font-bold">Signup</h1>

                    <div className="text-center my-16">
                        <div className="py-4">
                            <label htmlFor="username" className="w-2/12 inline-block">User Name</label>
                            <input id="username" type="text" value={user.username} onChange={e=> setUser({...user, username:
                            e.target.value})} className="py-2 px-4 mx-8 text-gray-950 border-none rounded-lg "/>
                        </div>

                        <div className="py-4">
                            <label htmlFor="email" className="w-2/12 inline-block">Email</label>
                            <input id="email" type="text" value={user.email} onChange={e=> setUser({...user, email:
                            e.target.value})} className="py-2 px-4 mx-8 text-gray-950 border-none rounded-lg "/>
                        </div>

                        <div className="py-4">
                            <label htmlFor="password" className="w-2/12 inline-block">Password</label>
                            <input id="password" type="text" value={user.password} onChange={e=> setUser({...user, password:
                            e.target.value})} className="py-2 px-4 mx-8 text-gray-950 border-none rounded-lg "/>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/login" className="py-2 px-8 bg-slate-300 text-black rounded-2xl">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
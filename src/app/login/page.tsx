"use client"

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {

    const [use, setUse] = useState({
        email: "",
        password: ""
    })


    return(
        <div>
            <div className="px-8 py-12">
                <div className="flex flex-col align-middle justify-center">
                    <h1 className="text-4xl text-center font-bold">Login</h1>

                    <div className="text-center my-16">
                        <div className="py-4">
                            <label htmlFor="email" className="w-2/12 inline-block">Email</label>
                            <input id="email" type="text" value={use.email} onChange={e=> setUse({...use, email:
                            e.target.value})} className="py-2 px-4 mx-8 text-gray-950 border-none rounded-lg "/>
                        </div>

                        <div className="py-4">
                            <label htmlFor="password" className="w-2/12 inline-block">Password</label>
                            <input id="password" type="text" value={use.password} onChange={e=> setUse({...use, password:
                            e.target.value})} className="py-2 px-4 mx-8 text-gray-950 border-none rounded-lg "/>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link href="/signup" className="py-2 px-8 bg-slate-300 text-black rounded-2xl">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;

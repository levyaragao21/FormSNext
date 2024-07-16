"use client"
import Image from "next/image";
import {Eye} from "@phosphor-icons/react";
import {useState} from "react";



export default function Home() {
  const [errorMessage ,  setErrorMessage ] = useState ("");
  function validationEmail(email){
    if (!email.includes("@")){
      

      return false;
    }
    if(!email.includes(".com") && !email.includes(".com.br")){
     return false;
    }
     if (email.includes("@.")){
      return false;
     }
     if (email[0] === "@" || email[0]=== "."){
      return false;
     }
     return true;
  }
  function onChangeEmail(event){
    const email = event.target.value;
    if(validationEmail(email)){
      setErrorMessage("");
    } else{
      setErrorMessage("*Email inválido, por favor insira um email válido.");
    }
  }
  return (
    <main className="flex min-h-screen flex-col 
    items-center justify-center p-24 max-h-screen">
      <Image
        src="/assets/woman.jpeg"
        alt="logo"
        width={1400}
        height={1400}
        style={{
          position: "absolute",
          overflow: "hidden",
          maxHeight: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-indigo-800 opacity-70" />

      <div className="flex min-w-full min-h-screen z-10 py-10 ">
        <div className="flex-[2]">
          <h1 className="text-white font-black text-3xl">Techbia</h1>
        </div>
        <div className="flex-1 flex justify-center items-center py-6 px-12  ">

          {/*DivForms */}
          <div className="bg-white rounded-3xl min-w-full min-h-full flex justify-center items-start flex-col text-black gap-2 p-2">
            <h1 className="text-3xl font-bold text-indigo-800"> Let&apos;s create account</h1>
            <p>Get started by creating your account</p>
            {/*Imputs*/}
            <div className="flex gap-2">
              <input className="border-none focus:outline-none hover:bg-indigo-400 bg-gray-200 rounded-2xl placeholder-gray-500 p-4 flex-1" placeholder="First name"></input>
              <input className="border-none focus:outline-none hover:bg-indigo-400 bg-gray-200 rounded-2xl placeholder-gray-500 p-4 flex-1" placeholder="Second-name"></input>
            </div>

            {/*ImputEmail */}

            
            <input onBlur={onChangeEmail} className="border-none focus:outline-none hover:bg-indigo-400 bg-gray-200 rounded-2xl placeholder-gray-500 p-4 flex-4 min-w-full " placeholder="Email"></input>
            {/* UsaFlag */}


            <div className="h-16 w-full bg-gray-200 o rounded-xl flex items-center px-2 gap-4">
              <Image src="/assets/usaflag.png" alt="arrow" width={30} height={30} />
              <p>+1</p>
              <div className="w-[1px] h-[80%] bg-gray-400 rounded"></div>
              <input className="flex-grow bg-transparent focus:outline-none" placeholder="Number"></input>
            </div>
          <div className="flex gap-2">
            <div className="h-16 w-full bg-gray-200 o rounded-xl flex items-center px-4 gap-2  hover:bg-indigo-400 " >


              <input className="flex-star  bg-transparent focus:outline-none  placeholder-gray-500 " placeholder="Password" ></input>
              <Eye size={32} />
            </div>

            <div className="h-16 w-full bg-gray-200 o rounded-xl flex items-center px-4 gap-2  hover:bg-indigo-400  placeholder-gray-500 ">
              <input className="flex-grow bg-transparent focus:outline-none  placeholder-gray-500" placeholder="Confirm-Password"></input>
              <Eye size={32} />
              
            </div>
          </div>
          <div className="text-red-600">
            {errorMessage}
          </div>

          <div className="flex items-start px-4">
            <span>
              <input type="checkbox" className="mr-2 h-5 w-5 accent-[#836ef1]"></input>
            </span>
             <p> by checking this box you are agreein with out terms anda conditions and privacy</p>
          </div>

          </div>
        </div>
      </div>
    </main>
  );
}

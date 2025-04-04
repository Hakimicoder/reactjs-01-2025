import React from 'react'


 const Username = "User";

export default function UserInfo() {
  return (
    <>
      <div className="">
        <div>
          {/* <aside /> */}
          <h1 className="font-black text-4xl text-red-500">Hello <span className="text-black">{Username}</span></h1>
        </div>
      </div>
    </>
      )
}
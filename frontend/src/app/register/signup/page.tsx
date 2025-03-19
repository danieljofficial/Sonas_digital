// import Input from "@/components/Input";
import React from "react";

function Signup() {
  return (
    <form className="">
      <h1 className="text-pri font-bold">Get Started</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 p-4">
        {/* <Input label={"First name"} />
        <Input label={"Last name"} />
        <Input label={"Company email address"} />
        <Input label={"Password"} />
        <Input label={"Confirm password"} /> */}

        <button className="bg-accent rounded-md p-2 text-bg font-bold">
          Create a new account
        </button>
      </div>
    </form>
  );
}

export default Signup;

import React from "react";
import { useFormStatus } from "react-dom";

async function handleSubmit(formData) {
  await new Promise((res) => setTimeout(res, 2000));
  alert(`Username: ${formData.get("username")}, Password: ${formData.get("password")}`);
}

function HandleForm() {
  const { pending } = useFormStatus();
  return (
    <div>
      <input type="text" name="username" placeholder="Enter username" />
      <br />
      <br/>
      <input type="password" name="password" placeholder="Enter password" />
      <br />
      <br/>
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"} 
      </button>
    </div>
  );
}

export default function UseFormStatusHook() {
  return (
    <div>
      <h1>useFormStatus Hook in React</h1>
      <form action={handleSubmit}>
        <HandleForm />
      </form>
    </div>
  );
}

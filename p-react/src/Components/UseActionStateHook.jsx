import React, { useActionState } from 'react'

const UseActionStateHook = () => {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise(res => setTimeout(res, 2000));

    if (name && password) {
      return { message: "Data submitted", name, password };
    } else {
      return { error: "Failed to submit. Enter proper data" };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <div>
      <h1>UseActionState Hook in React JS</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder='Enter name' name='name' />
        <br /><br />
        <input defaultValue={data?.password} type="password" placeholder='Enter password' name='password' />
        <br /><br />
        <button disabled={pending}>Submit Data</button>
      </form>

      {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data.message}</span>}

      <h3>Name: {data?.name}</h3>
      <h3>Password: {data?.password}</h3>
    </div>
  );
}

export default UseActionStateHook;

import React from 'react'

type FormType = {
    name:string,
    email:string,
    password:string,
}
function FormCom() {

    const handleFormAction = (data:any) =>{
        console.log(data);
        const userData = {
            name: data.get('name'),
            email:data.get('email'),
            password:data.get('password')
        }
        console.log(userData);
    }

  return (
    <div>
        <form action={handleFormAction}>
            <div>
            <label htmlFor="">Name: </label>
            <input type="text" placeholder='Enter you name' name='name' />
            </div>
            <div>
            <label htmlFor="">Email: </label>
            <input type="email" placeholder='Enter you email' name='email' />
            </div>
            <div>
            <label htmlFor="">Name: </label>
            <input type="password" placeholder='Enter you password' name='password' />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormCom
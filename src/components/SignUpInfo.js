import React from 'react'

function SignUpInfo({formData, setFormData}) {
  return (
    <div className='sign-up-container'>
        <input 
            type="text" 
            placeholder='Email...' 
            value={formData.email} 
            onChange={(event) => setFormData({...formData, email: event.target.value})}
        />
        <input 
            type="password" 
            placeholder='Password...' 
            onChange={(event) => setFormData({...formData, password: event.target.value})}
        />
        <input 
            type="password"
            placeholder='Confirm Password...' 
            onChange={(event) => setFormData({...formData, confirmpassword: event.target.value})}
        />
    </div>
  )
}

export default SignUpInfo
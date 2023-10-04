import React from 'react'
import GoogleButton from 'react-google-button'

const Sigindeactive = () => {
  return (
    <div>
      <form>
        <div className='Form-SignIn-Deactive'>
          <h1>Welcome Back!</h1><br/>
          <GoogleButton 
            onClick={() => { console.log('Google button clicked') }}  
            style={{borderRadius: '5px'}}
          />
        </div>
      </form>
    </div>
  )
}

export default Sigindeactive;
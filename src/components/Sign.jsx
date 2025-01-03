import { useState } from 'react'

import Google from './icons/vecteezy_google-search-icon-google-product-illustration_12871371.png'
import Cancel from './icons/3d-rendering-backspace-isolated-free-png.png'
//import firebase authentication service
import { auth } from '../config/fireBase'
import { createUserWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth'

import { provider } from '../config/fireBase'

export default function Sign() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   //close authentication dialog

   const [close, setClose] = useState(true)


   const hadleUserAuth = async () => {
      try {
         await createUserWithEmailAndPassword(auth, email, password)
         console.log('User created!')
      } catch (error) {
         console.log(error)
      }
      // if(password === null){
      //    alert('Successfully signed in')
      // }else{
      //    alert('Error signing in')
      // }
   }


   const handleSignOut = async () => {
      try {
         await signOut(auth)
         console.log('User Logged Out')
      } catch (error) {
         console.log(error)
      }
   }

   const handleGoogleSignIn = async () => {
      try {
         await signInWithPopup(auth, provider)
      } catch (err) {
         console.error('err ', err);
      }

   }

   const cancel = () => {
      setClose(!close)
      console.log('closed')
   }
   return (
      <div>

         {close && 
         <div className="m-3">
            <button
               onClick={cancel}
               className='closes'>
               <img
                  className='w-[40px]'
                  src={Cancel} alt="" />
            </button>

            <input
               onChange={(e) => setEmail(e.target.value)}
               className="border-1 mb-[10px] mt-[30px]  h-[40px] font-mono w-[350px]"
               type="text" placeholder='Email..' />
            <input
               onChange={(e) => setPassword(e.target.value)}
               className="border-1 mb-[30px] mt-[30px]  h-[40px] font-mono w-[350px]"
               type="password" placeholder='Password...' />

            <div className='mb-[30px] flex items-center gap-5 '>
               <button
                  onClick={hadleUserAuth}
                  className="bg-slate-200 p-2 rounded-lg font-mono">Log in</button>
               <button onClick={handleGoogleSignIn} className='bg-slate-200 p-2 rounded-lg font-mono w-[40px] ml-2 '>
                  <img
                     className='w-[20px] ml-2'
                     src={Google} alt="" />
               </button>
               <button
                  onClick={handleSignOut}
                  className='duration-1000 ease-in-out transition-all hover:bg-red-700 p-2 rounded-lg font-mono  text-red-50'>Log out</button>

            </div>
         </div>
   }
      </div>
   )
}

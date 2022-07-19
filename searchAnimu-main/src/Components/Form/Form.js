import React,{useContext,useState} from 'react'
import {AnimuContext} from '../../Context/AnimuContext'
import './Form.css'
import { AiFillCloseCircle } from "react-icons/ai";
import {createUserWithEmailAndPassword
        ,onAuthStateChanged,
        signOut, 
        signInWithEmailAndPassword      } from 'firebase/auth'
import { auth } from '../../FirebaseConfig/firebase'

export const logOut = async ()=>{
    await signOut(auth);
}
const Form = () => {
    
    console.log(user)
    const {form,setForm,setPassword,setEmail,email,password,user,setUser} = useContext(AnimuContext); 
   
 


    onAuthStateChanged(auth ,(currentUser)=>{
        setUser(currentUser)
    })
    const register = async ()=>{

           try{
            const user =  await createUserWithEmailAndPassword(
                auth,
                email,
                password)
           }catch(error){
               console.log(error.message)
           }
    }
    const login = async ()=>{
        try{
            const user =  await signInWithEmailAndPassword(
                auth,
                email,
                password)      
           }catch(error){
               console.log(error.message)
           }
    }
    const prevent = (e)=>{
        e.preventDefault()
    }
    return ( 
            <div className="formLogin">
         <div className="closeForm">
         <AiFillCloseCircle onClick={()=>setForm("false")}/>
         </div>
        
            <form onSubmit={(e)=>prevent(e)}>
            {
               form==="login"?
               (<div className="login formContainer">
                   <h3>Login</h3>
                    <label htmlFor="emailLogin">
                    Email:    
                    <input type="text" name="emailLogin" autoComplete="off" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                    </label>
                    <label htmlFor="passwordLogin"  >
                    Password: 
                    <input type="password" name="passwordLogin" autoComplete="off" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                    </label>
                    <button onClick={login}>Login</button>
                </div>):
                (<div className="register formContainer">
                    <h3>Register</h3>
                   <label htmlFor="emailRegister">
                    Email:    
                    <input type="text" name="emailRegister" autoComplete="off" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                    </label>
                    <label htmlFor="passwordRegister">
                    Password: 
                    <input type="password" name="passwordRegister" autoComplete="off"  onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                    </label>
                    <button onClick={register}>Register</button>
                   
                </div>) 
            }
            </form>
        </div>
     );
}
 
export default Form;
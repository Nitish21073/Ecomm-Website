import React from "react";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut
} from 'firebase/auth'
import { Provider, useDispatch } from "react-redux";
import { toast,ToastContainer } from "react-toastify";
import { addUser, removeUser } from "../redux/shopsySlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const handleGoogleLogin = (e)=>{
     e.preventDefault()
    
     signInWithPopup(auth, provider)
     .then((result) => {
       // This gives you a Google Access Token. You can use it to access the Google API.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       // The signed-in user info.
       const user = result.user;
       dispatch(addUser({
        _id:user.uid,
        name:user.displayName,
        email:user.email,
        image:user.photoURL,
       })) 
        toast.success("Log in Successfully")
      
       setTimeout(()=>{
        navigate('/')
       },1000)
       
       // IdP data available using getAdditionalUserInfo(result)
       // ...
     }).catch((error) => {
       // Handle Errors here.
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.customData.email;
       // The AuthCredential type that was used.
       const credential = GoogleAuthProvider.credentialFromError(error);
       
       // ...
     });
    }
     const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
            toast.success("Log Out Sucessfully")
            dispatch(removeUser())
          
        }).catch((error)=>{
            console.log(error)
        })
     }
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img
            className="w-12"
            src="https://cdn.pixabay.com/photo/2016/10/23/06/04/google-1762248_960_720.png"
            alt="GoogleLogo"
          />
          <span className="text-sm text-gray-900">Sign in with Google</span>
        </div>
        <button onClick={handleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign out
        </button>
      </div>
      {/* <div className="w-full flex items-center justify-center gap-10">
        <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
          <img
            className="w-10"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GithubLogo"
          />
          <span className="text-sm text-gray-900">Sign in with Github</span>
        </div>
        <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign out
        </button>
      </div> */}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;


import { create } from 'zustand'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { setDoc , doc , getDoc } from 'firebase/firestore'
import { firebaseAuth , database } from '../../firebase/firebase'
import toast from 'react-hot-toast'
const useAuth = create((set,get)=>({
    //global state
    //key:value
    isPendingRegister : false,
    isPendingLogin : false,
    currentUser: null,
    isPendingCurrentUser: true,
    registerHandler : async(data)=>{
      set({isPendingRegister:true})
     try{
     const {firstName,lastName,phone,email,password,gender} = data
      // no need to have const userdata in signin because we don't store in login 
       const userData = await createUserWithEmailAndPassword(firebaseAuth,email,password)
       console.log(userData);

       //i don't need them in login because we don't store in login 
       const id = userData.user.uid
       await setDoc(doc(database, 'users',id),{
        id,
        userName: firstName.trim()+' '+lastName.trim(),
        email,
        password,
        phone,
          gender,
        createdAt : new Date()
       })
       console.log('success credential')
       return {success:true}
       
     }catch(error){
      console.log(error.message)
      return {success:false , message:error.message}
     }
     finally{
        set({isPendingRegister:false})
     }
    },
    loginHandler : async(data)=>{
      set({isPendingLogin:true})
     try{
      const{email , password}=data
      //here we check if we have data or not so we don't need to store the data
       await signInWithEmailAndPassword(firebaseAuth,email,password)
       console.log('success credential')
       return {success:true}
       
     }catch(error){
      console.log(error.message)
      return {success:false , message:error.message}
     }
     finally{
        set({isPendingLogin:false})
     }
    },
    logoutHandler : async()=>{
      try{
        await signOut(firebaseAuth)
      }catch(error){
        toast(  error.message)
      }
    },
    fetchUserData : async(id)=>{
       const userData = await getDoc(doc(database,'users',id))
       if(userData.exists()){
        set({currentUser : userData.data()})
       
       }
    },
    initiatAuth : ()=>{
        const {fetchUserData}= get()
        const recordUserState = onAuthStateChanged(firebaseAuth,async(user)=>{
            if(user){
                await fetchUserData(user.uid)
            }
            else{
                set({currentUser:null})
            }
            set({isPendingCurrentUser:false})
        })
        return recordUserState
    }
}))

export default useAuth




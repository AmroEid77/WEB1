import { addDoc, collection, deleteDoc, doc, onSnapshot,updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase';



export const useFireBase=(Task)=>{
    const [items,setItems ] = useState([])
    
    useEffect (()=>{
        const unSubscribe=onSnapshot(collection(db,Task),(querySnapShot)=>{
            const data=querySnapShot.docs.map((doc)=>({...doc.data(),id:doc.id}))
            setItems(data)
        })
            return ()=>unSubscribe()
    },[])

    const updateData=async(id,field,newValue)=>{
        const docRef=doc(db,Task,id)
        await updateDoc(docRef,{[field]:newValue})
    }

    const addData=async(e,data)=>{
        e.preventDefault()
        try{
            await addDoc(collection(db,Task),data)
        }
        catch (error){
            console.log(error)
        }

    }
    
    const deleteData=async(id)=>{
        await deleteDoc(doc(db,Task,id))
    }
return {items,updateData,addData,deleteData}

}
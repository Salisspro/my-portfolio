import { useEffect, useRef, useState } from "react"
import { db, auth } from "../../config/fireBase"
import {
   collection,
   getDocs,
   addDoc,
   doc,
   deleteDoc,
} from 'firebase/firestore'


export default function FireStore() {
   const [text, setText] = useState([])

   //creatind a collection
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const newRef = useRef(null)

   const postCollection = collection(db, 'post')

   const getCollection = async () => {
      try {
         const data = await getDocs(postCollection)
         const newData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
         }))
         console.log(newData)
         setText(newData)
      } catch (err) {
         console.error('err ', err);
      }
   }
   useEffect(() => {
      getCollection()
   },)

   const handlDelete = async (id) => {
      const newDoc = doc(db, 'post', id)
      await deleteDoc(newDoc)
   }




   const handleAddDoc = async () => {
      try {
         newRef.current.value = ''
         await addDoc(postCollection, {
            title: title,
            userPost: description,
            userid: auth?.currentUser?.uid,
         })
      } catch (err) {
         console.error('err ', err);
      }
      getCollection()
   }


   return (
      <div className="text-slate-100 font-mono input-group flex-nowrap mt-10">
         <span className="text-4xl">You may leave comment...</span>

         <div className="add ">
            <input
               className="addText"
               onChange={(e) => setTitle(e.target.value)}
               type="text" placeholder="Name" />

            <input
               className="addText"
               ref={newRef}
               onChange={(e) => setDescription(e.target.value)}
               type="text" placeholder="commet" />
            <button
               ref={newRef.current}
               className="hover:border p-2 ro"
               onClick={handleAddDoc}>send</button>
         </div>

         <div className="mb-5 grid md:grid-cols-3 gap-2">
            {text.map((post) => (
               <div key={post.id} className="hover:bg-slate-700
                mt-[30px] p-10 ease-in-out transition-all shadow-[0_0_10px_white] rounded-lg">
                  <h2> <span className="text-3xl">Name:</span> {post.title}</h2>
                  <div><p>{`This is what ${post.title} says: ` }</p> {post.userPost} </div>
                  <div className="flex mt-5 items-center">

                     <button
                        onClick={() => handlDelete(post.id)}
                        className="rounded-lg hover:border p-1 hover:shadow-[0_0_10px_white] hover:animate-pulse ">Delete</button>

                  </div>
               </div>
            ))}
         </div>


      </div>
   )
}






import { useEffect, useRef, useState } from "react"
import { db } from "../../config/fireBase"
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'


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
         await addDoc(postCollection, {
            title: title,
            userPost: description
         })
      } catch (err) {
         console.error('err ', err);
      }
      getCollection()
   }


   return (
      <div className="text-slate-100 font-mono input-group flex-nowrap">
         <h1 className="text-5xl">FireStore</h1>

         <div className="add -ml-">
            <input
               className="addText"
               onChange={(e) => setTitle(e.target.value)}
               type="text" placeholder="Name" />

            <input
               className="addText"
               ref={newRef}
               onChange={(e) => setDescription(e.target.value)}
               type="text" placeholder="Description" />
            <button
               ref={newRef}
               className="hover:border p-2 ro"
               onClick={handleAddDoc}>send</button>
         </div>

         <div className="mb-5 grid md:grid-cols-3 gap-2">
            {text.map((post) => (
               <div key={post.id} className="hover:bg-slate-700 mt-[30px] p-10 ease-in-out transition-all shadow-[0_0_10px_white] rounded-lg">
                  <h2> <i className="text-3xl">Name:</i> {post.title}</h2>
                  <p><i>{`This is what ${post.title} says:`}</i> {post.userPost}</p>
                  <div className="flex mt-5">

                     <button
                        onClick={() => handlDelete(post.id)}
                        className="rounded-lg hover:border p-1">Delete</button>
                     <button className="hover:border p-1 rounded-lg">
                        Update</button>
                     <input type="text" placeholder="update what you said " className="update" />
                  </div>
               </div>
            ))}
         </div>


      </div>
   )
}






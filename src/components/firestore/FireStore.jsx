import { useEffect, useState } from "react"
import { db } from "../../config/fireBase"
import { collection, getDocs } from 'firebase/firestore'


export default function FireStore() {
   const [text, setText] = useState([])

   const postCollection = collection(db, 'post')

   useEffect(() => {
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
      getCollection()
   },)

   return (
      <div className="text-slate-100 font-mono">
         <h1 className="text-4xl">FireStore</h1>
         <div>
            {text.map((post) => (
               <div key={post.id}>
                  <h2> Description: {post.title}</h2>
                  <p>UserPost: {post.userPost}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

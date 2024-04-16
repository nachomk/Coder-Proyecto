import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import productos from './Mock/MockAsync.json'
import categorias from './Mock/Categorias.json'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

//console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);

export const db = getFirestore();


/*productos.productos.forEach((prod) => {
  addDoc(collection(db,'productos'), prod)
  .then((docRef) => {
    console.log('Doc agregado con id: ', docRef.id)
  })
  .catch((error) => {
    console.error('Error al agregar el doc', error)
  })
})*/

/*if (id) {

  const getProduct =query(collection(db, 'productos'), where('id', "==", parseInt(id)))
  
  getDocs(getProduct).then((snapshot)=> {
  
  if (snapshot.size ===0) {
  
  console.log('No hay categorias')
  
          }
  
  setProducts(snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data() })))
  
  setLoading(false)
  
        })
  
      }*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

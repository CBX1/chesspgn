import { initializeApp } from 'firebase/app';
import {doc, addDoc, getFirestore, collection, getDoc} from 'firebase/firestore/lite';
const config = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTHD ,
    projectId: process.env.VUE_APP_PID ,
    storageBucket: process.env.VUE_APP_SB ,
    messagingSenderId: process.env.VUE_APP_MSI ,
    appId: process.env.VUE_APP_AID,
    measurementId: process.env.VUE_APP_MI

}

const app  = initializeApp(config);
const db = getFirestore(app);

export const createPGN = async (pgn) => {
   const docR = await addDoc(collection(db, "cgame"), {
        pgn: pgn
    })
    return docR.id
}

 export const getPGN = async (pgn) => {
    const docRef = doc(db, "cgame", pgn);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data().pgn
      } else {
        console.log("No such document!");
        return "N/A"
    
      }
   
}

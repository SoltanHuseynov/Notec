import {initializeApp} from "firebase/app"
import {getStorage,getDownloadURL,ref} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDPBuOb-RcUjXF6EBTpGPs7SuDkVLvJNd8",
    authDomain: "notec-app.firebaseapp.com",
    projectId: "notec-app",
    storageBucket: "notec-app.appspot.com",
    messagingSenderId: "64638580426",
    appId: "1:64638580426:web:4f141e3dae63eba3bba633"
};
const getApp=initializeApp(firebaseConfig)
const storage=getStorage(getApp)
const starsRef = ref(storage, 'app/notec.exe');
export default function Download(){
    getDownloadURL(starsRef)
    .then(url=>{
        let createLink=document.createElement("a")
        createLink.href=url
        createLink.click()
    })
}
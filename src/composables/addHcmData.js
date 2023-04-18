import { 
    firebaseStore, 
    serverTimestamp, 
    collection, 
    doc, 
    addDoc, 
    getDoc
} from '../firebase/database';
import { firebaseAuth } from '../firebase/firebaseAuth';
import { collections } from '../firebase/constants'

export const addHcmData = async (data) => {  
    //adds timestamp to HCMjson
    data.timestamp = serverTimestamp();

    //adds user_id to HCMjson
    await firebaseAuth.onAuthStateChanged((user) => {
        if(user){
            data.created_by_user_id = user.uid;
        }
    });

    //adds json data to firestore collection
    const initialDoc = await addDoc(collection(firebaseStore, collections.hcm), data);
    console.log('Document was created with ID:', initialDoc.id)

    const docRef = await doc(firebaseStore, collections.hcm, initialDoc.id);
    
    //makes sure that the document exists
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
    // if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //     return true;
    // }else {
    //     console.log("No such document!");
    //     return false;
    // }
}

import { 
    firebaseStore, 
    serverTimestamp, 
    collection, 
    doc, 
    addDoc, 
    getDoc
} from '../firebase/database';

export const addHcmData = async (data) => {  
    //adds timestamp to HCMjson
    data.timestamp = serverTimestamp();
    
    //adds json data to firestore collection
    const initialDoc = await addDoc(collection(firebaseStore, 'hcm'), data);
    console.log('Document was created with ID:', initialDoc.id)

    const docRef = await doc(firebaseStore, 'hcm', initialDoc.id);
    
    //makes sure that the document exists
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return true;
    }else {
        console.log("No such document!");
        return false;
    }

    //can just return docSan.exists() after testing
}
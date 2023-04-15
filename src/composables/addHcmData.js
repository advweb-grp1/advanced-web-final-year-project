import { firebaseStore, collection, addDoc } from '../firebase/database';

export const addHcmData = async (data) => {  
    //adds json data to firestore collection
    const docRef = await addDoc(collection(firebaseStore, 'hcm'), data);
    console.log('Document was created with ID:', docRef.id)
    
    //returns true/false if doc was added
    return ( typeof docRef.id === 'undefined' || docRef.id === null );
}
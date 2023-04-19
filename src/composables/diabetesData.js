import { firebaseStore, collection, getDocs } from '../firebase/database';

export const getDiabetesData = async () => {
  const querySnapshot = await getDocs(collection(firebaseStore, 'hcm'));
  const total = querySnapshot.size;
  let withDiabetes = 0;
  querySnapshot.forEach((doc) => {
    if(doc.get('Diabetes') == '1'){
      withDiabetes++;
    }
  });

  return { total, withDiabetes };
};

import { firebaseStore, collection, getDocs } from '../firebase/database';

export const getMyectomyData = async () => {
  const querySnapshot = await getDocs(collection(firebaseStore, 'hcm'));
  const total = querySnapshot.size;
  let withMyectomy = 0;
  querySnapshot.forEach((doc) => {
    if(doc.get('Hypertension') == '1'){
      withMyectomy++;
    }
  });

  return { total, withMyectomy };
};

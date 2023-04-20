import { firebaseStore, collection, getDocs } from '../firebase/database';

export const getMyectomyData = async () => {
  const querySnapshot = await getDocs(collection(firebaseStore, 'hcm'));
  const total = querySnapshot.size;
  let withMyectomy = 0;
  querySnapshot.forEach((doc) => {
    if(doc.get('Myectomy') == '1'){ // counts the number of patients with myectomy
      withMyectomy++;
    }
  });

  return { total, withMyectomy };
};

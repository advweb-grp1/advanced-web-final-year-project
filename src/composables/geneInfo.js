export async function getGeneData(){
  const geneData = [];
  const ids= [4625, 4606, 7139, 70, 7168, 7134, 7137, 4625, 7273];
  for(let id of ids){
    fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=gene&id='
       +id+ '&retmode=xml').then(response => response.text())
      .then(data=>{
        geneData.push(data);
      }).catch(error => {
        console.log(error);
      });
  }
  return (geneData);
}


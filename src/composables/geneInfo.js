export const getGeneData = async() => {
  const geneData = [];
  const ids= [4625];
  const parser = new DOMParser();
  for(let id of ids){
    fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=gene&id='
       +id+ '&retmode=xml').then(response => response.text())
      .then(data=>{
        let xmlDoc = parser.parseFromString(data, 'text/xml');
        let desc = xmlDoc.getElementsByTagName('Gene-ref_desc')[0].childNodes[0].nodeValue;
        let summary = xmlDoc.getElementsByTagName('Entrezgene_summary')[0].childNodes[0].nodeValue;
        geneData.push({ desc, summary });
      }).catch(error => {
        console.log(error);
      });
  }
  return (geneData);
};


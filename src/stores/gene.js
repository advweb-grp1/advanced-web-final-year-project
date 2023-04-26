import { defineStore } from 'pinia';
export const useGeneStore = defineStore({
  id: 'geneStore',
  state: () =>({
    geneData: [],
    fetchedGene: false
  }),
  actions: {
    async fetchMutations(){
      if(this.fetchedGene){
        return;
      }
      const geneData = [];
      const promises = [];
      const ids= [4625, 4606, 7139, 70, 7168, 7134, 7137, 4625, 7273];
      const parser = new DOMParser();
      for(let id of ids){
        promises.push(fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=gene&id='
       +id+ '&retmode=xml').then(response => response.text())
          .then(data=>{
            let xmlDoc = parser.parseFromString(data, 'text/xml');
            let desc = xmlDoc.getElementsByTagName('Gene-ref_desc')[0].childNodes[0].nodeValue;
            let summary = xmlDoc.getElementsByTagName('Entrezgene_summary')[0].childNodes[0].nodeValue;
            geneData.push({ id, desc, summary });
          }).catch(error => {
            console.log(error);
          }));
      }
      await Promise.all(promises);
      this.geneData = geneData;
      this.fetchedGene = true;
      return (geneData);
    }
  }
});

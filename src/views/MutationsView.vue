<template>
  <div class="container">
    <h1>Gene Mutations</h1>
    <div class="row justify-content-center">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input
          id="MYH7"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="4625"
          autocomplete="off"
          selected
        >
        <label class="btn btn-outline-primary" for="MYH7">MYH7</label>
        <input
          id="MYBPC3"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="4606"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="MYBPC3">MYBPC3</label>

        <input
          id="TNNT2"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="7139"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TNNT2">TNNT2</label>
        <input
          id="ACTC"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="70"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="ACTC">ACTC</label>
        <input
          id="TPM1"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="7168"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TPM1">TPM1</label>
      </div>
      <!--SPLIT HERE-->
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input
          id="MYL2"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="4633"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="MYL2">MYL2</label>
        <input
          id="TNNC1"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="7134"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TNNC1">TNNC1</label>
        <input
          id="TNNI3"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="7137"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TNNI3">TNNI3</label>
        <input
          id="TTN"
          v-model="geneId"
          type="radio"
          class="btn-check"
          name="btnradio"
          value="7273"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TTN">TTN</label>
      </div>
      <div class="row">
        <button class="btn btn-primary btn-block mt-1" @click="getGeneFromCall">
          Get Information
        </button>
      </div>
    </div>


    <div v-if="dataReturned" class="card">
      <!--Title: This is info about ... -->
      <h5 class="card-header">
        {{ searchedGene.value.name }}
      </h5>

      <!--Description-->
      <div class="card-body">
        Description:
        <p class="card-text">
          {{ searchedGene.value.desc }}
        </p>

        <!--Summary-->

        Summary:
        <p class="card-text">
          {{ searchedGene.value.summary }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, computed } from 'vue';
  const parser = new DOMParser();

  const searchedGene = reactive({});
  const geneId = ref('');

  const dataReturned = computed(() => {
    return Object.keys(searchedGene).length !== 0;
  });

  const getGeneFromCall = async () => {
    if(geneId.value != ''){
      await fetch('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=gene&id='+
        geneId.value+
        '&retmode=xml')
        .then(response => response.text())
        .then(data => {
          let xmlDoc = parser.parseFromString(data, 'text/xml');
          let desc = xmlDoc.getElementsByTagName('Gene-ref_desc')[0].childNodes[0].nodeValue;
          let summary = xmlDoc.getElementsByTagName('Entrezgene_summary')[0].childNodes[0].nodeValue;
          let name = xmlDoc.getElementsByTagName('Gene-ref_locus')[0].childNodes[0].nodeValue;
          searchedGene.value = { desc, summary, name };
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
    //Can be utilized if the Store method is implemented properly
//   const getGeneFromStore = () => {
//     console.log(geneStore.fetchedGene);
//     if(geneStore.fetchedGene){
//         let allGenes = toRaw(geneStore.geneData);
//         let geneData = geneStore.geneData.find((element) => element.id == geneId.value);
//         searchedGene.value = geneData;
//         console.log(geneData.summary);
//     }
//   }
</script>

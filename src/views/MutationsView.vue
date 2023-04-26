<template>
  <h1>Mutations View</h1>

  <div class="container">
    <div class="row justify-content-center">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="4625"
                autocomplete="off"
                id="MYH7"
                selected
            >
            <label class="btn btn-outline-primary" for="MYH7">MYH7</label>
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="4606"
                autocomplete="off"
                id="MYBPC3"
            >
            <label class="btn btn-outline-primary" for="MYBPC3">MYBPC3</label>
            
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="7139"
                autocomplete="off"
                id="TNNT2"
            >
            <label class="btn btn-outline-primary" for="TNNT2">TNNT2</label>
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="70"
                autocomplete="off"
                id="ACTC"
            >
            <label class="btn btn-outline-primary" for="ACTC">ACTC</label>
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="7168"
                autocomplete="off"
                id="TPM1"
            >
            <label class="btn btn-outline-primary" for="TPM1">TPM1</label>
        </div>
        <!--SPLIT HERE-->
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="4633"
                autocomplete="off"
                id="MYL2"
            >
            <label class="btn btn-outline-primary" for="MYL2">MYL2</label>
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="7134"
                autocomplete="off"
                id="TNNC1"
            >
            <label class="btn btn-outline-primary" for="TNNC1">TNNC1</label>
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="7137"
                autocomplete="off"
                id="TNNI3"
            >
            <label class="btn btn-outline-primary" for="TNNI3">TNNI3</label>
            <input
                v-model="geneId"
                type="radio"
                class="btn-check"
                name="btnradio"
                value="7273"
                autocomplete="off"
                id="TTN"
            >
            <label class="btn btn-outline-primary" for="TTN">TTN</label>
        </div>
    </div>

    <div class="row">
      <button @click="getGeneFromCall" class="btn btn-primary btn-block mt-1">
        Get Gene Information
      </button>
    </div>

    <div class="row">
        <div v-if="dataReturned" class="card">
            <!--Title: This is info about ... -->
            <h5 class="card-header">
                This is information about the Gene Mutation you have selected above: {{ searchedGene.value.name }}
            </h5>

             <!--Description-->
            <div class="card-body">
                Gene Description: 
                <p class="card-text">
                    {{ searchedGene.value.desc }}
                </p>

                <!--Summary-->

                Gene Summary:
                <p class="card-text">
                    {{ searchedGene.value.summary }}
                </p>
            </div>

        </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, computed} from 'vue';
  const parser = new DOMParser();

  const searchedGene = reactive({});
  const geneId = ref('');

  const dataReturned = computed(() => {
      return Object.keys(searchedGene).length !== 0
  })

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
  }
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

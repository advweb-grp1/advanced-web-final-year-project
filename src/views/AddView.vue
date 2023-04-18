<template>
  <h2 class="text-center">
    Add Patient Data
  </h2>

  <div>
    <label for="formFileLg" class="form-label">Upload Patient Data File or Add Manually</label>
    <input
      id="uploadFile"
      class="form-control form-control-lg"
      type="file"
      accept=".csv"
      @change="parseFile()"
    >
  </div>
  <br>

  <form class="container form-group" @submit.prevent="addData">
    <div class="row">
      <div id="hr-data" class="col-12 mb-1 d-flex align-content-around flex-wrap">

        
        <div class="col-6">
          <label for="ledv">Left Ventricular End Diastolic Volume:</label>
          <input
            id="ledv"
            v-model="ledv"
            required
            type="number"
            placeholder="ledv"
            class="form-control"
          >
        </div>
        <div class="col-6">
          <label for="redv">Right Ventricular End Diastolic Volume: </label>
          <input
          id="redv"
          v-model="redv"
          required
          type="number"
          placeholder="redv"
          class="form-control"
          >
        </div>
        
        <div class="col-6">
          <label for="lesv">Left Ventricular End Systolic Volume: </label>
          <input
          id="lesv"
          v-model="lesv"
          required
          type="number"
          placeholder="lesv"
          class="form-control"
          >
        </div>

        <div class="col-6">
          <label for="resv">Right Ventricular End Systolic Volume: </label>
          <input
          id="resv"
          v-model="resv"
          required
          type="number"
          placeholder="resv"
          class="form-control"
          >
        </div>

        <div class="col-6">
          <label for="lvef">Left Ventricular Ejection Fraction: </label>
          <input
          id="lvef"
          v-model="lvef"
          required
          type="number"
          placeholder="lvef"
          class="form-control"
          >
        </div>

        <div class="col-6">
          <label for="rvef">Right Ventricular Ejection Fraction: </label>
          <input
          id="rvef"
          v-model="rvef"
          required
          type="number"
          placeholder="rvef"
          class="form-control"
          >
        </div>

        <div class="col-6">
          <label for="lvmass">Left Ventricular Mass: </label>
          <input
          id="lvmass"
          v-model="lvmass"
          required
          type="number"
          placeholder="lvmass"
          class="form-control"
          >
        </div>

        <div class="col-6">
          <label for="rvmass">Right Ventricular Mass:</label>
          <input
          id="rvmass"
          v-model="rvmass"
          required
          type="number"
          placeholder="rvmass"
          class="form-control"
          >
        </div>

        <div class="col-6">
          <label for="lsv">Left Systolic Volume: </label>
          <input
          id="lsv"
          v-model="lsv"
          required
          type="number"
          placeholder="lsv"
          class="form-control"
        >
        </div>

        <div class="col-6">
          <label for="rsv">Right Systolic Volume: </label>
          <input
            id="rsv"
            v-model="rsv"
            required
            type="number"
            placeholder="rsv"
            class="form-control"
          >
        </div>

        <div class="col-6">
          <label for="female">Gender:</label>
          <select
            id="female"
            v-model="female"
            class="form-select"
            name="female"
          >
            <option value="male">
              Male
            </option>
            <option value="female">
              Female
            </option>
          </select>
        </div>

        <div class="col-6">
          <label for="mri">Age at MRI: </label>
          <input
          id="mri"
          v-model="AgeatMRI"
          required
          type="number"
          placeholder="age"
          class="form-control mb-1"
          >
        </div>
      </div>

        <!--newnew-->
        <div class="col-12">
        <div class="row justify-content-center">
          <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="scar-btncheck" v-model = "scar" autocomplete="off">
            <label class="btn btn-outline-primary" for="scar-btncheck">Scarring</label>

            <input type="checkbox" class="btn-check" id="hcm-btncheck" v-model="ApicalHCM" autocomplete="off">
            <label class="btn btn-outline-primary" for="hcm-btncheck">Apical HCM</label>

            <input type="checkbox" class="btn-check" id="btncheck3" v-model="SuddenCardiacDeath" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck3">Sudden Cardiac Arrest</label>

          </div>
          <div class="btn-group mt-1" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="ht-btncheck" v-model="Hypertension" autocomplete="off">
            <label class="btn btn-outline-primary" for="ht-btncheck">Hypertension</label>

            <input type="checkbox" class="btn-check" id="d-btncheck" v-model="Diabetes" autocomplete="off">
            <label class="btn btn-outline-primary" for="d-btncheck">Diabetes</label>

            <input type="checkbox" class="btn-check" id="myectomy-btncheck" v-model="Myectomy" autocomplete="off">
            <label class="btn btn-outline-primary" for="myectomy-btncheck">Myectomy</label>
          </div>
        </div>
      </div>
    </div>
    <div class = "row justify-content-center">
          <div class="row">
            <h3 class="text-center">
              Gene Mutations
            </h3>
          </div>

          <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check text-right" id="myh7-btncheck" v-model = "MYH7" autocomplete="off">
            <label class="btn btn-outline-primary" for="myh7-btncheck">MYH7</label>
            <input type="checkbox" class="btn-check" id="mybpc3-btncheck" v-model = "MYBPC3mutation" autocomplete="off">
            <label class="btn btn-outline-primary" for="mybpc3-btncheck">MYBPC3</label>
            <input type="checkbox" class="btn-check" id="TNNT2mutation-btncheck" v-model = "TNNT2mutation" autocomplete="off">
            <label class="btn btn-outline-primary" for="TNNT2mutation-btncheck">TNNT2</label>
            <input type="checkbox" class="btn-check" id="ACTCmutation-btncheck" v-model = "ACTCmutation" autocomplete="off">
            <label class="btn btn-outline-primary" for="ACTCmutation-btncheck">ACTC</label>
            <input type="checkbox" class="btn-check" id="TPM1-btncheck" v-model = "TPM1" autocomplete="off">
            <label class="btn btn-outline-primary" for="TPM1-btncheck">TPM1</label>
          </div>
          <div class="btn-group mt-1" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="TNNCI-btncheck" v-model = "TNNCI" autocomplete="off">
            <label class="btn btn-outline-primary" for="TNNCI-btncheck">TNNCI</label>
            <input type="checkbox" class="btn-check" id="TNNI3-btncheck" v-model = "TNNI3" autocomplete="off">
            <label class="btn btn-outline-primary" for="TNNI3-btncheck">TNNI3</label>
            <input type="checkbox" class="btn-check" id="MYL2-btncheck" v-model = "MYL2" autocomplete="off">
            <label class="btn btn-outline-primary" for="MYL2-btncheck">MYL2</label>
            <input type="checkbox" class="btn-check" id="TTN-btncheck" v-model = "TTN" autocomplete="off">
            <label class="btn btn-outline-primary" for="TTN-btncheck">TTN</label>
          </div>

    </div>

    <div class="container text-center mt-2">
      <div class="row justify-content-md-center">
        <button class="col-md-10 btn btn-primary btn-block" type="submit" @click="addData">
          Submit
        </button>
      </div>
    </div>
  </form>

  <Modal>
    <template #title>Adding Data</template>
    <template #body>{{ modalBody }}</template>
  </Modal>
</template>

<script setup>
  import { ref } from 'vue';
  import Modal from '../components/Modal.vue'
  import { addHcmData } from '../composables/addHcmData';
  import { parseCsv } from '../utils/parsePatientData'

  let modalBody = ref('');
  //refs for inputs

  //heart-input
  const ledv = ref('');
  const redv = ref('');
  const lesv = ref('');
  const resv = ref('');
  const lvef = ref('');
  const rvef = ref('');
  const lvmass = ref('');
  const rvmass = ref('');
  const lsv = ref('');
  const rsv = ref('');
  const female = ref('');
  const AgeatMRI = ref('');
  //gene-input
  const scar = ref('');
  const ApicalHCM = ref('');
  const SuddenCardiacDeath = ref('');
  const Hypertension = ref('');
  const Diabetes = ref('');
  const Myectomy = ref('');
  const MYH7 = ref('');
  const MYBPC3mutation = ref('');
  const TNNT2mutation = ref('');
  const ACTCmutation = ref('');
  const TPM1 = ref('');
  const TNNCI = ref('');
  const TNNI3 = ref('');
  const MYL2 = ref('');
  const TTN = ref('');

  const numberInputs = [
    "ledv",
    "redv",
    "lesv",
    "resv",
    "lvef",
    "rvef",
    "lvmass",
    "rvmass",
    "lsv",
    "rsv",
    "AgeatMRI"
  ]

  const booleanInputs=[
    "female",
    "scar",
    "ApicalHCM",
    "SuddenCardiacDeath",
    "Hypertension",
    "Diabetes",
    "Myectomy",
    "MYH7",
    "MYBPC3mutation",
    "TNNT2mutation",
    "ACTCmutation",
    "TPM1",
    "TNNCI",
    "TNNI3",
    "MYL2",
    "TTN"
  ]
  

  const parseFile = async () => {
    let file = document.getElementById("uploadFile").files[0];

    const reader = new FileReader();
    reader.onload = async function (e) {
      const text = await e.target.result;
      let patientJson = await parseCsv(text);
      
      //Gets first patient row
      let patientData = Object.values(patientJson)[0];
      for (var key in patientData){
        //sets number input fields on page
        if(numberInputs.includes(key)){
          eval(key).value = patientData[key];
        }
        //sets checkboxes and gender dropdown
        else if(booleanInputs.includes(key)){
          if(key == "female"){
            female.value = (patientData[key] == "1") ? "female" : "male";
          }else{
            eval(key).value = (patientData[key] == "1") ? true : false
          }
        }
       }
    };
    reader.readAsText(file);
  }

  const addData = async () => {
    //generate JSON to add to Firestroe
    //call addHcmData
    //show success/faliure

    console.log(buildHcmJson());
    if(await addHcmData(buildHcmJson())){
      //modal saying 'successfully added'
      console.log('cool');
      modalBody.value = "Patient Data Was Successfully Added To The Database!";
    }else{
      //modal saying 'failure'
      console.log('bad');
      modalBody.value = "FAILED! Data Was NOT Added To The Database!";
    }
    document.getElementById("modalTrigger").click();
  };

  const buildHcmJson = () => {
    //uses ternary operators to change UI friendly input to database types
    //(true/false -> 1/0)

    const hcmJson ={
      ledv: ledv.value,
      redv: redv.value,
      lesv: lesv.value,
      resv: resv.value,
      lvef: lvef.value,
      rvef: rvef.value,
      lvmass: lvmass.value,
      rvmass: rvmass.value,
      lsv: lsv.value,
      rsv: rsv.value,
      female: (female.value == 'Female') ? "1" : "0",
      AgeatMRI: ageatmri.value,
      scar: (scar.value == true) ? "1" : "0",
      ApicalHCM: (ApicalHCM.value == true) ? "1" : "0",
      SuddenCardiacDeath: (SuddenCardiacDeath.value == true) ? "1" : "0",
      Hypertension: (Hypertension.value == true) ? "1" : "0",
      Diabetes: (Diabetes.value == true) ? "1" : "0",
      Myectomy: (Myectomy.value == true) ? "1" : "0",
      MYH7: (MYH7.value == true) ? "1" : "0",
      MYBPC3mutation: (MYBPC3mutation.value == true) ? "1" : "0",
      TNNT2mutation: (TNNT2mutation.value == true) ? "1" : "0",
      ACTCmutation: (ACTCmutation.value == true) ? "1" : "0",
      TPM1: (TPM1.value == true) ? "1" : "0",
      TNNCI: (TNNCI.value == true) ? "1" : "0",
      TNNI3: (TNNI3.value == true) ? "1" : "0",
      MYL2: (MYL2.value == true) ? "1" : "0",
      TTN: (TTN.value == true) ? "1" : "0"
    };

    return hcmJson;
  };

</script>

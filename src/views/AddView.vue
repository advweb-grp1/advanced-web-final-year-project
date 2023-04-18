<template>
  <h2 class="text-center">
    Add Patient Data
  </h2>

  <div>
    <label for="formFileLg" class="form-label">Upload Patient Data File or Add Manually</label>
    <input
      id="formFileLg"
      class="form-control form-control-lg"
      type="file"
      accept=".csv"
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
          <label for="gender">Gender:</label>
          <select
            id="gender"
            v-model="gender"
            class="form-select"
            name="gender"
          >
            <option selected value="male">
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
          v-model="age"
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

            <input type="checkbox" class="btn-check" id="hcm-btncheck" v-model="hcm" autocomplete="off">
            <label class="btn btn-outline-primary" for="hcm-btncheck">Apical HCM</label>

            <input type="checkbox" class="btn-check" id="btncheck3" v-model="scd" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck3">Sudden Cardiac Arrest</label>

          </div>
          <div class="btn-group mt-1" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="ht-btncheck" v-model="ht" autocomplete="off">
            <label class="btn btn-outline-primary" for="ht-btncheck">Hypertension</label>

            <input type="checkbox" class="btn-check" id="d-btncheck" v-model="diabetes" autocomplete="off">
            <label class="btn btn-outline-primary" for="d-btncheck">Diabetes</label>

            <input type="checkbox" class="btn-check" id="myectomy-btncheck" v-model="myectomy" autocomplete="off">
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
            <input type="checkbox" class="btn-check text-right" id="myh7-btncheck" v-model = "myh7" autocomplete="off">
            <label class="btn btn-outline-primary" for="myh7-btncheck">MYH7</label>
            <input type="checkbox" class="btn-check" id="mybpc3-btncheck" v-model = "mybpc3" autocomplete="off">
            <label class="btn btn-outline-primary" for="mybpc3-btncheck">MYBPC3</label>
            <input type="checkbox" class="btn-check" id="tnnt2-btncheck" v-model = "tnnt2" autocomplete="off">
            <label class="btn btn-outline-primary" for="tnnt2-btncheck">TNNT2</label>
            <input type="checkbox" class="btn-check" id="actc-btncheck" v-model = "actc" autocomplete="off">
            <label class="btn btn-outline-primary" for="actc-btncheck">ACTC</label>
            <input type="checkbox" class="btn-check" id="tpm1-btncheck" v-model = "tpm1" autocomplete="off">
            <label class="btn btn-outline-primary" for="tpm1-btncheck">TPM1</label>
          </div>
          <div class="btn-group mt-1" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="tnnci-btncheck" v-model = "tnnci" autocomplete="off">
            <label class="btn btn-outline-primary" for="tnnci-btncheck">TNNCI</label>
            <input type="checkbox" class="btn-check" id="tnni3-btncheck" v-model = "tnni3" autocomplete="off">
            <label class="btn btn-outline-primary" for="tnni3-btncheck">TNNI3</label>
            <input type="checkbox" class="btn-check" id="myl2-btncheck" v-model = "myl2" autocomplete="off">
            <label class="btn btn-outline-primary" for="myl2-btncheck">MYL2</label>
            <input type="checkbox" class="btn-check" id="tt-btncheck" v-model = "tt" autocomplete="off">
            <label class="btn btn-outline-primary" for="tt-btncheck">TT</label>
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
  const gender = ref('');
  const age = ref('');
  //gene-input
  const scar = ref('');
  const hcm = ref('');
  const scd = ref('');
  const ht = ref('');
  const diabetes = ref('');
  const myectomy = ref('');
  const myh7 = ref('');
  const mybpc3 = ref('');
  const tnnt2 = ref('');
  const actc = ref('');
  const tpm1 = ref('');
  const tnnci = ref('');
  const tnni3 = ref('');
  const myl2 = ref('');
  const tt = ref('');

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
      female: (gender.value == 'Female') ? "1" : "0",
      AgeatMRI: age.value,
      scar: (scar.value == true) ? "1" : "0",
      ApicalHCM: (hcm.value == true) ? "1" : "0",
      SuddenCardiacDeath: (scd.value == true) ? "1" : "0",
      Hypertension: (ht.value == true) ? "1" : "0",
      Diabetes: (diabetes.value == true) ? "1" : "0",
      Myectomy: (myectomy.value == true) ? "1" : "0",
      MYH7: (myh7.value == true) ? "1" : "0",
      MYBPC3mutation: (mybpc3.value == true) ? "1" : "0",
      TNNT2mutation: (tnnt2.value == true) ? "1" : "0",
      ACTCmutation: (actc.value == true) ? "1" : "0",
      TPM1: (tpm1.value == true) ? "1" : "0",
      TNNCI: (tnnci.value == true) ? "1" : "0",
      TNNI3: (tnni3.value == true) ? "1" : "0",
      MYL2: (myl2.value == true) ? "1" : "0",
      TT: (tt.value == true) ? "1" : "0"
    };

    return hcmJson;
  };

</script>

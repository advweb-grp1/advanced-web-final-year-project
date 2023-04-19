<template>
  <h2 class="text-center">
    Add Patient Data
  </h2>

  <div>
    <h2 for="formFileLg" class="form-label">
      Upload Patient Data File
    </h2>
    <input
      id="uploadFile"
      class="form-control form-control-lg"
      type="file"
      accept=".csv"
      @change="parseFile()"
    >
  </div>

  <div class="row justify-content-md-center mt-1">
    <button class="col-md-10 btn btn-primary btn-block" type="submit" @click="addUploadedFileToFirestore()">
      Add Uploaded File
    </button>
  </div>

  <h2 class="form-label mt-2">
    Add Manually
  </h2>
  <form @submit.prevent="addData">
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
            <div class="col-4">
              <input
                id="scar-btncheck"
                v-model="scar"
                type="checkbox"
                class="btn-check col-12"
                autocomplete="off"
              >
              <label class="btn btn-outline-primary col-12" for="scar-btncheck">Scarring</label>
            </div>
            <div class="col-4">
              <input
                id="hcm-btncheck"
                v-model="ApicalHCM"
                type="checkbox"
                class="btn-check col-12"
                autocomplete="off"
              >
              <label class="btn btn-outline-primary col-12" for="hcm-btncheck">Apical HCM</label>
            </div>
            <div class="col-4">
              <input
                id="btncheck3"
                v-model="SuddenCardiacDeath"
                type="checkbox"
                class="btn-check col-12"
                autocomplete="off"
              >
              <label class="btn btn-outline-primary col-12" for="btncheck3">Sudden Cardiac Arrest</label>
            </div>
          </div>
          <div class="btn-group mt-1" role="group" aria-label="Basic checkbox toggle button group">
            <div class="col-4">
              <input
                id="ht-btncheck"
                v-model="Hypertension"
                type="checkbox"
                class="btn-check col-12"
                autocomplete="off"
              >
              <label class="btn btn-outline-primary col-12" for="ht-btncheck">Hypertension</label>
            </div>
            <div class="col-4">
              <input
                id="d-btncheck"
                v-model="Diabetes"
                type="checkbox"
                class="btn-check col-12"
                autocomplete="off"
              >
              <label class="btn btn-outline-primary col-12" for="d-btncheck">Diabetes</label>
            </div>
            <div class="col-4">
              <input
                id="myectomy-btncheck"
                v-model="Myectomy"
                type="checkbox"
                class="btn-check col-12"
                autocomplete="off"
              >
              <label class="btn btn-outline-primary col-12" for="myectomy-btncheck">Myectomy</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="row">
        <h3 class="text-center">
          Gene Mutations
        </h3>
      </div>

      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input
          id="myh7-btncheck"
          v-model="MYH7"
          type="checkbox"
          class="btn-check text-right"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="myh7-btncheck">MYH7</label>
        <input
          id="mybpc3-btncheck"
          v-model="MYBPC3mutation"
          type="checkbox"
          class="btn-check"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="mybpc3-btncheck">MYBPC3</label>
        <input
          id="TNNT2mutation-btncheck"
          v-model="TNNT2mutation"
          type="checkbox"
          class="btn-check"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TNNT2mutation-btncheck">TNNT2</label>
        <input
          id="ACTCmutation-btncheck"
          v-model="ACTCmutation"
          type="checkbox"
          class="btn-check"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="ACTCmutation-btncheck">ACTC</label>
        <input
          id="TPM1-btncheck"
          v-model="TPM1"
          type="checkbox"
          class="btn-check"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TPM1-btncheck">TPM1</label>
      </div>
      <div class="btn-group mt-1" role="group" aria-label="Basic checkbox toggle button group">
        <input
          id="TNNCI-btncheck"
          v-model="TNNCI"
          type="checkbox"
          class="btn-check"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TNNCI-btncheck">TNNCI</label>
        <input
          id="TNNI3-btncheck"
          v-model="TNNI3"
          type="checkbox"
          class="btn-check"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TNNI3-btncheck">TNNI3</label>
        <input
          id="MYL2-btncheck"
          v-model="MYL2"
          type="checkbox"
          class="btn-check"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="MYL2-btncheck">MYL2</label>
        <input
          id="TTN-btncheck"
          v-model="TTN"
          type="checkbox"
          class="btn-check"
          autocomplete="off"
        >
        <label class="btn btn-outline-primary" for="TTN-btncheck">TTN</label>
      </div>
    </div>

    <div class="container text-center mt-2">
      <div class="row justify-content-md-center">
        <button class="col-md-10 btn btn-primary btn-block" type="submit" @click="addData">
          Submit Inputted Data
        </button>
      </div>
    </div>
  </form>

  <Modal>
    <template #title>
      Adding Data
    </template>
    <template #body>
      {{ modalBody }}
    </template>
  </Modal>
</template>

<script setup>
  import { ref } from 'vue';
  import Modal from '../components/ModalComponent.vue';
  import { addHcmData } from '../composables/addHcmData';
  import { parseCsv } from '../utils/parsePatientData';

  const modalBody = ref('');
  let uploadedPatientData = [];
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

  const addUploadedFileToFirestore = async () => {
    if(uploadedPatientData.length == 0){
      modalBody.value = 'Sorry! We Couldn\'t Find Any Valid Patient Data In The Uploaded File. '+
      'Please Make Sure You Upload A File Ending In \'.CSV\'';
      document.getElementById('modalTrigger').click();
    }else{
      await addHcmData(uploadedPatientData)
        .then((success) => {
          modalBody.value = (success) ?
            'Patient Data From Uploaded File Successfully Added To Database' :
            'FAILED! Data Was NOT Added To The Database!';

          document.getElementById('modalTrigger').click();
        });
    }
  };

  const parseFile = async () => {
    let file = document.getElementById('uploadFile').files[0];

    if(file.name.split('.').pop().includes('csv')){
      const reader = new FileReader();
      reader.onload = async function (e) {
        const text = await e.target.result;
        let patientJson = await parseCsv(text);

        //converts parsed Csv into array of objects
        let patientData = Object.values(patientJson);
        uploadedPatientData = patientData;
      };
      reader.readAsText(file);

    }else{
      modalBody.value = 'Sorry! Only Files Ending In \'.CSV\' Are Allowed!';
      document.getElementById('modalTrigger').click();
    }
  };

  const validInputs = () => {
    if(
      !ledv.value ||
      !redv.value ||
      !lesv.value ||
      !resv.value ||
      !lvef.value ||
      !rvef.value ||
      !lvmass.value ||
      !rvmass.value ||
      !lsv.value ||
      !rsv.value ||
      !female.value ||
      !AgeatMRI.value
    ){
      console.log(!redv.value);
      return false;
    }
    return true;
  };

  const addData = async () => {
    //generate JSON to add to Firestroe
    //call addHcmData
    //show success/faliure

    if(!validInputs()){
      modalBody.value = 'All Patient/Heart Information Need To Be Entered! (Data cannot be \'0\')';
      document.getElementById('modalTrigger').click();
      return;
    }
    if(await addHcmData(buildHcmJson())){
      modalBody.value = 'Patient Data Was Successfully Added To The Database!';
    }else{
      modalBody.value = 'FAILED! Data Was NOT Added To The Database!';
    }

    document.getElementById('modalTrigger').click();
  };

  const buildHcmJson = () => {
    //uses ternary operators to change UI friendly input to database types
    //(true/false -> 1/0)
    let patient = [];

    patient.push({
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
      female: (female.value == 'Female') ? '1' : '0',
      AgeatMRI: AgeatMRI.value,
      scar: (scar.value == true) ? '1' : '0',
      ApicalHCM: (ApicalHCM.value == true) ? '1' : '0',
      SuddenCardiacDeath: (SuddenCardiacDeath.value == true) ? '1' : '0',
      Hypertension: (Hypertension.value == true) ? '1' : '0',
      Diabetes: (Diabetes.value == true) ? '1' : '0',
      Myectomy: (Myectomy.value == true) ? '1' : '0',
      MYH7: (MYH7.value == true) ? '1' : '0',
      MYBPC3mutation: (MYBPC3mutation.value == true) ? '1' : '0',
      TNNT2mutation: (TNNT2mutation.value == true) ? '1' : '0',
      ACTCmutation: (ACTCmutation.value == true) ? '1' : '0',
      TPM1: (TPM1.value == true) ? '1' : '0',
      TNNCI: (TNNCI.value == true) ? '1' : '0',
      TNNI3: (TNNI3.value == true) ? '1' : '0',
      MYL2: (MYL2.value == true) ? '1' : '0',
      TTN: (TTN.value == true) ? '1' : '0'
    });

    return patient;
  };

</script>

<template>
  <h1>This is add data page.</h1>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="ledv">left ventricular end diastolic volume: </label>
        <input type="number" id="ledv" v-model="ledv" placeholder="ledv">
      </div>
      <div>
        <label for="redv">right ventricular end diastolic volume: </label>
        <input type="number" id="redv" v-model="redv" placeholder="redv">
      </div>
      <div>
        <label for="lesv">left ventricular end systolic volume: </label>
        <input type="number" id="lesv" v-model="lesv" placeholder="lesv">
      </div>
      <div>
        <label for="resv">right ventricular end systolic volume: </label>
        <input type="number" id="resv" v-model="resv" placeholder="resv">
      </div>
      <div>
        <label for="lvef">left ventricular ejection fraction: </label>
        <input type="number" id="lvef" v-model="lvef" placeholder="lvef">
      </div>
      <div>
        <label for="rvef">right ventricular ejection fraction: </label>
        <input type="number" id="rvef" v-model="rvef" placeholder="rvef">
      </div>
      <div>
        <label for="lvmass">left ventricular mass: </label>
        <input type="number" id="lvmass" v-model="lvmass" placeholder="lvmass">
      </div>
      <div>
        <label for="rvmass">right ventricular mass:</label>
        <input type="number" id="rvmass" v-model="rvmass" placeholder="rvmass">
      </div>
      <div>
        <label for="lsv">left systolic volume: </label>
        <input type="number" id="lsv" v-model="lsv" placeholder="lsv">
      </div>
      <div>
        <label for="rsv">right systolic volume: </label>
        <input type="number" id="rsv" v-model="rsv" placeholder="rsv">
      </div>
      <div>
        <label for="scar">scarring: </label>
        <input type="number" id="scar" v-model="scar" placeholder="scar">
      </div>
      <div>
        <label for="gender">gender:</label>
        <input type="text" id="gender" v-model="gender" placeholder="gender">
      </div>
      <div>
        <label for="mri">Age at MRi: </label>
        <input type="number" id="mrir" v-model="mri" placeholder="mri">
      </div>
      <div>
        <label for="hcm">Apical HCM: </label>
        <input type="number" id="hcm" v-model="hcm" placeholder="hcm">
      </div>
      <div>
        <label for="scd">Sudden cadiac death: </label>
        <input type="number" id="scd" v-model="scd" placeholder="scd">
      </div>
      <div>
        <label for="ht">Hypertension: </label>
        <input type="text" id="ht" v-model="ht" placeholder="ht">
      </div>
      <div>
        <label for="diabetes">Diabetes: </label>
        <input type="text" id="diabetes" v-model="diabetes" placeholder="diabetes">
      </div>
      <div>
        <label for="myectomy">Myectomy: </label>
        <input type="number" id="myectomy" v-model="myectomy" placeholder="myectomy">
      </div>
      <div>
        <label for="myh7">MYH7: </label>
        <input type="number" id="myh7" v-model="myh7" placeholder="myh7">
      </div>
      <div>
        <label for="mybpc3">MYBPC3: </label>
        <input type="number" id="mybpc3" v-model="mybpc3" placeholder="mybpc3">
      </div>
      <div>
        <label for="tnnt2">TNNT2: </label>
        <input type="number" id="tnnt2" v-model="tnnt2" placeholder="tnnt2">
      </div>
      <div>
        <label for="actc">ACTC: </label>
        <input type="number" id="actc" v-model="actc" placeholder="actc">
      </div>
      <div>
        <label for="tpm1">TPM1: </label>
        <input type="number" id="tpm1" v-model="tpm1" placeholder="tpm1">
      </div>
      <div>
        <label for="tnnci">TNNCI: </label>
        <input type="number" id="tnnci" v-model="tnnci" placeholder="">
      </div>
      <div>
        <label for="tnni3">TNNI3: </label>
        <input type="number" id="tnni3" v-model="tnni3" placeholder="tnni3">
      </div>
      <div>
        <label for="myl2">MYL2: </label>
        <input type="number" id="myl2" v-model="myl2" placeholder="myl2">
      </div>
      <div>
        <label for="tt">TT: </label>
        <input type="number" id="tt" v-model="tt" placeholder="tt">
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

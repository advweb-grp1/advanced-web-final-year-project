<template>
  <h2 class="text-center">
    Add Patient Data
  </h2>

  <div>
    <label for="formFileLg" class="form-label">Upload Patient Data File or Add Manually</label>
    <input id="formFileLg" class="form-control form-control-lg" type="file">
  </div>
  <br>

  <form class="container form-group" @submit.prevent="submitForm">
    <div class="row">
      <div id="hr-data" class="col-sm-7 d-flex align-content-around flex-wrap">
        <label for="ledv" class="form-label">Left Ventricular End Diastolic Volume:</label>
        <input
          id="ledv"
          v-model="ledv"
          required
          type="number"
          placeholder="ledv"
          class="form-control"
        >

        <label for="redv">Right Ventricular End Diastolic Volume: </label>
        <input
          id="redv"
          v-model="redv"
          required
          type="number"
          placeholder="redv"
          class="form-control"
        >

        <label for="lesv">Left Ventricular End Systolic Volume: </label>
        <input
          id="lesv"
          v-model="lesv"
          required
          type="number"
          placeholder="lesv"
          class="form-control"
        >

        <label for="resv">Right Ventricular End Systolic Volume: </label>
        <input
          id="resv"
          v-model="resv"
          required
          type="number"
          placeholder="resv"
          class="form-control"
        >

        <label for="lvef">Left Ventricular Ejection Fraction: </label>
        <input
          id="lvef"
          v-model="lvef"
          required
          type="number"
          placeholder="lvef"
          class="form-control"
        >

        <label for="rvef">Right Ventricular Ejection Fraction: </label>
        <input
          id="rvef"
          v-model="rvef"
          required
          type="number"
          placeholder="rvef"
          class="form-control"
        >

        <label for="lvmass">Left Ventricular Mass: </label>
        <input
          id="lvmass"
          v-model="lvmass"
          required
          type="number"
          placeholder="lvmass"
          class="form-control"
        >

        <label for="rvmass">Right Ventricular Mass:</label>
        <input
          id="rvmass"
          v-model="rvmass"
          required
          type="number"
          placeholder="rvmass"
          class="form-control"
        >

        <label for="lsv">Left Systolic Volume: </label>
        <input
          id="lsv"
          v-model="lsv"
          required
          type="number"
          placeholder="lsv"
          class="form-control"
        >

        <label for="rsv">Right Systolic Volume: </label>
        <input
          id="rsv"
          v-model="rsv"
          required
          type="number"
          placeholder="rsv"
          class="form-control"
        >

        <label for="gender">Gender:</label>
        <select id="gender" class="form-select" name="gender">
          <option selected value="male">
            Male
          </option>
          <option value="female">
            Female
          </option>
        </select>

        <label for="mri" class="form-label">Age at MRI: </label>
        <input
          id="mrir"
          v-model="mri"
          required
          type="number"
          placeholder="age"
          class="form-control mb-1"
        >
      </div>

      <div id="gene-data" class="col-sm-5 d-flex align-content-around flex-wrap">
        <!--Old Scarring
          <label for="scar">scarring: </label>
          <input
          id="scar"
          v-model="scar"
          type="checkbox"
          value="scar"
          >
        -->

        <div class="row justify-content-center">
          <h3 class="text-center">
            <u>Gene Mutation</u>
          </h3>

          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="scar">Scarring:</label>
            <div class="input-group-text">
              <input
                id="scar"
                v-model="scar"
                class="form-check-input col-sm-2 mt-0"
                type="checkbox"
                value="scar"
                aria-label="Checkbox for following text input"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="hcm">Apical HCM:</label>
            <div class="input-group-text">
              <input
                id="hcm"
                v-model="hcm"
                class="form-check-input col-sm-2 mt-0"
                type="checkbox"
                value="hcm"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="scd">Sudden Cardiac Arrest</label>
            <div class="input-group-text">
              <input
                id="scd"
                v-model="scd"
                class="form-check-input col-sm-2 mt-0"
                type="checkbox"
                value="scd"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="ht">Hypertension:</label>
            <div class="input-group-text">
              <input
                id="ht"
                v-model="ht"
                class="form-check-input col-sm-2 mt-0"
                type="checkbox"
                value="ht"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="diabetes">Diabetes:</label>
            <div class="input-group-text">
              <input
                id="diabetes"
                v-model="diabetes"
                class="form-check-input col-sm-2 mt-0"
                type="checkbox"
                value="diabetes"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="myectomy">Myectomy:</label>
            <div class="input-group-text">
              <input
                id="myectomy"
                v-model="myectomy"
                class="form-check-input col-sm-2 mt-0"
                type="checkbox"
                value="myectomy"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="myh7">MYH7:</label>
            <div class="input-group-text">
              <input
                id="myh7"
                v-model="myh7"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="myh7"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="mybpc3">MYBPC3:</label>
            <div class="input-group-text">
              <input
                id="mybpc3"
                v-model="mybpc3"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="mybpc3"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="tnnt2">TNNT2:</label>
            <div class="input-group-text">
              <input
                id="tnnt2"
                v-model="tnnt2"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="tnnt2"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="actc">ACTC:</label>
            <div class="input-group-text">
              <input
                id="actc"
                v-model="actc"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="actc"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="tpm1">TPM1:</label>
            <div class="input-group-text">
              <input
                id="tpm1"
                v-model="tpm1"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="tpm1"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="tnnci">TNNCI:</label>
            <div class="input-group-text">
              <input
                id="tnnci"
                v-model="tnnci"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="tnnci"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="tnni3">TNNI3:</label>
            <div class="input-group-text">
              <input
                id="tnni3"
                v-model="tnni3"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="tnni3"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="myl2">MYL2:</label>
            <div class="input-group-text">
              <input
                id="myl2"
                v-model="myl2"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="myl2"
              >
            </div>
          </div>
          <div class="input-group mb-2">
            <label class="input-group-text col-sm-9" for="tt">TT:</label>
            <div class="input-group-text">
              <input
                id="tt"
                v-model="tt"
                class="form-check-input mt-0 col-sm-2"
                type="checkbox"
                value="tt"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container text-center">
      <div class="row justify-content-md-center">
        <button class="col-md-10 btn btn-primary btn-block" type="submit">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>

</script>


export const collections = {
  hcm: import.meta.env.VITE_DEV ? 'hcm_dev' : 'hcm',
  user: import.meta.env.VITE_DEV ? 'users_dev' : 'user'
};

export const fields = [
  {
    docField:'ACTCmutation',
    display:'ACT'
  },
  {
    docField:'AgeatMRI',
    display: 'Age at MRI'
  },
  {
    docField:'ApicalHCM',
    display: 'Apical HCM'
  },
  {
    docField: 'Diabetes',
    display: 'Diabetes'
  },
  {
    docField:'Hypertension',
    display: 'Hypertension'
  },
  {
    docField:'MYBPC3mutation',
    display: 'MYBPC3'
  },
  {
    docField:'MYH7',
    display: 'MYH7'
  },
  {
    docField:'MYL2',
    display: 'MYL2'
  },
  {
    docField: 'Myectomy',
    display: 'Myectomy'
  },
  {
    docField: 'SuddenCardiacDeath',
    display: 'Sudden Cardiac Death'
  },
  {
    docField: 'TNNCI',
    display: 'TNNCI'
  },
  {
    docField: 'TNNI3',
    display: 'TNNI3'
  },
  {
    docField: 'TNNT2mutation',
    display: 'TNNT2'
  },
  {
    docField: 'TPM1',
    display: 'TPM1'
  },
  {
    docField: 'TTN',
    display: 'TTN'
  },
  {
    docField: 'female',
    display: 'Gender'
  },
  {
    docField: 'ledv',
    display: 'ledv'
  },
  {
    docField: 'lesv',
    display: 'lesv'
  },
  {
    docField: 'lsv',
    display: 'lsv'
  },
  {
    docField: 'lvef',
    display: 'lvef'
  },
  {
    docField: 'lvmass',
    display: 'lvmass'
  },
  {
    docField: 'redv',
    display: 'redv'
  },
  {
    docField: 'resv',
    display: 'resv'
  },
  {
    docField: 'rsv',
    display: 'rsv'
  },
  {
    docField: 'rvef',
    display: 'rvef'
  },
  {
    docField: 'rvmass',
    display: 'rvmass'
  },
  {
    docField: 'scar',
    display: 'scar'
  },
  {
    docField: 'Hospitalization',
    display: 'Hospitalization'
  },
  {
    docField: 'ReasonforHospitalization',
    display: 'Reason for Hospitalization'
  },
  {
    docField: 'HeartAttack',
    display: 'Heart Attack'
  },
  {
    docField: 'HeartAttackDate',
    display: 'Heart Attack Date'
  },
  {
    docField: 'Diabetes',
    display: 'Diabetes'
  }
];

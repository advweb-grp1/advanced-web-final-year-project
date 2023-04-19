import csvToJson from 'csvtojson';

export const parseCsv = async (file) => {
  const data = await csvToJson().fromString(file);
  return data;
};

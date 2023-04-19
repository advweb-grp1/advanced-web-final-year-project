
export const collections = {
  hcm: import.meta.env.DEV ? 'hcm_dev' : 'hcm',
  user: import.meta.env.DEV ? 'users_dev' : 'user'
};

import { ref, reactive } from 'vue';

//register user composable
export function useRegistration() {
  const user = ref({
    name: '',
    email: '',
    password: ''
  });

  const registrationError = ref(null);
  const isSubmitting = ref(false);

  async function register() {
    try {
      registrationError.value = null;
      isSubmitting.value = true;

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user.value)
      });

      const responseData = await response.json();

      // handle successful registration
      console.log(responseData);
    } catch (err) {
      registrationError.value = err.message;
    } finally {
      isSubmitting.value = false;
    }
  }

  return { user, registrationError, isSubmitting, register };
}



//dashboard composable
export function useDashboard() {
  const isLoading = ref(false);
  const dashboardData = ref(null);
  const dashboardError = ref(null);

  async function fetchDashboardData() {
    try {
      isLoading.value = true;
      dashboardError.value = null;

      const response = await fetch('/api/dashboard');

      const responseData = await response.json();

      dashboardData.value = responseData;
    } catch (err) {
      dashboardError.value = err.message;
    } finally {
      isLoading.value = false;
    }
  }

  return { isLoading, dashboardData, dashboardError, fetchDashboardData };
}

//log in user composable
export function useLogin() {
  const user = ref({
    email: '',
    password: ''
  });

  const loginError = ref(null);
  const isSubmitting = ref(false);

  async function login() {
    try {
      loginError.value = null;
      isSubmitting.value = true;

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user.value)
      });

      const responseData = await response.json();

      // handle successful login
      console.log(responseData);
    } catch (err) {
      loginError.value = err.message;
    } finally {
      isSubmitting.value = false;
    }
  }

  return { user, loginError, isSubmitting, login };
}

//delete data composable

export function useDeleteData() {
  const isLoading = ref(false);
  const deleteDataError = ref(null);

  async function deleteData(id) {
    try {
      isLoading.value = true;
      deleteDataError.value = null;

      const response = await fetch(`/api/data/${id}`, {
        method: 'DELETE'
      });

      // Handle the response here if needed
    } catch (err) {
      deleteDataError.value = err.message;
    } finally {
      isLoading.value = false;
    }
  }

  return { isLoading, deleteDataError, deleteData };
}

export default function useAddData() {
  const data = reactive([]);

  function addData(item) {
    data.push(item);
  }

  return { data, addData };
}

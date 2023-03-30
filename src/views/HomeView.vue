<!-- <script setup>
  import Navbar from './components/HelloWorld.vue'
</script> -->

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="container">
    <div class="topnav">
      <!-- <RouterLink to="/home"><i class="fa fa-fw fa-home"/>Home</RouterLink> -->
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <!-- <RouterLink to="/login"><i class="fa fa-fw fa-user"/>Login</RouterLink> -->
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </div>
    <header>
      <h1>Cardiomyopathy</h1>
    </header>
    <section>
      <h2>What is Cardiomyopathy?</h2>
      <p>Cardiomyopathy is a disease of the heart muscle that makes it harder for the heart
        to pump blood to the rest of the body. There are different types of cardiomyopathy,
        including dilated cardiomyopathy, hypertrophic cardiomyopathy, restrictive cardiomyopathy,
        and arrhythmogenic right ventricular cardiomyopathy.</p>
    </section>
    <section>
      <h2>Causes of Cardiomyopathy</h2>
      <p>The causes of cardiomyopathy vary depending on the type of cardiomyopathy.
        Some of the common causes include genetic factors, viral infections, high blood pressure, and alcohol abuse.</p>
    </section>
    <section>
      <h2>Symptoms of Cardiomyopathy</h2>
      <p>The symptoms of cardiomyopathy also vary depending on the type of cardiomyopathy.
        Common symptoms include shortness of breath, fatigue, chest pain, and irregular heartbeat.</p>
    </section>
    <section>
      <h2>Treatment of Cardiomyopathy</h2>
      <p>The treatment of cardiomyopathy depends on the type and severity of the disease.
        Treatment options include medication, lifestyle changes, implantable devices, and surgery.</p>
    </section>
    <section>
      <h2>Resources</h2>
      <ul class="cardio-sites">
        <li><a href="https://www.heart.org/en/health-topics/cardiomyopathy">
          American Heart Association - Cardiomyopathy</a></li>
        <li><a href="https://www.mayoclinic.org/diseases-conditions/cardiomyopathy/symptoms-causes/syc-20370709">
          Mayo Clinic - Cardiomyopathy</a></li>
      </ul>
    </section>
  </div>

</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  top: -3%;
  left: 50%;
}

h1, h2 {
  text-align: center;
}

.cardio-sites {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: #0077FF;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>

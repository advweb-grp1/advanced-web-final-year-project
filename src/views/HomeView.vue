<template>
  <section>
    <img src="../assets/cardiomyopathy.jpg" alt="cardiomyopathy" class="cmp"/>
    <p class="text">Photo: Cardiomyopathy by Cleveland Clinic via Google Images</p>
    <h2>What is Cardiomyopathy?</h2>
    <p>
      Cardiomyopathy is a disease of the heart muscle that makes it harder for the heart
      to pump blood to the rest of the body. There are different types of cardiomyopathy,
      including dilated cardiomyopathy, hypertrophic cardiomyopathy, restrictive cardiomyopathy,
      and arrhythmogenic right ventricular cardiomyopathy.
    </p>
  </section>
  <section>
    <p>
      Some of the common causes include genetic factors, viral infections, high blood pressure, and alcohol abuse.
    </p>
  </section>
  <section>
    <p>
      Common symptoms include shortness of breath, fatigue, chest pain, and irregular heartbeat.
    </p>
  </section>
  <section>
    <p>
      The treatment of cardiomyopathy depends on the type and severity of the disease.
      Treatment options include medication, lifestyle changes, implantable devices, and surgery.
    </p>
  </section>
  <section>
    <h2>Resources</h2>
    <ul class="cardio-sites">
      <li>
        <a href="https://www.heart.org/en/health-topics/cardiomyopathy">
          American Heart Association - Cardiomyopathy</a>
      </li>
      <li>
        <a href="https://www.mayoclinic.org/diseases-conditions/cardiomyopathy/symptoms-causes/syc-20370709">
          Mayo Clinic - Cardiomyopathy</a>
      </li>
    </ul>
    <div>
      <h5>Latest News/Journals</h5>
      <div class="row">
        <div v-for="card in cards" :key="card.id" class="col-sm-3">
          <div class="card">
            <h5 class="card-header">
              {{ card.title }}
            </h5>
            <div class="card-body">
              <p class="card-text">
                {{ card.description }}
              </p>
              <p class="card-text">
                {{ card.date }}
              </p>
              <a :href="card.link" class="btn btn-primary w-100" target="_blank">Open Article</a>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click="addCard">
        Show More
      </button>
    </div>
  </section>
</template>
<script setup>
  import { ref, reactive } from 'vue';
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const searchQuery = 'cardiomyopathy';
  const language = 'en';

  const cards = reactive([]);
  const nextCardId = ref(1);

  function addCard() {
    fetch('https://api.newscatcherapi.com/v2/search?q='+searchQuery+'&lang='+language+'&sort_by=rank', {
      headers: {
        'x-api-key': apiKey
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for (let i = 0; i < 4; i++) {
          const article = data.articles[nextCardId.value];
          cards.push({
            id: nextCardId.value,
            title: article.title,
            description: article.summary,
            date: article.published_date,
            link: article.link
          });
          nextCardId.value++;
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  addCard();
</script>
<style scoped>
.card {
  margin-bottom: 15px;
  max-height: 500px;
  position: relative;
}

.card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.card-body {
  max-height: 200px;
  overflow: hidden;
}

.card-header {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100px;
}

.card-body p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
p {
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cmp {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.text {
  text-align: center;
}
</style>

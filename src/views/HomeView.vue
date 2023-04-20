<template>
  <section>
    <h2>What is Cardiomyopathy?</h2>
    <p>
      Cardiomyopathy is a disease of the heart muscle that makes it harder for the heart
      to pump blood to the rest of the body. There are different types of cardiomyopathy,
      including dilated cardiomyopathy, hypertrophic cardiomyopathy, restrictive cardiomyopathy,
      and arrhythmogenic right ventricular cardiomyopathy.
    </p>
  </section>
  <section>
    <h2>Causes of Cardiomyopathy</h2>
    <p>
      The causes of cardiomyopathy vary depending on the type of cardiomyopathy.
      Some of the common causes include genetic factors, viral infections, high blood pressure, and alcohol abuse.
    </p>
  </section>
  <section>
    <h2>Symptoms of Cardiomyopathy</h2>
    <p>
      The symptoms of cardiomyopathy also vary depending on the type of cardiomyopathy.
      Common symptoms include shortness of breath, fatigue, chest pain, and irregular heartbeat.
    </p>
  </section>
  <section>
    <h2>Treatment of Cardiomyopathy</h2>
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
    <h5>Latests News/Journals </h5>
    <div>
      <div class="row">
        <div v-for="card in cards" :key="card.id" class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {{ card.title }}
              </h5>
              <p class="card-text">
                {{ card.description }}
              </p>
              <p class="card-text">
                {{ card.date }}
              </p>
              <a class="card-text" :href="card.link">
                {{ card.link }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click="addCard">
        Show News
      </button>
    </div>
  </section>
</template>
<script setup>
  import { ref, reactive } from 'vue';
  const apiKey = '3gAN3KvnuUCtSQHeYwk4q2GZQNzz04-DB4m5qBSoe5s';
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
            title: 'Title:'+ article.title +'',
            description: 'Description:'+ article.summary +'',
            date: 'Date:' + article.published_date +'',
            link: article.link
          });
          nextCardId.value++;
        }
      })
      .catch(error => {
        console.error(error);
      });
  }



</script>
<style>
.card{
  margin-bottom: 15px;
}

p{
  max-height: 300px;
  overflow: auto;
  text-overflow: ellipsis;
}
</style>

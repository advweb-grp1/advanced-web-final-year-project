<template>
  <div class="dashboard-container">
    <h1 class="dashboard-title">
      Cardiomyopathy Dashboard
    </h1>
    <div class="row mt-4 mb-3">
      <div class="col-md-3 mb-3">
        <div class="card computed-integer-card">
          <div class="card-body">
            <h4 class="computed-integer-label">
              Computed Integer 1
            </h4>
            <p class="computed-integer-value">
              ###
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card computed-integer-card">
          <div class="card-body">
            <h4 class="computed-integer-label">
              Computed Integer 2
            </h4>
            <p class="computed-integer-value">
              ###
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card computed-integer-card">
          <div class="card-body">
            <h4 class="computed-integer-label">
              Computed Integer 3
            </h4>
            <p class="computed-integer-value">
              ###
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card computed-integer-card">
          <div class="card-body">
            <h4 class="computed-integer-label">
              Computed Integer 4
            </h4>
            <p class="computed-integer-value">
              ###
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-header">
            Chart 1
          </div>
          <div class="card-body">
            <div id="chart1-placeholder" class="chart-container" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            Chart 2
          </div>
          <div class="card-body">
            <div id="chart2-placeholder" class="chart-container" />
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6 mb-3">
        <div class="card">
          <div class="card-header">
            Chart 3
          </div>
          <div class="card-body">
            <div id="chart3-placeholder" class="chart-container" />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            Chart 4
          </div>
          <div class="card-body">
            <div id="chart4-placeholder" class="chart-container" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  margin: 2rem;
}

.dashboard-title {
  margin-bottom: 2rem;
}

.chart-container {
  min-height: 300px;
}

.computed-integer-card {
  text-align: center;
}

.computed-integer-label {
  margin-bottom: 1rem;
}

.computed-integer-value {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>

<template>
  <div class="card">
    <div class="card-content">
      <div class="content">
        <div
          class="is-flex is-justify-content-space-evenly is-align-items-center has-text-centered is-gap-3 is-flex-wrap-wrap"
        >
          <div>
            <div class="is-uppercase gtamerica level is-size-3">Nv.</div>
            <div class="is-size-1 has-text-weight-bold">1</div>
          </div>
          <div class="is-flex is-flex-direction-column is-gap-3">
            <div class="is-flex is-gap-3 is-justify-content-center is-flex-wrap-wrap">
              <div class="is-flex is-gap-3">
                <div>
                  <img
                    src="../assets/images/icons/heart.png"
                    alt="icon image"
                    width="70"
                    height="70"
                  />
                </div>
                <div class="is-flex is-flex-direction-column is-gap-3">
                  <div>100/100</div>
                  <div>
                    <progress class="progress is-danger" value="100" max="100"></progress>
                  </div>
                </div>
              </div>
              <div class="is-flex is-gap-3">
                <div>
                  <img
                    src="../assets/images/icons/energy.png"
                    alt="icon image"
                    width="70"
                    height="70"
                  />
                </div>
                <div class="is-flex is-flex-direction-column is-gap-3">
                  <div>100/100</div>
                  <div>
                    <progress class="progress is-info" value="100" max="100"></progress>
                  </div>
                </div>
              </div>
              <div class="is-flex is-gap-3">
                <div>
                  <img
                    src="../assets/images/icons/stamina.png"
                    alt="icon image"
                    width="70"
                    height="70"
                  />
                </div>
                <div class="is-flex is-flex-direction-column is-gap-3">
                  <div>100/100</div>
                  <div>
                    <progress class="progress is-warning" value="100" max="100"></progress>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="progress-container">
                <progress class="progress is-success" value="50" max="100"></progress>
                <span class="progress-text is-uppercase">Exp: 5/10</span>
              </div>
            </div>
          </div>
          <div>
            <div class="is-uppercase gtamerica level is-size-3">Nv.</div>
            <div class="is-size-1 has-text-weight-bold next-level">2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.level {
  color: #637ea0;
}

.next-level {
  color: #082655;
}

.progress {
  width: 100%;
  height: 20px;
  margin-bottom: 0px !important;
  background-color: #1f1f1f !important;
}

.progress-container {
  position: relative;
  width: 100%;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  padding-left: 8px;
  font-size: 0.9rem;
  text-shadow: 1px 2px 1px rgb(0 0 0 / 80%);
}

.progress::-webkit-progress-bar {
  background-color: #1f1f1f;
}

.progress::-moz-progress-bar {
  background-color: #1f1f1f;
}
</style>

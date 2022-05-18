<template>
  <ion-card class="card">
    <ion-card-header>
      <ion-card-title>{{Name}}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{Cost}}
      {{MoreInfo}}
      {{Point}}
      <ion-button>
        해줄게요
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SelectCard',
  props: {
    Name: String,
    Cost: String,
    MoreInfo: String,
    Point:Number
  }
});
</script>

<style lang="css">
.card {
  border-radius: 15px;
  text-align: center;
  position:relative;
  transform: translateY(-50%);
  padding-bottom: 20px;
}
#container a {
  text-decoration: none;
}
</style>

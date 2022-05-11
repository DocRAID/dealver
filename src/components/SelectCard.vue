<template>
  <ion-card class="card">
    <ion-card-header>
      <ion-card-title>{{name}}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{cost}}
      {{moreInfo}}
      {{point}}
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
    name: String,
    cost: String,
    moreInfo: String,
    point:Number
  }
});
</script>

<style scoped>
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

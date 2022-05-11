<template>
  <ion-card>
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
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container a {
  text-decoration: none;
}
</style>

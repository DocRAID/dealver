<template>
  <ion-card id="card">
    <ion-card-header>
      <ion-card-title>{{Name}}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      드는 비용 : {{Cost}} <br>
      부탁 내용 : {{MoreInfo}} <br>
      Point : {{Point}} <br>
      <ion-button class="selection-button">
        해줄게요
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton,IonCard } from '@ionic/vue';
export default defineComponent({
  name: 'SelectCard',
  props: {
    Name: String,
    Cost: String,
    MoreInfo: String,
    Point:Number
  },
  components: { IonButton,IonCard }
});
</script>

<style lang="css">
#card {
  border-radius: 15px;
  text-align: center;
  position:relative;
  transform: translateY(-50%);
  padding-bottom: 20px;
}
ion-card-content .selection-button {
  width: 110px;
}
</style>

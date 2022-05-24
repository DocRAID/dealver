<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="space"/>
      <SelectCard Name="limdongju" Cost="한시간" MoreInfo="해줘요" v-bind:Point="42" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import SelectCard from '@/components/SelectCard.vue';

export default defineComponent({
  name: 'SelectPage',
  components: {  IonContent, IonPage, SelectCard },
  props: {
    Name: String,
    Cost: String,
    MoreInfo: String,
    Point:Number
  }
});
</script>
<style scoped>
  .space{
    height: 80px;
  }
</style>
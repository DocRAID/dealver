<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="space"/>
      <SelectCard Name="limdongju" Cost="한시간" MoreInfo="해줘요" v-bind:Point="42" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import SelectCard from '@/components/SelectCard.vue';

export default defineComponent({
  name: 'SelectPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, SelectCard },
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
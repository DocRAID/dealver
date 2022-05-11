<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <SelectCard name="limdongju" cost="한시간" moreInfo="해줘요" point="10" />
      <SelectCard name="limdongju" cost="한시간" moreInfo="해줘요" point="10" />
      <SelectCard name="limdongju" cost="한시간" moreInfo="해줘요" point="10" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import SelectCard from '@/components/SelectCard.vue';

export default defineComponent({
  name: 'SelectPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, SelectCard }
});
</script>

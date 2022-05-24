<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h1>test</h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'AcountPage',
  components: {  IonContent, IonPage },
});
</script>
<style scoped>

</style>
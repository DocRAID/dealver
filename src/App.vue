<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
// import { useBackButton } from '@ionic/vue';
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  // setup() {
  //   useBackButton(10, () => {
  //     console.log('Handler was called!');
  //   });
  // }
});
</script>
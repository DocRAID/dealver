<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
// import { defineComponent } from 'vue';
import { useBackButton, useIonRouter } from '@ionic/vue';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
export default{
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  setup(){
    const ionRouter = useIonRouter();
    useBackButton(-1, () => {
      //시간 주고 2초안에 다시 클릭하면 종료하는 코드 짜야 함.
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
  }
}
// export default defineComponent({
//   name: 'App',
//   components: {
//     IonApp,
//     IonRouterOutlet
//   },
// });
// ionic cap copy
// ionic cap build android
// ionic cap open android
</script>
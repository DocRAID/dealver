<template>
  <ion-app>
    <ion-router-outlet />
    <ion-alert
    :is-open="isOpenRef"
    header="정말로 앱을 종료하시겠습니까?"
    message=" '네'를 누르면 앱이 종료됩니다."
    css-class="my-custom-class"
    :buttons="buttons"
    @didDismiss="setOpen(false)"
    />  
  </ion-app>
</template>

<script lang="ts">
import { IonAlert, IonApp, IonRouterOutlet } from '@ionic/vue';
// import { defineComponent } from 'vue';
import { ref } from 'vue';
import { useBackButton } from '@ionic/vue';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
export default{
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonAlert,
  },
  setup(){
    useBackButton(10, () => {
      // 뒤로가기 물리버튼
      setOpen(true)
    });

    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    const buttons = [
      {
        text: '네',
        handler() {
          //네 라면 프로그램 종료
          App.exitApp();
        }
      },
      {
        text: '아니오',
        handler() {
          setOpen(false)
        }
      }
    ];
    
    return { buttons, isOpenRef, setOpen }
  }
}
// ionic cap copy
// ionic cap build android
// ionic cap open android
</script>
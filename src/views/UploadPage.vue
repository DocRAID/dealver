<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-card class="card">
        <ion-input value="01" readonly class="q-number"></ion-input>
          <ion-item>
            <ion-label position="floating">무엇을 도와드릴까요?</ion-label>
            <ion-input clear-input value=""></ion-input>
          </ion-item>

      </ion-card>
      <ion-card class="card">
          <!-- Readonly input -->
          <ion-input value="02" readonly class="q-number"></ion-input>
          
          <ion-item>
            <ion-label position="floating">이유는 무엇인가요?</ion-label>
            <ion-input clear-input value=""></ion-input>
          </ion-item>
      </ion-card>

      <ion-card class="card">
          <!-- Readonly input -->
          <ion-input value="03-1" readonly class="q-number"></ion-input>
          
          <ion-item>
            <ion-label position="floating">해야 할 일을 자세하게 적어주세요</ion-label>
            <ion-input clear-input value=""></ion-input>
          </ion-item>
      </ion-card>

      <ion-card class="card">
          <!-- Readonly input -->
          <ion-input value="03-2" readonly class="q-number"></ion-input>
          
          <ion-item>
            <ion-label position="floating">심부름 완료까지 걸리는 시간은?</ion-label>
            <ion-input clear-input value=""></ion-input>
          </ion-item>
      </ion-card>

      <ion-card class="card">
          <!-- Readonly input -->
          <ion-input value="03-3" readonly class="q-number"></ion-input>
          
          <ion-item>
            <ion-label position="floating">물품의 가격은 얼마인가요?</ion-label>
            <ion-input clear-input value="" placeholder="할일이라면 적지않아도 돼요"></ion-input>
          </ion-item>
      </ion-card>
      
      <ion-card class="card">
          <!-- Readonly input -->
          <ion-input value="04" readonly class="q-number"></ion-input>
          
          <ion-item>
            <ion-label position="floating">심부름 포인트는 얼마인가요?</ion-label>
            <ion-input clear-input value=""></ion-input>
          </ion-item>
      </ion-card>

        <section>
          <ion-button size="large" expand="block" @click="setOpen(true)">심부름 신청</ion-button>
        </section>
      <ion-alert
      :is-open="isOpenRef"
      header="확인해주세요!"
      message="정말 해당 부탁을 신청하시겠어요?"
      css-class="my-custom-class"
      :buttons="buttons"
      @didDismiss="setOpen(false)"
      />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonAlert,IonContent,IonPage,IonLabel, IonInput, IonItem, IonCard } from '@ionic/vue';
import { defineComponent,ref } from 'vue';

export default defineComponent({
  name: 'UploadPage',
  components: { IonAlert,IonContent,IonPage,IonLabel, IonInput, IonItem,IonCard },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    const buttons = [
      {
        text: '네',
        handler() {
          alert("올라감")
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
});
</script>
<style>
.q-number {
  font-weight: 700;
  font-size: 24px;
}

.card {
  padding: 10px 10px 20px 10px;
  border-radius: 15px;
  position:relative;
  margin-bottom: 20px;
}

</style>
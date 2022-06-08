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
            <ion-label position="floating">심부름 값은 얼마인가요?</ion-label>
            <ion-input clear-input value=""></ion-input>
          </ion-item>
      </ion-card>
      
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent,IonPage,IonLabel, IonInput, IonItem, IonCard } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UploadPage',
  components: { IonContent,IonPage,IonLabel, IonInput, IonItem,IonCard }
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
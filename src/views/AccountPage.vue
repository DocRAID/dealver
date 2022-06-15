<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="space"/>
      <div class="profile-to-mid">
        <img src="@/../public/assets/profile.png" alt="" class="profile" >
      </div>
      <ion-card class="profile-card">
        <ion-card-title>{ NickName }</ion-card-title>
        <h3>전화번호</h3>
        <h3>010 - 8061 - 5542</h3>
      </ion-card>
      <ion-card>
        <ion-item>
          <ion-label position="floating">이름 변경</ion-label>
            <ion-input clear-input value=""></ion-input>
          </ion-item>
          <ion-button>Submit</ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent,IonPage,IonCardTitle,IonCard,IonLabel,IonItem,IonButton} from '@ionic/vue';
// import { pin, walk, warning, wifi, wine } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountPage',
  components: { IonContent,IonPage,IonCardTitle,IonCard,IonLabel,IonItem,IonButton },
  setup() {
    return {   };
  }
});
</script>
<style>
.space {
  height: 60px;
}

.profile-card {
  text-align: center;
  padding: 70px 0px 10px 0px;
  /* color: yellow; */
}

.profile {
  border-radius: 25%;
  width: 100px;
  position:absolute;
  top: 10px;
  z-index: 1;
  margin: 0px auto;
}
.profile-to-mid{
  display: flex;
  justify-content: center;
}
</style>
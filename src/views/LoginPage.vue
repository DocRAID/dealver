<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-card id="container-card">
        <div id="style-head"/>
        <br>
        <ion-card-header>
          <ion-card-title>딜버에 오신것을 환영합니다!</ion-card-title>
        </ion-card-header>
        
        <ion-card-content>
          딜버에서 서로 도우며 생활해요
        </ion-card-content>
        <hr/>
        <!-- Todo! 버튼에 아이콘 넣기 -->
        <ion-button fill="outline">
          <img src="@/../public/assets/icon/google.png">
          구글로 로그인 하기
        </ion-button>
        <br>
        <ion-button fill="outline" id="kakaoBtn">
          <img src="@/../public/assets/icon/kakao.png">
          카카오로 로그인 하기
        </ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<style scoped>
#style-head{
  width: 100%;
  height: 60px;
  background-color: #78EFAD;
}
#container-card {
  border-radius: 15px;
  text-align: center;
  position: absolute;
  left: 10px;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  padding-bottom: 20px;
}
#container-card a {
  text-decoration: none;
}
ion-button {
  width: 200px;
  font-weight: 600;
  font-size: 14px;
}
#kakaoBtn {
  background-color: #F9E000;
  color: #3C1D1D; 
}
img {
  width: 20px;
  margin-left: -5px;
  margin-right: 10px;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

// import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'LoginPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>

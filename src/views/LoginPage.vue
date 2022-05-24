<template>
  <ion-page>
    <ion-content :fullscreen="true">
      
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
        <ion-button color="danger" href="/upload">
          <img src="@/../public/assets/icon/google.png">
          구글로 로그인 하기
        </ion-button>
        <br>
        <ion-button color="warning" href="/upload" class="kakaoBtn">
          <img src="@/../public/assets/icon/kakao.png">
          카카오로 로그인 하기
        </ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage,  IonContent,IonCard,IonCardContent,IonCardHeader,IonCardTitle } from '@ionic/vue';


  export default  defineComponent({
    name: 'LoginPage',
    components: {  IonContent, IonPage,IonCard,IonCardContent,IonCardHeader,IonCardTitle }
  });
</script>
<style lang="css">
#style-head{
  width: 100%;
  height: 60px;
  background-color: #60BD89;
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
ion-card ion-button {
  width: 240px;
  font-weight: 600;
  font-size: 14px;
}
.kakaoBtn {
  color: #3C1D1D; 
}
ion-button img {
  width: 20px;
  margin-left: -5px;
  margin-right: 10px;
}
</style>

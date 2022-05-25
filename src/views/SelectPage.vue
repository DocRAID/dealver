<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="space"/>
      <SelectCard 
      Name="limdongju" 
      Cost="한시간" 
      MoreInfo="해줘요" 
      v-bind:Point="42" />

      <SelectCard 
      Name="김동혁" 
      Cost="백마넌" 
      MoreInfo="사줘" 
      v-bind:Point="100" />

      <SelectCard 
      Name="동주"
      Cost="뷁"
      MoreInfo="해줘" 
      v-bind:Point="1" />
      
      <SelectCard 
      Name="limdongju" 
      Cost="한시간" 
      MoreInfo="해줘요" 
      v-bind:Point="42" />

      <SelectCard 
      Name="김동혁" 
      Cost="백마넌" 
      MoreInfo="사줘" 
      v-bind:Point="100" />

      <SelectCard 
      Name="동주"
      Cost="뷁"
      MoreInfo="해줘" 
      v-bind:Point="1" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import SelectCard from '@/components/SelectCard.vue';

export default defineComponent({
  name: 'SelectPage',
  components: {  IonContent, IonPage, SelectCard },
  props: {
    Name: String,
    Cost: String,
    MoreInfo: String,
    Point:Number
  },
  // item: [
  //   {
  //     id:1,
  //     Name:"testName",
  //     Cost:"한시간",
  //     MoreInfo:"설명적어요",
  //     Point:42
  //   },
  //   {
  //     id:2,
  //     Name:"testName",
  //     Cost:"한시간",
  //     MoreInfo:"설명적어요",
  //     Point:42
  //   },
  //   {
  //     id:3,
  //     Name:"testName",
  //     Cost:"한시간",
  //     MoreInfo:"설명적어요",
  //     Point:42
  //   }
  // ]
});
</script>
<style scoped>
  .space{
    height: 80px;
  }
</style>
<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/selection">
          <ion-icon :icon="apps" />
          <ion-label>Selection</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab2" href="/upload">
          <ion-icon :icon="duplicate" />
          <ion-label>Upload</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/acount">
          <ion-icon :icon="person" />
          <ion-label>Acount</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { apps, duplicate, person  } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      apps, 
      duplicate, 
      person,
    }
  }
});
</script>

import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ConnectState, CapacitorWifiConnect } from '@falconeta/capacitor-wifi-connect'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {
    setTimeout(() => {
      
      this.secureConnect()
    }, 2000);
  }

  async secureConnect() {
    let { value } = await CapacitorWifiConnect.checkPermission();
    if (value === 'prompt') {
      const data = await CapacitorWifiConnect.requestPermission();
      value = data.value;
    }
    if (value === 'granted') {
      const a = await CapacitorWifiConnect.secureConnect({ ssid: 'Gerardo Tovar 2.4G', saveNetwork: true, password: '0D270878289', isWep: false })
      console.log(a);
    } else {
      throw new Error('permission denied');
    }
  }
}

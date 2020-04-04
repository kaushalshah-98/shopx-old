import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fetch-smartphones',
  template: `
  <div class="list-product-style">
    <app-jumbotron [Heading]="'menu_item.smartphones'"></app-jumbotron>
    <div class="product-list-page">
        <app-filter-input (keyup)="onInputChanged($event.target.value)" (filter)="onFilter($event)">
        </app-filter-input>
      <app-spinner [loading]="dataLoading"></app-spinner>
        <app-list-products [productitems]="products"></app-list-products>
    </div>
  </div>
  `,
  styles: []
})
export class FetchSmartphonesComponent implements OnInit {
  productitems: any;
  @Output() filter: EventEmitter<string> = new EventEmitter();
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  products: any;
  constructor() { }

  ngOnInit() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.productitems = [
        {
          name: 'A8 Star',
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjs8jfctvy.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjcryf8xtw.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmmwcnqszhs.jpeg?q=70'
            }
          ],
          price: 40000,
          description:
            'Galaxy A8 Star features an ergonomic, near bezel-less design that minimizes distraction so you can comfortably keep watching over what’s on screen. Its 6.3inch Full HD+ Super AMOLED display provides immersive viewing experience. Double the advantage. Galaxy A8 Star features a sleek design and symmetrical side styling that grips well in the hand. And with its sleek, elegant design users can look good when used on the move with life’s daily adventures. Shoot sharp and bright day and night. Galaxy A8 Star comes with 16MP and 24MP camera sensors, allowing user to minimize noise reduction and take clear selfies even in the dark environments. Do the following when the device heats up: Disconnect the charger from the device and close any running apps. Wait for the device to cool down and then begin charging the device again. If the lower part of the device overheats, it could be because the connected USB cable is damaged. Replace the damaged USB cable with a new Samsung-approved one. When using a wireless charger, do not place foreign materials, such as metal objects, magnets, and magnetic stripe cards, between the device and the wireless charger.',
          details: {
            Camera: '24+16 MP Dual rear camera | 24 MP front camera',
            Display: '16.0 centimetres (6.3-inch) FHD+ Super AMOLED with 1080x2220 pixels',
            'Memory Storage AND SIM':
              '6GB RAM | 64GB storage expandable up to 400GB | Dual SIM with dual-standby (4G+4G)',
            'Operating System and Processor':
              'Android v8.0 operating system with 2.2GHz SDM660 Snapdragon Qualcomm octa core processor',
            Battery: '3700 mAH lithium ion battery',
            Warranty:
              '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
            'Included in box': 'Charger, Earphone'
          },
          general: {
            simtype: 'Dual Sim',
            dualsim: 'yes',
            simsize: 'Nano',
            Network: '4G',
            fingerptintsensor: 'yes'
          },
          performance: {
            chipset: 'Qualcomm Snapdragon 660',
            cpu: '2.2 GHz',
            gpu: 'Adreno 512',
            ram: '6 GB'
          },
          design: {
            weight: '166g',
            thickness: '7.7mm',
            height: '155.3mm',
            colors: 'black,white',
            build: 'glass'
          },
          display: {
            type: 'Super Amoled',
            apectratio: '19:5:9',
            notch: 'no',
            screentobodyratio: '89%',
            screensize: '6.4inch'
          },
          storage: {
            internal: '64 GB',
            otgsupport: 'yes',
            expandableupto: '512GB'
          },
          battery: {
            removable: 'no',
            quickcharging: 'yes',
            capacity: '3700 mAh'
          },
          camera: {
            features: 'face Detection, Geo tagging, Panorama, Touch-to-focus',
            front: '24 MP',
            rear: '24MP + 16MP',
            flash: 'yes',
            videorecording: '4K @30fps UHD'
          }
        },
        {
          name: 'Samsung A8 Star',
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjs8jfctvy.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjcryf8xtw.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmmwcnqszhs.jpeg?q=70'
            }
          ],
          price: 22000,
          description:
            'Galaxy A8 Star features an ergonomic, near bezel-less design that minimizes distraction so you can comfortably keep watching over what’s on screen. Its 6.3inch Full HD+ Super AMOLED display provides immersive viewing experience. Double the advantage. Galaxy A8 Star features a sleek design and symmetrical side styling that grips well in the hand. And with its sleek, elegant design users can look good when used on the move with life’s daily adventures. Shoot sharp and bright day and night. Galaxy A8 Star comes with 16MP and 24MP camera sensors, allowing user to minimize noise reduction and take clear selfies even in the dark environments. Do the following when the device heats up: Disconnect the charger from the device and close any running apps. Wait for the device to cool down and then begin charging the device again. If the lower part of the device overheats, it could be because the connected USB cable is damaged. Replace the damaged USB cable with a new Samsung-approved one. When using a wireless charger, do not place foreign materials, such as metal objects, magnets, and magnetic stripe cards, between the device and the wireless charger.',
          details: {
            Camera: '24+16 MP Dual rear camera | 24 MP front camera',
            Display: '16.0 centimetres (6.3-inch) FHD+ Super AMOLED with 1080x2220 pixels',
            'Memory Storage AND SIM':
              '6GB RAM | 64GB storage expandable up to 400GB | Dual SIM with dual-standby (4G+4G)',
            'Operating System and Processor':
              'Android v8.0 operating system with 2.2GHz SDM660 Snapdragon Qualcomm octa core processor',
            Battery: '3700 mAH lithium ion battery',
            Warranty:
              '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
            'Included in box': 'Charger, Earphone'
          },
          general: {
            simtype: 'Dual Sim',
            dualsim: 'yes',
            simsize: 'Nano',
            Network: '4G',
            fingerptintsensor: 'yes'
          },
          performance: {
            chipset: 'Qualcomm Snapdragon 660',
            cpu: '2.2 GHz',
            gpu: 'Adreno 512',
            ram: '6 GB'
          },
          design: {
            weight: '166g',
            thickness: '7.7mm',
            height: '155.3mm',
            colors: 'black,white',
            build: 'glass'
          },
          display: {
            type: 'Super Amoled',
            apectratio: '19:5:9',
            notch: 'no',
            screentobodyratio: '89%',
            screensize: '6.4inch'
          },
          storage: {
            internal: '64 GB',
            otgsupport: 'yes',
            expandableupto: '512GB'
          },
          battery: {
            removable: 'no',
            quickcharging: 'yes',
            capacity: '3700 mAh'
          },
          camera: {
            features: 'face Detection, Geo tagging, Panorama, Touch-to-focus',
            front: '24 MP',
            rear: '24MP + 16MP',
            flash: 'yes',
            videorecording: '4K @30fps UHD'
          }
        },
        {
          name: 'Samsung Galaxy A8 Star',
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjs8jfctvy.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjcryf8xtw.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmmwcnqszhs.jpeg?q=70'
            }
          ],
          price: 33000,
          description:
            'Galaxy A8 Star features an ergonomic, near bezel-less design that minimizes distraction so you can comfortably keep watching over what’s on screen. Its 6.3inch Full HD+ Super AMOLED display provides immersive viewing experience. Double the advantage. Galaxy A8 Star features a sleek design and symmetrical side styling that grips well in the hand. And with its sleek, elegant design users can look good when used on the move with life’s daily adventures. Shoot sharp and bright day and night. Galaxy A8 Star comes with 16MP and 24MP camera sensors, allowing user to minimize noise reduction and take clear selfies even in the dark environments. Do the following when the device heats up: Disconnect the charger from the device and close any running apps. Wait for the device to cool down and then begin charging the device again. If the lower part of the device overheats, it could be because the connected USB cable is damaged. Replace the damaged USB cable with a new Samsung-approved one. When using a wireless charger, do not place foreign materials, such as metal objects, magnets, and magnetic stripe cards, between the device and the wireless charger.',
          details: {
            Camera: '24+16 MP Dual rear camera | 24 MP front camera',
            Display: '16.0 centimetres (6.3-inch) FHD+ Super AMOLED with 1080x2220 pixels',
            'Memory Storage AND SIM':
              '6GB RAM | 64GB storage expandable up to 400GB | Dual SIM with dual-standby (4G+4G)',
            'Operating System and Processor':
              'Android v8.0 operating system with 2.2GHz SDM660 Snapdragon Qualcomm octa core processor',
            Battery: '3700 mAH lithium ion battery',
            Warranty:
              '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
            'Included in box': 'Charger, Earphone'
          },
          general: {
            simtype: 'Dual Sim',
            dualsim: 'yes',
            simsize: 'Nano',
            Network: '4G',
            fingerptintsensor: 'yes'
          },
          performance: {
            chipset: 'Qualcomm Snapdragon 660',
            cpu: '2.2 GHz',
            gpu: 'Adreno 512',
            ram: '6 GB'
          },
          design: {
            weight: '166g',
            thickness: '7.7mm',
            height: '155.3mm',
            colors: 'black,white',
            build: 'glass'
          },
          display: {
            type: 'Super Amoled',
            apectratio: '19:5:9',
            notch: 'no',
            screentobodyratio: '89%',
            screensize: '6.4inch'
          },
          storage: {
            internal: '64 GB',
            otgsupport: 'yes',
            expandableupto: '512GB'
          },
          battery: {
            removable: 'no',
            quickcharging: 'yes',
            capacity: '3700 mAh'
          },
          camera: {
            features: 'face Detection, Geo tagging, Panorama, Touch-to-focus',
            front: '24 MP',
            rear: '24MP + 16MP',
            flash: 'yes',
            videorecording: '4K @30fps UHD'
          }
        },
        {
          name: 'Samsung Galaxy A8 Star',
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjs8jfctvy.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjcryf8xtw.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmmwcnqszhs.jpeg?q=70'
            }
          ],
          price: 400,
          description:
            'Galaxy A8 Star features an ergonomic, near bezel-less design that minimizes distraction so you can comfortably keep watching over what’s on screen. Its 6.3inch Full HD+ Super AMOLED display provides immersive viewing experience. Double the advantage. Galaxy A8 Star features a sleek design and symmetrical side styling that grips well in the hand. And with its sleek, elegant design users can look good when used on the move with life’s daily adventures. Shoot sharp and bright day and night. Galaxy A8 Star comes with 16MP and 24MP camera sensors, allowing user to minimize noise reduction and take clear selfies even in the dark environments. Do the following when the device heats up: Disconnect the charger from the device and close any running apps. Wait for the device to cool down and then begin charging the device again. If the lower part of the device overheats, it could be because the connected USB cable is damaged. Replace the damaged USB cable with a new Samsung-approved one. When using a wireless charger, do not place foreign materials, such as metal objects, magnets, and magnetic stripe cards, between the device and the wireless charger.',
          details: {
            Camera: '24+16 MP Dual rear camera | 24 MP front camera',
            Display: '16.0 centimetres (6.3-inch) FHD+ Super AMOLED with 1080x2220 pixels',
            'Memory Storage AND SIM':
              '6GB RAM | 64GB storage expandable up to 400GB | Dual SIM with dual-standby (4G+4G)',
            'Operating System and Processor':
              'Android v8.0 operating system with 2.2GHz SDM660 Snapdragon Qualcomm octa core processor',
            Battery: '3700 mAH lithium ion battery',
            Warranty:
              '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
            'Included in box': 'Charger, Earphone'
          },
          general: {
            simtype: 'Dual Sim',
            dualsim: 'yes',
            simsize: 'Nano',
            Network: '4G',
            fingerptintsensor: 'yes'
          },
          performance: {
            chipset: 'Qualcomm Snapdragon 660',
            cpu: '2.2 GHz',
            gpu: 'Adreno 512',
            ram: '6 GB'
          },
          design: {
            weight: '166g',
            thickness: '7.7mm',
            height: '155.3mm',
            colors: 'black,white',
            build: 'glass'
          },
          display: {
            type: 'Super Amoled',
            apectratio: '19:5:9',
            notch: 'no',
            screentobodyratio: '89%',
            screensize: '6.4inch'
          },
          storage: {
            internal: '64 GB',
            otgsupport: 'yes',
            expandableupto: '512GB'
          },
          battery: {
            removable: 'no',
            quickcharging: 'yes',
            capacity: '3700 mAh'
          },
          camera: {
            features: 'face Detection, Geo tagging, Panorama, Touch-to-focus',
            front: '24 MP',
            rear: '24MP + 16MP',
            flash: 'yes',
            videorecording: '4K @30fps UHD'
          }
        },
        {
          name: 'Samsung Galaxy A8 Star',
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjs8jfctvy.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjcryf8xtw.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmmwcnqszhs.jpeg?q=70'
            }
          ],
          price: 400,
          description:
            'Galaxy A8 Star features an ergonomic, near bezel-less design that minimizes distraction so you can comfortably keep watching over what’s on screen. Its 6.3inch Full HD+ Super AMOLED display provides immersive viewing experience. Double the advantage. Galaxy A8 Star features a sleek design and symmetrical side styling that grips well in the hand. And with its sleek, elegant design users can look good when used on the move with life’s daily adventures. Shoot sharp and bright day and night. Galaxy A8 Star comes with 16MP and 24MP camera sensors, allowing user to minimize noise reduction and take clear selfies even in the dark environments. Do the following when the device heats up: Disconnect the charger from the device and close any running apps. Wait for the device to cool down and then begin charging the device again. If the lower part of the device overheats, it could be because the connected USB cable is damaged. Replace the damaged USB cable with a new Samsung-approved one. When using a wireless charger, do not place foreign materials, such as metal objects, magnets, and magnetic stripe cards, between the device and the wireless charger.',
          details: {
            Camera: '24+16 MP Dual rear camera | 24 MP front camera',
            Display: '16.0 centimetres (6.3-inch) FHD+ Super AMOLED with 1080x2220 pixels',
            'Memory Storage AND SIM':
              '6GB RAM | 64GB storage expandable up to 400GB | Dual SIM with dual-standby (4G+4G)',
            'Operating System and Processor':
              'Android v8.0 operating system with 2.2GHz SDM660 Snapdragon Qualcomm octa core processor',
            Battery: '3700 mAH lithium ion battery',
            Warranty:
              '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
            'Included in box': 'Charger, Earphone'
          },
          general: {
            simtype: 'Dual Sim',
            dualsim: 'yes',
            simsize: 'Nano',
            Network: '4G',
            fingerptintsensor: 'yes'
          },
          performance: {
            chipset: 'Qualcomm Snapdragon 660',
            cpu: '2.2 GHz',
            gpu: 'Adreno 512',
            ram: '6 GB'
          },
          design: {
            weight: '166g',
            thickness: '7.7mm',
            height: '155.3mm',
            colors: 'black,white',
            build: 'glass'
          },
          display: {
            type: 'Super Amoled',
            apectratio: '19:5:9',
            notch: 'no',
            screentobodyratio: '89%',
            screensize: '6.4inch'
          },
          storage: {
            internal: '64 GB',
            otgsupport: 'yes',
            expandableupto: '512GB'
          },
          battery: {
            removable: 'no',
            quickcharging: 'yes',
            capacity: '3700 mAh'
          },
          camera: {
            features: 'face Detection, Geo tagging, Panorama, Touch-to-focus',
            front: '24 MP',
            rear: '24MP + 16MP',
            flash: 'yes',
            videorecording: '4K @30fps UHD'
          }
        },
        {
          name: 'Samsung Galaxy A8 Star',
          image: [
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjs8jfctvy.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmjcryf8xtw.jpeg?q=70'
            },
            {
              imageurl:
                'https://rukminim1.flixcart.com/image/416/416/jlv70y80/mobile/v/2/v/samsung-galaxy-a8-star-sm-g885fzwgins-original-imaf8wmmwcnqszhs.jpeg?q=70'
            }
          ],
          price: 400,
          description:
            'Galaxy A8 Star features an ergonomic, near bezel-less design that minimizes distraction so you can comfortably keep watching over what’s on screen. Its 6.3inch Full HD+ Super AMOLED display provides immersive viewing experience. Double the advantage. Galaxy A8 Star features a sleek design and symmetrical side styling that grips well in the hand. And with its sleek, elegant design users can look good when used on the move with life’s daily adventures. Shoot sharp and bright day and night. Galaxy A8 Star comes with 16MP and 24MP camera sensors, allowing user to minimize noise reduction and take clear selfies even in the dark environments. Do the following when the device heats up: Disconnect the charger from the device and close any running apps. Wait for the device to cool down and then begin charging the device again. If the lower part of the device overheats, it could be because the connected USB cable is damaged. Replace the damaged USB cable with a new Samsung-approved one. When using a wireless charger, do not place foreign materials, such as metal objects, magnets, and magnetic stripe cards, between the device and the wireless charger.',
          details: {
            Camera: '24+16 MP Dual rear camera | 24 MP front camera',
            Display: '16.0 centimetres (6.3-inch) FHD+ Super AMOLED with 1080x2220 pixels',
            'Memory Storage AND SIM':
              '6GB RAM | 64GB storage expandable up to 400GB | Dual SIM with dual-standby (4G+4G)',
            'Operating System and Processor':
              'Android v8.0 operating system with 2.2GHz SDM660 Snapdragon Qualcomm octa core processor',
            Battery: '3700 mAH lithium ion battery',
            Warranty:
              '1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
            'Included in box': 'Charger, Earphone'
          },
          general: {
            simtype: 'Dual Sim',
            dualsim: 'yes',
            simsize: 'Nano',
            Network: '4G',
            fingerptintsensor: 'yes'
          },
          performance: {
            chipset: 'Qualcomm Snapdragon 660',
            cpu: '2.2 GHz',
            gpu: 'Adreno 512',
            ram: '6 GB'
          },
          design: {
            weight: '166g',
            thickness: '7.7mm',
            height: '155.3mm',
            colors: 'black,white',
            build: 'glass'
          },
          display: {
            type: 'Super Amoled',
            apectratio: '19:5:9',
            notch: 'no',
            screentobodyratio: '89%',
            screensize: '6.4inch'
          },
          storage: {
            internal: '64 GB',
            otgsupport: 'yes',
            expandableupto: '512GB'
          },
          battery: {
            removable: 'no',
            quickcharging: 'yes',
            capacity: '3700 mAh'
          },
          camera: {
            features: 'face Detection, Geo tagging, Panorama, Touch-to-focus',
            front: '24 MP',
            rear: '24MP + 16MP',
            flash: 'yes',
            videorecording: '4K @30fps UHD'
          }
        }
      ];
      this.products = this.productitems;
    }, 1000);
  }
  onFilter(event: any) {
    if (event === 'low') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (event === 'high') {
      this.products.sort((a, b) => b.price - a.price);
    } else {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  onInputChanged(input: string) {
    this.products = this.productitems.filter((items) => {
      return items.name.toLowerCase().includes(input.toLowerCase());
    });
  }
}

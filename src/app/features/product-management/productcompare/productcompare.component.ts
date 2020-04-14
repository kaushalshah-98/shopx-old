import { Component, EventEmitter, OnInit } from '@angular/core';
import { ComparisonServiceService } from '@services/comparsion-service/comparison-service.service';

@Component({
  selector: 'app-productcompare',
  templateUrl: './productcompare.component.html',
  styleUrls: ['./productcompare.component.scss']
})
export class ProductcompareComponent implements OnInit {
  list = [];
  general: any[];
  performance: any[];
  design: any[];
  display: any[];
  storage: any[];
  battery: any[];
  camera: any[];
  feature: any[];
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  dimmed = false;
  columnsToDisplay1 = ['name', 'simtype', 'dualsim', 'simsize', 'Network', 'fingerptintsensor'];
  columnsToDisplay2 = ['name', 'type', 'apectratio', 'notch', 'screentobodyratio', 'screensize'];
  columnsToDisplay3 = ['name', 'weight', 'thickness', 'height', 'colors', 'build'];
  columnsToDisplay4 = ['name', 'removable', 'quickcharging', 'capacity'];
  columnsToDisplay5 = ['name', 'chipset', 'cpu', 'gpu', 'ram'];
  columnsToDisplay6 = ['name', 'internal', 'otgsupport', 'expandableupto'];
  columnsToDisplay7 = ['name', 'features', 'front', 'rear', 'flash', 'videorecording'];

  constructor(private compare: ComparisonServiceService) {}
  ngOnInit() {
    this.list = this.compare.comparelist;
    this.general = this.compare.general;
    this.display = this.compare.display;
    this.battery = this.compare.battery;
    this.storage = this.compare.storage;
    this.performance = this.compare.performance;
    this.design = this.compare.design;
    this.camera = this.compare.camera;
  }
  remove(item) {
    if (this.list.length < 3) {
      console.log('could not delete');
    } else {
      this.dimmed = true;
      this.dataLoading.emit(true);
      setTimeout(() => {
        this.dataLoading.emit(false);
        this.dimmed = false;
        this.compare.comparelist = this.compare.comparelist.filter(
          (mobile) => !(mobile.name === item.name)
        );
        this.list = this.compare.comparelist;
        this.compare.display = this.compare.display.filter(
          (product) => !(product.name === item.name)
        );
        this.display = this.compare.display;
        this.compare.battery = this.compare.battery.filter(
          (product) => !(product.name === item.name)
        );
        this.battery = this.compare.battery;
        this.compare.storage = this.compare.storage.filter(
          (product) => !(product.name === item.name)
        );
        this.storage = this.compare.storage;
        this.compare.design = this.compare.design.filter(
          (product) => !(product.name === item.name)
        );
        this.design = this.compare.design;
        this.compare.performance = this.compare.performance.filter(
          (product) => !(product.name === item.name)
        );
        this.performance = this.compare.performance;
        this.compare.general = this.compare.general.filter(
          (product) => !(product.name === item.name)
        );
        this.general = this.compare.general;
        this.compare.camera = this.compare.camera.filter(
          (product) => !(product.name === item.name)
        );
        this.camera = this.compare.camera;
      }, 2000);
    }
  }
  // setcolums(index) {
  //   switch (index) {
  //     case 0: this.columnsToDisplay = ['name', 'simtype', 'dualsim', 'simsize', 'Network', 'fingerptintsensor'];
  //     case 1: this.columnsToDisplay = ['name', 'type', 'apectratio', 'notch', 'screentobodyratio', 'screensize'];
  //     case 2: this.columnsToDisplay = ['name', 'weight', 'thickness', 'height', 'colors', 'build'];
  //     case 3: this.columnsToDisplay = ['name', 'removable', 'quickcharging', 'capacity'];
  //     case 4: this.columnsToDisplay = ['name', 'chipset', 'cpu', 'gpu', 'ram'];
  //     case 5: this.columnsToDisplay = ['name', 'internal', 'otgsupport', 'expandableupto'];
  //     case 6: this.columnsToDisplay = ['name', 'features', 'front', 'rear', 'flash', 'videorecording']
  //   }
  // }
  // getName(index) {
  //   switch (index) {
  //     case 0: return 'General'
  //     case 1: return 'Display'
  //     case 2: return 'Design'
  //     case 3: return 'Battery'
  //     case 4: return 'Performance'
  //     case 5: return 'Storage'
  //     case 6: return 'Camera'
  //   }
  // }
}

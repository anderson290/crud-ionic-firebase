import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.component.html',
  styleUrls: ['./leitor.component.scss'],
})
export class LeitorComponent implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }
  qrData = null;
  createdCode = null;
  scannedCode = null;
  ngOnInit() {}
  createCode(){
    this.createdCode = this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;
    })
  }
}

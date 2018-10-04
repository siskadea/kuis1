import { Component, OnInit } from '@angular/core';
import { Mhs } from '../shared/mhs';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})
export class MahasiswaComponent implements OnInit {

  daftarMhs:Mhs[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mhs;
  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs = new Mhs(this.nim, this.nama, this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }
}


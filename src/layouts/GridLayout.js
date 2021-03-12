import React from 'react';
import Card from '../components/Card/Card';
import apta from '../assets/img/apta.png';
import aufa from '../assets/img/aufa.png';
import ave from '../assets/img/ave.png';
import ivan from '../assets/img/ivan.png';
import pat from '../assets/img/pat.png';
import rofif from '../assets/img/rofif.png';

function GridLayout (){
  return (
    <div className='container-sm'>
      <div className='row justify-content-center' >
        <div className='col-md-4' >
          <Card 
          pics={ivan} 
          name='Christopher Ivan Gunardi' 
          date='3 Maret 2021' 
          target='#ivan'
          id='ivan'
          details='1. Alasan masuk ARC
          Waktu SMA udah belajar ngoding dikit, ketemu pengkom ngoding
          lagi, bantu project web temen, kemudian danger ARC diajarin
          webdev
          
          2. Kaderisasi ARC
          Yang penting kerjain tugasnya dulu. Gapapa kalau belum begitu
          paham, sambil googling aja.
          
          3. Kegiatan rutin ARC
          Ngulik berbagai hal, ambil project dari inkubator HMIF
          
          4. Kenapa masuk jurusan yang sekarang ini?
          Karena peminatan :)
          
          5. Apakah semester 3 lebih berat dari semester 2?
          Tidak juga. Tapi secara umum semester genap lebih berat
          
          6. ET ngapain aja?
          Campuran elektro dan informatika tapi banyak sinyalnya
          
          7. Ngobrol tentang seleksi terbaru ITB
          
          8. Feedback tugas?
          Mohon maaf tapi hanya Kak Ivan dan kelompok kami yang tau'
          />
        </div>
        <div className='col-md-4' >
          <Card pics={aufa} name='Aufa Fauqi Ardhiqi' date='3 Maret 2021' />
        </div>
        <div class="w-100"></div>
        <div className='col-md-4' >
          <Card pics={apta} name='Apta Adyatma' date='3 Maret 2021' />
        </div>
        <div className='col-md-4' >
          <Card pics={ave} name='Averrous Saloom' date='3 Maret 2021' />
        </div>
        <div class="w-100"></div>
        <div className='col-md-4' >
          <Card pics={rofif} name='Rofif Fairuz Hawary' date='3 Maret 2021' />
        </div>
        <div className='col-md-4' >
          <Card pics={pat} name='Patrick Amadeus Irawan' date='3 Maret 2021' />
        </div>
      </div>
    </div>
  )
}

export default GridLayout;
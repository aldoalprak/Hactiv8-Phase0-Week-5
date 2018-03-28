/*
================
Class Mastery
================

Name Here :_______

Buatlah sebuah class Tower yang menerima parameter awal di constructor berupa name (string) dan numberOfFloor (number).
Fox memiliki property/atrribute yaitu name, numberOfFloors, dan companies, yang merupakan array kosong yang nantinya akan
diisi string yang merupakan nama-nama perusahaan yang menyewa di tower tersebut.

Setiap tower memiliki beberapa method/function sebagai berikut:

getTowerSummary(): function yang me-return string berikut: 'Name: <NAME> | Number of Floors: <numberOfFloors> | Companies: <Company>, <Company>, <Company>'.
Tampilkan 'empty' jika tidak ada office sama sekali.
setTowerName(newTowerName): function yang menerima parameter berupa string. Function ini akan mengubah attribute name menjadi sesuai dengan parameter.
registerOffice(officeName): function yang menerima parameter berupa string. Function ini akan menambahkan satu officeName ke dalam array companies.

*/
/*
1.pertama kita bikin dulu untuk menghubungkan perameter dengan attributenya
2.kita bisa function pada office dan New tower
3. pada office kita set push, agar bisa masuk beberapa office
4.pada new tower, untuk membuat nama tower baru
5. dan terakhir di fucntion getsummary , untuk menampilkan semua class tower yang sudah kita buat
*/
class tower {
  constructor(name,numberOfFloor) {
    this.name = name;
    this.Nof = numberOfFloors;
    this.office
  }
}

console.log(pondokIndahOfficeTower.getTowerSummary());
// 'Name: Pondok Indah Office Tower | Number of Floors: 50 | Companies: empty
console.log('====================')
pondokIndahOfficeTower.registerOffice('PT. Keren Banget');
pondokIndahOfficeTower.registerOffice('PT. OKE Jaya');

console.log(pondokIndahOfficeTower.getTowerSummary());
// 'Name: Pondok Indah Office Tower | Number of Floors: 50 | Companies: PT. Keren Banget, PT. OKE Jaya
console.log('====================')
pondokIndahOfficeTower.setTowerName('Pondok Indah NEW Tower');
// 'Name: Pondok Indah NEW Tower | Number of Floors: 50 | Companies: PT. Keren Banget, PT. OKE Jaya

/* 
======================================
Array Mastery: The Most Frequent Item
======================================
Nama:________
[INSTRUKSI]
Function mostFrequentItem adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah item di dalam array tersebut.
Function akan mereturn nilai berupa string dengan pola:
=> nama barang(3), nama barang kedua(5), nama barang ketiga(10).
Kemudian, setiap barang yang ditampilkan harus berurut jumlahnya dari yang terkecil ke terbesar.
[CONTOH]
input: ['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus']));
output: 'samsung(1), iphone(2) , asus(4)'


*/

function mostFrequentItem(arr){
	// Code hanya disini
	var kataUnik=[];
	kataUnik.push([arr[0]]);
	
	//unqiue value
	for(var i=0;i<arr.length;i++) {
	  var store=1;
	  for(var j=0;j<kataUnik.length;j++) {
	    if(arr[i]!==kataUnik[j][0]){
	      store*=1;
	    }else{
	      store*=0;
	    }
	  }
	  if(store===1) {
	    kataUnik.push([arr[i]])
	  }
	}
	
	//jumlah tiap item
	var angkaUnik=[];
	for(var k=0;k<kataUnik.length;k++) {
	  var count=0;
	  for(var m=0;m<arr.length;m++) {
	    if(kataUnik[k][0]===arr[m]){
	      count+=1
	    }
	  }
	  kataUnik[k].push(count);
	}
	
	//Sort
	var simpan=0;
	for(var n=0;n<kataUnik.length;n++) {
	  for(var p=n+1;p<kataUnik.length;p++) {
	    if(kataUnik[p][1]<kataUnik[n][1]){
	      simpan=kataUnik[p];
	      kataUnik[p]=kataUnik[n];
	      kataUnik[n]=simpan
	    }
	  }
	}
	
	//gabung huruf dan angkaUnik
	var output=[];
	for(var q=0;q<kataUnik.length;q++) {
	  output.push(kataUnik[q][0]+'('+kataUnik[q][1]+')');
	}
	
	
	return output.join();
	
}

console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus'])); // 'samsung(1), iphone(2) , asus(4)'
console.log(mostFrequentItem(['9', 'b', 'b', 'c', '9', '9', 'b', '9', '2', '2'])); // 'c(1) , 2(2) ,b(3) ,9(4)'
console.log(mostFrequentItem(['book', 'laptop', 'iPod'])); // 'book(1), laptop(1), iPod(1)'
function jumlahVolumeDuaKubus(a, b){
    var volumeA;
    var volumeB;
    var total;


    volumeA = a * a * a;
    volumeB = b * b * b;


    total = volumeA + volumeB;
    
    return total;
}

// function yang jauh lebih efisien

// function jumlahVolumeDuaKubus(a, b){            
//     return a * a * a + b * b * b;
// }


alert(jumlahVolumeDuaKubus(8, 3));
alert(jumlahVolumeDuaKubus(8, 4));
alert(jumlahVolumeDuaKubus(8, 5));
alert(jumlahVolumeDuaKubus(8, 6));
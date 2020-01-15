var name = ["john", "JACOB", "jinGleHeimer", "schmidt"];

// jangan var w, lebih deskriptif lagi 
//  indentasi masih jelek

var w = name.map(
    w => w.substr(0,1).toUpperCase()+w.substr(1).toLowerCase()
    );

console.log(w);

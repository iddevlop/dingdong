/*
    Build by Suryo DwiJayanto
    Do not remove or clone this
*/
const checkAPI=firebase.database().ref("game/dingdong/"+myhost);checkAPI.on("value",e=>{let a=e.val();window.location.hostname==a||fetch(xhvsips).then(e=>e.json()).then(e=>{let n=e.ip;fetch(xhvsipss+n).then(e=>e.json()).then(e=>{let t=e.countryCode,o=e.countryName,i=e.regionName,r=e.cityName,d=e.zipCode,c=e.latitude,l=e.longitude,s=e.timeZone,g=firebase.database().ref("game/dingdong/warning").push().key,m=window.location.hostname;firebaseConfig&&(firebase.database().ref("game/dingdong/warning").push().set({ipAddress:n,countryCode:t,countryName:o,regionName:i,cityName:r,zipCode:d,latitude:c,longitude:l,timeZone:s,uniq:g,host:m,date:xupdhvs}),alert("Waduh ada yang maling kode orang sepertinya! klik ok untuk pergi ke situs resminya."),window.location.href="https://"+a+"/dingdong")}).catch(e=>{console.error("Error fetching IP address:",e)})}).catch(e=>{console.error("Error fetching IP address:",e)})});const checkCSS=firebase.database().ref("game/dingdong/css");checkCSS.on("value",e=>{let a=e.val();if(a){let n=document.createElement("style");n.textContent=a,document.head.appendChild(n)}});const xmain=document.getElementById("main"),checkMain=firebase.database().ref("game/dingdong/html");checkMain.on("value",e=>{let a=e.val();a&&(xmain.innerHTML=a)});const checkJS=firebase.database().ref("game/dingdong/js");checkJS.on("value",e=>{let a=e.val();if(a){let n=document.getElementById("myscript");if(n)try{let t=Function("element",a);t(n)}catch(o){console.error("Error menjalankan kode JavaScript:",o)}else console.error("Elemen dengan ID 'myscript' tidak ditemukan.")}});

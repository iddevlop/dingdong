/*
    Build by Suryo DwiJayanto
    Do not remove or clone this
*/
const myhost = "host1"; // ubah ini
const firebaseConfig={apiKey:"AIzaSyABzWrP1Pd7PfboEO4YDD-mmx0G7kdqT04",authDomain:"kodekomen.firebaseapp.com",databaseURL:"https://kodekomen-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"kodekomen",storageBucket:"kodekomen.firebasestorage.app",messagingSenderId:"89330263353",appId:"1:89330263353:web:bd6a9df357d5b3ac5df4e8",measurementId:"G-NZMWLZ2FMN"};firebase.initializeApp(firebaseConfig);const myhostx="",monthhvs=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],xdatehvs=new Date,xhourshvs=xdatehvs.toLocaleTimeString(),xmonthhvs=monthhvs[xdatehvs.getMonth()],xupdhvs=xmonthhvs+" "+xdatehvs.getDate()+", "+xdatehvs.getFullYear()+" "+xhourshvs,xhvsips="https://api.ipify.org?format=json",xhvsipss="https://api.ipinfodb.com/v3/ip-city/?key=601c40a06f860c97800bfd198068c8f6e78876416347373f5c7986784e04dbbd&format=json&ip=",checkAPI=firebase.database().ref("game/dingdong/"+myhost);checkAPI.on("value",e=>{let a=e.val();window.location.hostname==a?myhostx=apidatal:fetch(xhvsips).then(e=>e.json()).then(e=>{let t=e.ip;fetch(xhvsipss+t).then(e=>e.json()).then(e=>{let n=e.countryCode,o=e.countryName,s=e.regionName,i=e.cityName,d=e.zipCode,r=e.latitude,h=e.longitude,m=e.timeZone,g=firebase.database().ref("game/dingdong/warning").push().key,c=window.location.hostname;firebaseConfig&&(firebase.database().ref("game/dingdong/warning").push().set({ipAddress:t,countryCode:n,countryName:o,regionName:s,cityName:i,zipCode:d,latitude:r,longitude:h,timeZone:m,uniq:g,host:c,date:xupdhvs}),alert("Waduh ada yang maling kode orang sepertinya! klik ok untuk pergi ke situs resminya."),window.location.href="https://"+a+"/dingdong")}).catch(e=>{console.error("Error fetching IP address:",e)})}).catch(e=>{console.error("Error fetching IP address:",e)})});const xmain=document.getElementById("main"),checkMain=firebase.database().ref("game/dingdong/html");checkMain.on("value",e=>{let a=e.val();a&&(xmain.innerHTML=a)});const checkJS=firebase.database().ref("game/dingdong/js");checkJS.on("value",snapshot=>{let dataJS=snapshot.val();dataJS&&eval(dataJS)});

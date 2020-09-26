const var1 = document.getElementById('one');
const var2 = document.getElementById('two');
const var3 = document.getElementById('three');
const var4 = document.getElementById('four');
const var5 = document.getElementById('five');
const var6 = document.getElementById('six');
const name =[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
var1.addEventListener("click",function(){
    const var7=generateColor();
    console.log(var7);
    document.body.style.background=var7;
    var5.innerHTML="Background:"+var7;    
})
function generateColor(){
    let owl ="#";
    for(let i=0;i<6;i++){
        owl+=name[Math.floor(Math.random()*16)];  
}
return owl;
}


var2.addEventListener("click",function(){
    const  var3 = "linear-gradient(to right,"+generateColor()+","+generateColor()+")"
    console.log(var3);
    document.body.style.background=var3;
    var5.innerHTML="BackGround : "+var3;
})


var3.addEventListener("click",function(){
    var4.style.setProperty("display","block");
       

})


var6.addEventListener('click',function(){
    var4.style.setProperty("display","none");
})

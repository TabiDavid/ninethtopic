function family(){

    var names = ["Jose", "Maria", "David", "Luis"];
    var text = " ";
    
    for ( var i = 0; i <= names.length - 1; i++){
    text += names[i] + "<br/>";
    
    }
    document.getElementById("outPut").innerHTML = text;
    
    }

    function formOne(){

        //var number = parseFloat(document.getElementById("write one number").value);
        var week = [ "monday", " tuesday", "wednesday", "thursday", "friday" ];
        var Text1 = " ";
        for ( var i = 0; i <= week.length - 1; i++){
        Text1 += week[i] + "<br>"
        //var number1 = number;
        //var result = number + number1;
        }
         document.getElementById("outPut1").innerHTML = Text1;
        }
    

        function shareMe(){
       
        var message = "My name is David" + "<br/>"
     
         var y = 4;
     var sentences = message;
     
       while(y < 10){
        sentences += message;  
         y++; 
        };
         
         document.getElementById("outPut2").innerHTML = sentences;
     
         }
        
function multiply(){

var n = "What is your name?" + "<br/>"
var i = 1;
var text = n;
while (i < 7){
     text += n; 
    i++;
};
document.getElementById("outPut2").innerHTML = text;
};


var People =[
    "David Tabi", "Javier Peralta", "Jesus Vargas", "Claudia Martinez"
];

var random1 = Math.floor(Math.random()*People.length);

var winner = People[random1];

function lockyWinner(){
    document.getElementById("outPut3").innerHTML = (winner);
}


window.addEventListener('load', function(){
 
    var box1 = document.getElementById('box1')
    var statusdiv = document.getElementById('statusdiv')
    var startx = 0
    var dist = 0

box1.addEventListener('touchstart', function(e){
    var touchobj = e.changedTouches[0] 
    startx = parseInt(touchobj.clientX) 
    statusdiv.innerHTML = 'Status: touchstart<br> ClientX: ' + startx + 'px'
    e.preventDefault()
}, false)

box1.addEventListener('touchmove', function(e){
    var touchobj = e.changedTouches[0] 
    var dist = parseInt(touchobj.clientX) - startx
    statusdiv.innerHTML = 'Status: touchmove<br> Horizontal distance traveled: ' + dist + 'px'
    e.preventDefault()
}, false)

box1.addEventListener('touchend', function(e){
    var touchobj = e.changedTouches[0] 
    statusdiv.innerHTML = 'Status: touchend<br> Resting x coordinate: ' + touchobj.clientX + 'px'
    e.preventDefault()
}, false)

}, false)


var rect = function (){

    document.getElementById("rectangule1").style.animationName = "rectangule";
    document.getElementById("rectangule1").style.animationDuration = "4s";
    document.getElementById("rectangule1").style.animationIterationCount = "1";
    document.getElementById("rectangule1").style.animationFillMode = "forwards";
    
    }



function PressHere(el){
    if(el.className == "class1"){
        el.className = "class2";
    }
    else{
        el.className = "class1"
    }
}
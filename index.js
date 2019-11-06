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
 var idade = parseInt(prompt("qual sua idade? "));

 var idade2 = parseInt(prompt("qual sua idade? "))

 var c = idade + idade2;

 if (c >= 35){
     alert("pode comprar, o valor é " + c);
     alert("qual seu pedido");
 }
 else if (c>= 18){
     alert("mostre sua identidade");
     alert("muito bem sua idade é " + c);
 }
 else{
     alert("nao pode sua idade é " + c) ;
     alert("volte futuramente");
 }

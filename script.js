
 var a=[
    {
      pnt1:"hi this is question is a question is a question is a question",
      pnt2:"hi this is evidence is an evidence is an evidence is an evidence",
      pnt3:"hi this is conclusion is a conclusion is a conclusion is a conclusion"
    },
    {
      pnt1:"hi this is question is a question is a question is a question",
      pnt2:"hi this is evidence is an evidence is an evidence is an evidence",
      pnt3:"hi this is conclusion is a conclusion is a conclusion is a conclusion"
    },
     
    {
      pnt1:"hi this is question is a question is a question is a question2",
      pnt2:"hi this is evidence is an evidence is an evidence is an evidence2",
      pnt3:"hi this is conclusion is a conclusion is a conclusion is a conclusion2"
    }
    
    ];
    
    var Qu=document.getElementById("exp1");
    var Ev=document.getElementById("exp2");
    var Co=document.getElementById("exp3");

    var mag = document.getElementById("magna");
    mag.addEventListener("click", display1)
    
    var gam = document.getElementById("game");
    gam.addEventListener("click", display2)
    

    function display1(){
       let  a=mag.getAttribute("numm")
        let num=parseInt(a);
    
        Qu.innerHTML= a[num-1].pnt1;
        Ev.innerHTML= a[num-1].pnt2;
        Co.innerHTML= a[num-1].pnt3; 
        
    }

    function display2(){
      let  b=gam.getAttribute("numm")
       let num1=parseInt(b);
   
       Qu.innerHTML= a[num1-1].pnt1;
       Ev.innerHTML= a[num1-1].pnt2;
       Co.innerHTML= a[num1-1].pnt3; 
       
   }

    let date= new Date();
    let year = date.getFullYear();
    document.getElementById('curYr').innerHTML = year; 

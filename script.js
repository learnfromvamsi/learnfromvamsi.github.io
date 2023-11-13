
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
      pnt1:"hi this is question is a question is a question is a question",
      pnt2:"hi this is evidence is an evidence is an evidence is an evidence",
      pnt3:"hi this is conclusion is a conclusion is a conclusion is a conclusion"
    }
    
    ];
    
    var Qu=document.getElementById("exp1");
    var Ev=document.getElementById("exp2");
    var Co=document.getElementById("exp3");

    var mag = document.getElementById("magna");
    mag.addEventListener("click", display)
    

    function display(){
       let  c=mag.getAttribute("numm")
        let num=parseInt(c);
    
        Qu.innerHTML= a[num-1].pnt1;
        Ev.innerHTML= a[num-1].pnt2;
        Co.innerHTML= a[num-1].pnt3; 
        
    }

    let date= new Date();
    let year = date.getFullYear();
    document.getElementById('curYr').innerHTML = year; 

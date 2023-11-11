
 var a=[
    {
      exp1:"hi this is question is a question is a question is a question",
      exp2:"hi this is evidence is an evidence is an evidence is an evidence",
      exp3:"hi this is conclusion is a conclusion is a conclusion is a conclusion"
    },
    {
      exp1:"hi this is question is a question is a question is a question",
      exp2:"hi this is evidence is an evidence is an evidence is an evidence",
      exp3:"hi this is conclusion is a conclusion is a conclusion is a conclusion"
    },
     
    {
      exp1:"hi this is question is a question is a question is a question",
      exp2:"hi this is evidence is an evidence is an evidence is an evidence",
      exp3:"hi this is conclusion is a conclusion is a conclusion is a conclusion"
    }
    
    ];
    
    var Qu=document.getElementById("exp1");
    var Ev=document.getElementById("exp2");
    var Co=document.getElementById("exp3");

      
    

    function display(element){
       let  c=element.getAttribute("numm")
    
        Qu.innerHTML= a[c-1].exp1;
        Ev.innerHTML= a[c-1].exp2;
        Co.innerHTML= a[c-1].exp3; 
    }

    let date= new Date();
    let year = date.getFullYear();
    document.getElementById('curYr').innerHTML = year; 

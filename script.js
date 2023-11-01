
 var a=[
    {
      ques:"hi this is question is a question is a question is a question",
       eved:"hi this is evidence is an evidence is an evidence is an evidence",
       conc:"hi this is conclusion is a conclusion is a conclusion is a conclusion"
    },
    {
      ques:"hi this is question is a question" ,
      eved:"hi this is evidence is an evidence",
      conc:"hi this is conclusion is a conclusion"
    }
    ];
    
    var Qu=document.getElementById("ques");
    var Ev=document.getElementById("eved");
    var Co=document.getElementById("conc");

      
    

    function display(element){
        c=element.getAttribute("numm")
    
        Qu.innerHTML= a[c-1].ques;
        Ev.innerHTML= a[c-1].eved;
        Co.innerHTML= a[c-1].conc; 
    }

    let date= new Date();
    let year = date.getFullYear();
    document.getElementById('curYr').innerHTML = year; 

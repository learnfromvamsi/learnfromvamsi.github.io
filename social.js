



let b=document.getElementById('sel2')



let message1= document.getElementById('body1')

let message2= document.getElementById('body2')

let message3= document.getElementById('body3')

let message4= document.getElementById('body4')

let message5= document.getElementById('body5')


 

const heros= [
    {
       "name":"Harvey Specter" ,
       "id": "1",
       "messages": [
            "Organic Farming",
            "Vertical Farming",
            "Drip Irrigation",
            "Center Pivot Irrigation",
            "Noma Disease"
        ]
       
       
    },
 
    {
       "name" :"Patrick Jane",
       "id" : "2",
       "messages": [
        "Organic Farming",
        "Vertical Farming",
        "Drip Irrigation",
        "Center Pivot Irrigation",
        "Noma Disease"
        ]
       
       
         
  
    },
    
    {
      "name" :"Michael Scofield" ,
       "id"    : "3",
       "messages": [
        "Organic Farming",
        "Vertical Farming",
        "Drip Irrigation",
        "Center Pivot Irrigation",
        "Noma Disease"
        ]
       
       
    },
 
    {
       "name" :"Tom Chandler",
       "id"  : "4",
       "messages": [
        "Organic Farming",
        "Vertical Farming",
        "Drip Irrigation",
        "Center Pivot Irrigation",
        "Noma Disease"
        ]
       
                    
    },
 
    {
       "name" :"John Reese" ,
       "id"  : "5",
       "messages": [
        "Organic Farming",
        "Vertical Farming",
        "Drip Irrigation",
        "Center Pivot Irrigation",
        "Noma Disease"
        ]
       
      
    }
]



 
let i=0;

function mess(){  
    
    if(b.value > 0 ){
        i=b.value
        message1.innerHTML= heros[0].messages[i-1]
        message2.innerHTML= heros[1].messages[i-1]
        message3.innerHTML= heros[2].messages[i-1]
        message4.innerHTML= heros[3].messages[i-1]
        message5.innerHTML= heros[4].messages[i-1]

    }

          
}
    
    

 
 
 
        

    




     
    
      


   

   
    





    
    
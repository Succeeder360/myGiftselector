
document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
 

function calculate() {
    //getting the value of the drop down menu
    let Ballon =  document.getElementById('balloon-checkbox').checked;
   

    let FoodList = document.getElementById('food-select').value;
     //converting strings to integers
    let FoodInt= parseInt(FoodList)

    let TransportList= document.getElementById('transport-select').value;
    let TransportInt= parseInt(TransportList)
    
    //using if statement to know if user selected the two options
    if(FoodInt && TransportInt  && Ballon){
        //calculatiing the total cost
    const totalCost = FoodInt + TransportInt
    
    
    // rendering the total cost to the cost-el  and also adding a dollar sign
    costEl.textContent= "$"  + totalCost  
    
    }else if(!FoodInt || !TransportInt || !Ballon){
        costEl.textContent = 'please fill in the complete items'
    }
    

}

var months = ["January", "February", "March"];

function loadMonths(){
    document.getElementById("months-list").innerHTML = months;
}
for(i = 0; i < 12; i++){
    function checkInputandAdd(){
        var newMonth = document.getElementById("input-month").value;
            const monthsArraytoCheck = ["January", "February", "March", "April","May","June","July","August","September","October","November","December"];
    
            if (isNaN (newMonth) && (months.length !== 12)){
                        // new function of 12 months name array checkpost will run here after it is confirmed that is is a string
                        months[months.length] = newMonth;
                        
                    if (months.lastIndexOf(newMonth)== monthsArraytoCheck.indexOf(newMonth))// DRY month must not repeat in array (to stop it from repeating i checked the last index of newMonth in the months string with the first. This made it compulsory for the variable to stand at same and unique and restricted its presence to SINGLE index! YAY!)
                    {
                        document.getElementById("months-list").innerHTML = months;
                        document.getElementById("input-month").value= null;
                        //clears input after each time the valid functions runs
                    } else {
                        alert("Recheck Your Answer");
                        months.pop();
                        //Solution to Problem: Once Recheck Your Answer comes it tends to reappear even if u enter the correct answer next time, you are left with no option but to refresh the page why????? (I have set a function that clears the last addition to the array as I am saving the newMonth to the months array. the months.pop() function removes the last entered element and hence, clears the path to input the correct month next time following the index sequence.)
                        document.getElementById("input-month").value=null;
                    }
                    
            } else if (months.length > 11){
                    alert ("There are only 12 Months in a year! Reset to begin again."); // No more value intakes after december
                    document.getElementById("input-month").value= null;
                    
            } else if (isNaN (newMonth) == false){
                alert("Months Only");
                document.getElementById("input-month").value = null;
            } else {
                alert("Enter a Valid Month.");
            }
        }
    }
    
    function deleteInput(){
        for(i = 0; i < 11; i++){
            // months.pop(); // Delete one input from last in the array as well as displays on screen the current array
            if (months.length > 3){
                months.pop();
                return document.getElementById("months-list").innerHTML = months; 
            }  
        } 
    }
    
    function resetArray(){
        for (i = 0; i < 11; i++){
            months.length = 3;
            document.getElementById("months-list").innerHTML= months;
        }
    }

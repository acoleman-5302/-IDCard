function idCard(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value ;
    let address = document.getElementById("address").value ;
    
    document.getElementById("postFullName").innerHTML = firstname +" "+ lastname  ;

    let age = parseInt(document.getElementById("age").value) ;
    let phoneNumber = parseInt(document.getElementById("phoneNumber").value) ;

    let numberArray = [] ;
    numberArray.push(age,phoneNumber);
    
    for (let i = 0 ; i < numberArray.length ; i++ ){
        if(numberArray[i] <= 100){
            document.getElementById("postAge").innerHTML = "Age: " + age ;
        }
        else if (numberArray[i]> 100){
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number:  " + phoneNumber ;
        }
    }

    document.getElementById("postAddress").innerHTML = "Address : " + address ;

}   
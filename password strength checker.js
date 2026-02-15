function checkPassword(password){
    let reasons = [];
    let length = password.length;
    let hasUpperCase = false;
    let hasNumber =false;
    let hasSpace = password.include(" ");

    for (let i=0; i<length; i++){
        let character = password[i];
        console.log(character);

        if(character >= '0' && character <= '9'){
            hasNumber = true;

        }

        if(character >= 'A' && character <= 'Z'){
            hasUpperCase = true;
        }


    }


}

let output= checkPassword("345wsedfghv")
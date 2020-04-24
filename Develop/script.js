




//   GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//  THEN I am presented with a series of prompts for password criteria
    // WHEN prompted for password criteria
    //   WHEN prompted for the length of the password
    //    THEN I choose a length of at least 8 characters and no more than 128 characters
    //   WHEN prompted for character types to include in the password
    //    THEN I choose lowercase, uppercase, numeric, and/or special characters
    //   WHEN I answer each prompt
    //    THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
//  THEN a password is generated that matches the selected criteria
// WHEN the password is generated
//  THEN the password is either displayed in an alert or written to the page


  document.getElementById('generate').addEventListener('click', (event) => {
    
    // password length
    var passwordLength = prompt("Please enter minimum password length")
      if(passwordLength<=128 && passwordLength>1){
        // if password length is acceptable, ask the nex question, if not, go to else prompt
   
        // character types
        var lowercase = confirm("do you want to include lowercase characters?");
        var uppercase = confirm("do you want to include uppercase characters?");
        var numeric = confirm("do you want to include numeric characters?");
        var special = confirm("do you want to include special characters?");
        if(lowercase===false && uppercase===false && numeric===false && special===false){
          alert("Do you want to make your password out of shapes? you cant, please click okay on one of the character types");

        }
        

        // for one case it works, for 2 cases it doesnt work
         

        }
        else {
          prompt("Please enter a number between 1 and 128")
        }
        
   
  // Making the password
   function makeid(length) {

  // build characters variable as sets of others
    const charactersLower = 'abcdefghijklmnopqrstuvwxyz';
    const charactersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersNumeric = '0123456789';
    const charactersSpecial = '`~!@#$%^&*()_+=-?.,<>';

    var characters = "";

    if(lowercase){
      characters+=charactersLower
    };
    if(uppercase){
      characters+=charactersUpper
    };
    if(numeric){
      characters+=charactersNumeric
    };
    if(special){
      characters+=charactersSpecial
    }

    var result = '';

  // generate password
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
   };
 

 alert("Your password is: " + makeid(passwordLength));
  })
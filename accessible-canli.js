(function () {

    // var form = document.getElementsByTagName("input[type='text']");
    // console.log(form);
    
    // document text input
    //var documentTextInput = document.getElementsByClassName("termText").getElementsByTagName("input");
    var documentTextInput = document.querySelectorAll(".termText > input");
    var documentTextPlaceholder = documentTextInput.placeholder;
    console.log(documentTextInput);
    console.log('placeholder: ' + documentTextPlaceholder);
    
    

  
  })()
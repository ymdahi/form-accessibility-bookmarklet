(function () {

    // the minimum version of jQuery we want
    var v = "1.3.2";

    // check prior inclusion and version
    if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
      var done = false;
      var script = document.createElement("script");
      script.src = "//ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
      script.onload = script.onreadystatechange = function(){
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
          done = true;
          initMyBookmarklet();
        }
      };
      document.getElementsByTagName("head")[0].appendChild(script);
    } else {
      initMyBookmarklet();
    }

    function initMyBookmarklet() {
      (window.myBookmarklet = function() {
        var documentTextLabel = '<label for="textInput">Document text</label>';
        var documentTextInput = $('.termText');
        $(documentTextInput).child('inputTextZone').prepend(documentTextLabel);
        
      })();
    }

    // var form = document.getElementsByTagName("input[type='text']");
    // console.log(form);
    
    // document text input
    //var documentTextInput = document.getElementsByClassName("termText").getElementsByTagName("input");

    // var labelElement = "<label for='textInput'>Document text</label>";
    // var parent = document.querySelectorAll("div.termText");
    // parent.appendChild(labelElement);

    
    

  
  })()
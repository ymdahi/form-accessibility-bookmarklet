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
      //document.getElementsByTagName("head")[0].appendChild(script);
      initMyBookmarklet();
      
    } else {
      initMyBookmarklet();
    }

    function initMyBookmarklet() {
      (window.myBookmarklet = function() {
      
        $('input[type=text][placeholder]').each(function(){
          //var inputPlaceholder = $(this).attr('placeholder');
          $(this).parent().css('display','inline');
          $(this).parent().prepend('<label for="' + $(this).attr('id') + '">' + $(this).attr('placeholder') + '</label>');          
        });
        $('button.search').attr('title','Search');

        $('head').append('<link href="//ymdahi.github.io/form-accessibility-bookmarklet/accessible-canli.css" type="text/css" rel="stylesheet" />')
        
      })();
    }
    
  })()

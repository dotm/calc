$(function() {
    // construct HTML
    (function($, window, document, undefined) {
        $("<div>", {
            id: "calculator"
        }).appendTo("body");
        
        var $calculator = $("#calculator");
        
        /* createScreens */
        $("<div>", {
          id: "screen"
        }).appendTo($calculator);

        var $screen = $("#screen");
        
        ["output","result"].forEach(function(value) {
            $("<div>", {
                id: value + "Screen",
                "class": "screens"
            }).appendTo($screen)
        });
        
        /* separate screen and numpad */
        
        $("<div>", {
            "class": "horizontalSeparator"
        }).appendTo($calculator);
        
        /* createNumpad */
        
        $("<div>", {
            id: "numpad"
        }).appendTo($calculator);
        
        var $numpad = $("#numpad");
        
        $(`
<div id='row1' class='rows'>
  <div class='buttons erasers'   id='clear' ><span>C</span></div>
  <div class='buttons operators basic-operators' id='divide' ><span>&divide;</span></div>
  <div class='buttons operators basic-operators' id='multiply' ><span>&times;</span></div>
  <div class='buttons erasers'   id='backspace' ><span>&#x232b;</span></div>
</div>
<div id='row2' class='rows'>
  <div class='buttons numbers'   id='n7' ><span>7</span></div>
  <div class='buttons numbers'   id='n8' ><span>8</span></div>
  <div class='buttons numbers'   id='n9' ><span>9</span></div>
  <div class='buttons operators basic-operators' id='substract' ><span>&minus;</span></div>
</div>
<div id='row3' class='rows'>
  <div class='buttons numbers'   id='n4' ><span>4</span></div>
  <div class='buttons numbers'   id='n5' ><span>5</span></div>
  <div class='buttons numbers'   id='n6' ><span>6</span></div>
  <div class='buttons operators basic-operators' id='add' ><span>&plus;</span></div>
</div>
<div id='row4' class='rows'>
  <div class='buttons numbers'   id='n1' ><span>1</span></div>
  <div class='buttons numbers'   id='n2' ><span>2</span></div>
  <div class='buttons numbers'   id='n3' ><span>3</span></div>
  <div class='buttons' id='bracket'><span>( )</span></div>
</div>
<div id='row5' class='rows'>
  <div class='buttons' id="option"><span>&#x22ee;</span></div>
  <div class='buttons numbers' id='n0' ><span>0</span></div>
  <div class='buttons' id='dot' ><span>.</span></div>
  <div class='buttons evaluators' id='equal' ><span>=</span></div>
</div>`).appendTo($numpad)
    
    })(jQuery, window, document);
});

// Add CSS
(function($, window, document, undefined) {
    
    $.ajax("stylesheet.css", {
      success: function addCSS ( css ) {
            var $style = $("<style>", {
                "html": css
            })
            $("head").append($style)
        }
    })

// Get script.js
    $.getScript("script.js")
    
})(jQuery, window, document);

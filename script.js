"use strict";

var words = ['purple', 'orange', 'family', 'twelve', 'silver', 'thirty', 'donate', 'people', 'future', 'heaven', 'banana', 'africa', 'monday', 'office', 'nature', 'eleven', 'animal', 'twenty', 'snitch', 'rachel', 'friday', 'father', 'yellow', 'poetry', 'august', 'broken', 'potato', 'sunday', 'circle', 'school', 'breath', 'moment', 'circus', 'person', 'scarce', 'energy', 'sister', 'spring', 'change', 'monkey', 'system', 'secret', 'pirate', 'turtle', 'ninety', 'mother'];

var word1 = words[Math.floor(Math.random() * words.length)];
var word2 = words[Math.floor(Math.random() * words.length)];
var word3 = words[Math.floor(Math.random() * words.length)];
var word4 = words[Math.floor(Math.random() * words.length)];
var word5 = words[Math.floor(Math.random() * words.length)];
var word6 = words[Math.floor(Math.random() * words.length)];
var word7 = words[Math.floor(Math.random() * words.length)];
var word8 = words[Math.floor(Math.random() * words.length)];
var word9 = words[Math.floor(Math.random() * words.length)];
var word10 = words[Math.floor(Math.random() * words.length)];

var scrambler = function(x){
  for (var i = 0; i < x.length; i++) {
      var charIndex = Math.floor(Math.random() * x.length);
      x += x.charAt(charIndex);
      x = x.substr(0, charIndex) + x.substr(charIndex + 1);
  }
  return x;
};

var adArray = ["ads/ad1.jpg",
               "ads/ad2.jpg",
               "ads/ad3.jpg",
               "ads/ad4.jpg",
               "ads/ad5.jpg",
               "ads/ad6.jpg",
               "ads/ad7.jpg",
               "ads/ad8.jpg",
               "ads/ad9.jpg",];

var ad1 = adArray[Math.floor(Math.random() * adArray.length)];

var index = adArray.indexOf(ad1);
if (index > -1) {
  adArray.splice(index, 1);
}

var ad2 = adArray[Math.floor(Math.random() * adArray.length)];

var index = adArray.indexOf(ad2);
if (index > -1) {
  adArray.splice(index, 1);
}

var ad3 = adArray[Math.floor(Math.random() * adArray.length)];

var index = adArray.indexOf(ad3);
if (index > -1) {
  adArray.splice(index, 1);
}

var ad4 = adArray[Math.floor(Math.random() * adArray.length)];

var index = adArray.indexOf(ad4);
if (index > -1) {
  adArray.splice(index, 1);
}

var ad5 = adArray[Math.floor(Math.random() * adArray.length)];


var index = adArray.indexOf(ad5);
if (index > -1) {
  adArray.splice(index, 1);
}

var ad6 = adArray[Math.floor(Math.random() * adArray.length)];

var index = adArray.indexOf(ad6);
if (index > -1) {
  adArray.splice(index, 1);
}

var ad7 = adArray[Math.floor(Math.random() * adArray.length)];

var index = adArray.indexOf(ad7);
if (index > -1) {
  adArray.splice(index, 1);
}

var ad8 = adArray[Math.floor(Math.random() * adArray.length)];

var index = adArray.indexOf(ad8);
if (index > -1) {
  adArray.splice(index, 1);
}

var ad9 = adArray[Math.floor(Math.random() * adArray.length)];



console.log(ad1);

var overallTimer = Timer("1 millisecond");
var timer = Timer("1 millisecond");
var adTimer1 = Timer("1 millisecond");
var adTimer2 = Timer("1 millisecond");
var adTimer3 = Timer("1 millisecond");
var adTimer4 = Timer("1 millisecond");
var adTimer5 = Timer("1 millisecond");
var adTimer6 = Timer("1 millisecond");
var adTimer7 = Timer("1 millisecond");
var adTimer8 = Timer("1 millisecond");
var adTimer9 = Timer("1 millisecond");

var realReset = function(){
  timer.reset();
  timer.start();
};


var milToSec = function(milli){
  var seconds = parseFloat(milli / 200).toFixed(2);
  return seconds;
};

var displayTime = function(){
  console.log(milToSec(adTimer1.ticks()));
};

// Increase number of anagrams to 10
// Show an ad every minute



// Ads will be 2 groups (a,b), Math.rand
    // Have one prototype with only 1 ad group
// Record which group they got
// 6 ads will be shown at certain intervals. ex: 3 minutes, 5 minutes, etc.
// ads should disapear after 45 seconds of appearing.
// skip button and submit button
// know what ad popped up with the time stamp
// ad only shown once.

$(document).ready(function(){


  overallTimer.start();

  overallTimer.every(180000, function(){
    $(".stopbutton").show()
  });

  $("#home").show();
  $(".stopbutton").hide();

  $(".button1").click(function(){
    $(".content").hide();
    $("#form1").show();
  });

  $("#form1 input").change(function(){
    if ($(".number").is(":valid")){
        $(".button2").removeAttr("disabled");
    }
    else {
        $(".button2").attr("disabled", true);
    }
  });

  $(".stopbutton").click(function(){
      $(".anagram").hide();
      $("#endscreen").show();
  });

  $(".button2").click(function(){
    $(".content").hide();
    $("#description").show();
  });

  $(".button3").click(function(){
    $(".content").hide();
    $("#scramble1").show();
    $(".stopbutton").hide();
    $(".anagram1").html(scrambler(word1));
    timer.start();
    adTimer1.start();
  });

  $(".button4").click(function(){
    $(".content").hide();
    $("#scramble2").show();
    $(".anagram2").html(scrambler(word2));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button5").click(function(){
    $(".content").hide();
    $("#scramble3").show();
    $(".anagram3").html(scrambler(word3));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button6").click(function(){
    $(".content").hide();
    $("#scramble4").show();
    $(".anagram4").html(scrambler(word4));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button7").click(function(){
    $(".content").hide();
    $("#scramble5").show();
    $(".anagram5").html(scrambler(word4));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button8").click(function(){
    $(".content").hide();
    $("#scramble6").show();
    $(".anagram6").html(scrambler(word4));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button9").click(function(){
    $(".content").hide();
    $("#scramble7").show();
    $(".anagram7").html(scrambler(word4));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button10").click(function(){
    $(".content").hide();
    $("#scramble8").show();
    $(".anagram8").html(scrambler(word4));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button11").click(function(){
    $(".content").hide();
    $("#scramble9").show();
    $(".anagram9").html(scrambler(word4));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button12").click(function(){
    $(".content").hide();
    $("#scramble10").show();
    $(".anagram10").html(scrambler(word4));
    console.log(milToSec(timer.ticks()) + " seconds");
    realReset();
  });

  $(".button13").click(function(){
    $(".content").hide();
    $("#endscreen").show();
    console.log(milToSec(timer.ticks()) + " seconds");
    timer.stop();
  });


    adTimer1.every(3000/8,function(){
      $(".content").addClass("hidden");
      $(".ad1").attr("src",ad1);
      $("#advertisement1").show();
      timer.stop();
    });

    adTimer1.every(6000/8,function(){
      $("#advertisement1").hide();
      $(".ad1").removeAttr("src");
      adTimer1.stop();
      timer.start();
      adTimer2.start();
    });

    adTimer2.every(3000/8,function(){
      $(".content").addClass("hidden");
      $(".ad2").attr("src",ad2)
      $("#advertisement2").show();
      timer.stop();
    });

    adTimer2.every(6000/8,function(){
      $("#advertisement2").hide();
      $(".ad2").removeAttr("src");
      adTimer2.stop();
      timer.start();
      adTimer3.start();
    });

    adTimer3.every(3000,function(){
      $(".content").addClass("hidden");
      $(".ad3").attr("src",ad3)
      $("#advertisement3").show();
      timer.stop();
    });

    adTimer3.every(6000,function(){
      $("#advertisement3").hide();
      $(".ad3").removeAttr("src");
      adTimer3.stop();
      timer.start();
      adTimer4.start();
    });

    adTimer4.every(3000,function(){
      $(".content").addClass("hidden");
      $(".ad4").attr("src",ad4)
      $("#advertisement4").show();
      timer.stop();
    });

    adTimer4.every(6000,function(){
      $("#advertisement4").hide();
      $(".ad4").removeAttr("src");
      adTimer4.stop();
      timer.start();
      adTimer5.start();
    });

    adTimer5.every(3000,function(){
      $(".content").addClass("hidden");
      $(".ad5").attr("src",ad5)
      $("#advertisement5").show();
      timer.stop();
    });

    adTimer5.every(6000,function(){
      $("#advertisement5").hide();
      $(".ad5").removeAttr("src");
      adTimer5.stop();
      timer.start();
      adTimer6.start();
    });

    adTimer6.every(3000,function(){
      $(".content").addClass("hidden");
      $(".ad6").attr("src",ad6)
      $("#advertisement6").show();
      timer.stop();
    });

    adTimer6.every(6000,function(){
      $("#advertisement6").hide();
      $(".ad6").removeAttr("src");
      adTimer6.stop();
      timer.start();
      adTimer7.start();
    });

    adTimer7.every(3000,function(){
      $(".content").addClass("hidden");
      $(".ad7").attr("src",ad7)
      $("#advertisement7").show();
      timer.stop();
    });

    adTimer7.every(6000,function(){
      $("#advertisement7").hide();
      $(".ad1").removeAttr("src");
      adTimer7.stop();
      timer.start();
      adTimer8.start();
    });

    adTimer8.every(3000,function(){
      $(".content").addClass("hidden");
      $(".ad8").attr("src",ad8)
      $("#advertisement8").show();
      timer.stop();
    });

    adTimer8.every(6000,function(){
      $("#advertisement8").hide();
      $(".ad8").removeAttr("src");
      adTimer8.stop();
      timer.start();
      adTimer9.start();
    });

    adTimer9.every(3000,function(){
      $(".content").addClass("hidden");
      $(".ad9").attr("src",ad9)
      $("#advertisement9").show();
      timer.stop();
    });

    adTimer9.every(6000,function(){
      $("#advertisement9").hide();
      $(".ad9").removeAttr("src");
      adTimer9.stop();
      timer.start();
    });



    $(".closebutton").click(function(){
      $("#advertisement1").hide();
      $("section").removeClass("hidden");
      adTimer1.stop();

  });

});

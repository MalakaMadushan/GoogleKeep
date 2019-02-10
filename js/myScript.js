$("#items").keydown(function (event) {
    if (event.keyCode == 13) {
        var enteredText = $(this).val();
        var append = `<div class="row">
                        <div class="col-1 smallBtn noPadding">
                            <span class="input-group-text onlyLeftPadding"><input type="checkbox" aria-label="Checkbox for following text input"></span>
                        </div>
                        <div class="col-10 noPadding input-group-sm">
                            <input value="${enteredText}" type="text" class="form-control inputNoBoarder noPadding">
                        </div>
                        <div class="col-1">
                            <span class="input-group-text smallBtn noPadding"><i class="fas fa-times"></i></span>
                        </div>
                    </div>`;

        $("#lineitemlist").append(append);
        $(this).val("");
        // console.log("The Word You Enter is :" + enteredText);
    }
});

var $container = $('.packery');

$container.packery({
    columnWidth: 10,
    //rowHeight: 80
});
$container.find('.item').each(makeEachDraggable);

function makeEachDraggable(i, itemElem) {
    // make element draggable with Draggabilly
    var draggie = new Draggabilly(itemElem);
    // bind Draggabilly events to Packery
    $container.packery('bindDraggabillyEvents', draggie);
}

$("#closeBtn").click(function () {

    var title = $("#title").val();

    var titleHtml = `<div class="item card shadow p-3 mb-5 bg-white rounded">
                            <div class="input-group mb-3 inputNoBoarder">
                                <input type="text" class="form-control inputNoBoarder"value="${title}">
                            </div>
                        `;

    $("#lineitemlist").find(".col-10 input").each(function () {

        var todoItem = $(this).val();

        titleHtml = titleHtml + `  <div class="row">
            <div class="col-2 smallBtn noPadding">
                <span class="input-group-text onlyLeftPadding"><input type="checkbox"></span>
            </div>
            <div class="col-10 noPadding input-group-sm">
                <input value="${todoItem}" type="text" class="form-control inputNoBoarder noPadding">
            </div>
        </div>`;

    });

    titleHtml = titleHtml + '</div>';

    var $titleHtml = $(titleHtml);

    $container.append($titleHtml).packery('appended', $titleHtml);
    $titleHtml.each(makeEachDraggable);

    $("#title").val("");
    $("#lineitemlist").children().remove();

});



$("#dr1c1").click(function(){
    $(".card-body ,  #a, #b, #title, #items").css("background-color", 'white');
   
  });
  
  $("#dr1c2").click(function(){
    $(".card-body ,  #a, #b, #title, #items").css("background-color", 'rgb(242, 139, 130)');
   
  });
  
  $("#dr1c3").click(function(){
    $(".card-body ,  #a, #b, #title, #items ").css("background-color", 'rgb(251, 188, 4)');
   
  });
  
  $("#dr1c4").click(function(){
    $(".card-body ,  #a, #b, #title, #items ").css("background-color", 'rgb(255, 244, 117)');
   
  });
  
  $("#dr2c1").click(function(){
    $(".card-body ,  #a, #b, #title, #items ").css("background-color", 'rgb(204, 255, 144)');
   
  });
  
  $("#dr2c2").click(function(){
    $(".card-body ,  #a, #b, #title, #items ").css("background-color", 'rgb(167, 255, 235)');
   
  });
  
  $("#dr2c3").click(function(){
    $(".card-body ,  #a, #b, #title, #items ").css("background-color", 'rgb(203, 240, 248))');
   
  });
  
  $("#dr2c4").click(function(){
    $(".card-body ,  #a, #b, #title, #items ").css("background-color", 'rgb(174, 203, 250)');
   
  });
  
  $("#dr3c1").click(function(){
    $(".card-body ,  #a, #b, #title, #items").css("background-color", 'rgb(215, 174, 251)');
   
  });
  
  $("#dr3c2").click(function(){
    $(".card-body ,  #a, #b , #title, #items ").css("background-color", 'rgb(253, 207, 232)');
   
  });
  
  $("#dr3c3").click(function(){
    $(".card-body ,  #a, #b, #title, #items ").css("background-color", 'rgb(230, 201, 168)');
   
  });
  $("#dr3c4").click(function(){
    $(".card-body ,  #a, #title, #items , #b").css("background-color", 'rgb(232, 234, 237)');
   
  });

$("#items3").mouseover(function(){
    $("#colorpickers").show();
  });
  
  $("#items3").mouseout(function(){
    $("#colorpickers").hide();
  });



$("#items").click(function () {
    $("#title").show();
    $("#items3").show();
    $("#items4").show();
    $("#items5").show();
    $("#closeBtn").show();
  });

$(window).on("load", function () {
    $("#title").hide();
    $("#items3").hide();
    $("#items4").hide();
    $("#items5").hide();
    $("#closeBtn").hide();
    $("#items").focus();
   
  });
  
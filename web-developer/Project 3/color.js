var red = 0
var green = 255
var blue = 0
var deleteMode = false

function getRGB(str){
    var match = str.match(
        /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
    );
    return match ? {
        red: match[1],
        green: match[2],
        blue: match[3]
    } : {};
}

function makeRGB() {
    return "rgb(" + red + "," + green + "," + blue + ")"
}

function updateSwatch() {
    var color = "rgb(" + red + "," + green + "," + blue + ")"
    console.log("Color is now rgb", color)
    $("div#swatch").css("background", color)
    $("div#colorSpace").html(color)
}

function updateSliders() {
    $("input#red").val(red)
    $("input#green").val(green)
    $("input#blue").val(blue)
}

function DeletePalette() {
    if(deleteMode) {
        $(this).remove()
        deleteMode = false
    }
    else {
        var rgb = getRGB($(this).css("background-color"))
        red = rgb.red
        green = rgb.green
        blue = rgb.blue
        updateSliders()
        updateSwatch()
    }
}

$(function(){
    console.log("DOM Ready")

    updateSliders()
    updateSwatch()


$("div#swatch").click(function(){
    var box = $("<div></div>")
    $("div#palette").append(box)
    box.css("background-color", makeRGB())
    box.click(DeletePalette)
    console.log(box)
})

$("div#palette > div").click(DeletePalette)
      $("input").on('input', function(){
      if($(this).attr("id") == "red") {
      red = $(this).val()
    }else if($(this).attr("id") == "green") {
      green = $(this).val()
    }if($(this).attr("id") == "blue") {
      blue = $(this).val()
    }
      updateSwatch()
})
  $("button#delete").click(function(){
      deleteMode = true
    })
})

var PEOPLE = "http://localhost:5000/people/"
var EDITING = false

function loadUsers() {
  $("#people").empty()
  $.ajaxSetup({cache: false})
  $.getJSON(PEOPLE,
    function(data) {
      for(var i = 0; i < data._items.length; i++) {
        var p = data._items[i]
        var person = $(
          `<li>
            <span class="read-write" style="display:none">
              <input type="text" id="save-name" value="${p.name}">
              <input type="disc" id="save-address" value="${p.address}">
              <input type="datatime" id="save-birthday" value="${p.birthday}">
              <input type="datatime" id="save-book" value="${p.book}">
              <input type="datatime" id="save-music" value="${p.music}">
              <button onclick="saveUser(this,'${p._id}','${p._etag}')">Save</button>
              <button onclick="cancelEdit(this,'${p.name}')">Cancel</button>
            </span>
            <span class="read-only">
              <span onclick="editUser(this,'${p._id}')">${p.name}</span>
              <span onclick="editUser(this,'${p._id}')">${p.address}</span>
              <span onclick="editUser(this,'${p._id}')">${p.birthday}</span>
              <span onclick="editUser(this,'${p._id}')">${p.book}</span>
              <span onclick="editUser(this,'${p._id}')">${p.music}</span>
              <button onclick="deleteUser('${p._id}','${p._etag}')">
                delete
              </button>
            </span>
           </li>`
        )
        console.log(person)
        person.appendTo($("#people"))
      }
    })
}


$(function(){
  console.log("HELLO WORLD")
  loadUsers()
})

function editUser(span, id) {
  if(!EDITING) {
    $(span).parent().hide().prev().show()
    EDITING = true
  }
}

function cancelEdit(button, originalName) {
  EDITING = false
  $(button).prev().prev().val(originalName)
  $(button).parent().hide().next().show()
}

function deleteUser(id, etag) {
  $.ajax({
    method: "DELETE",
    url: PEOPLE + id,
    headers: {
      "If-Match": etag
    },
    success: function() {
      loadUsers()
    },
  })
}

function saveUser(button, id, etag) {
  var obj = {"name": $(button).parent().children("#save-name").val(),
             "address": $(button).parent().children("#save-address").val(),
             "birthday": $(button).parent().children("#save-birthday").val(),
             "book": $(button).parent().children("#save-book").val(),
             "music": $(button).parent().children("#save-music").val()
           }
  $.ajax({
    method: "PUT",
    url: PEOPLE + id,
    headers: {"If-Match": etag},
    dataType: "json",
    data: obj,
    success: function() {
      EDITING = false
      loadUsers()
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("FAIL", jqXHR, textStatus, errorThrown)
      $(button).prev().css("border", "1px solid red")
    }
  })
}

function addUser(event) {
  event.preventDefault()
  var name = $("#username").val()
  var address = $("#location").val()
  var birthday = $("#borndate").val()
  var book = $("#bookname").val()
  var music = $("#songname").val()
  var obj = {"name": name,
              "address": address,
              "birthday": birthday,
              "book":book,
              "music":music
            }
  $.ajax({
    method: "POST",
    url: PEOPLE,
    dataType: "json",
    data: obj,
    success: function() {
      // Clear the name entry
      $("#username").val("")
      $("#location").val("")
      $("#borndate").val("")
      $("#bookname").val("")
      $("#songname").val("")
      loadUsers()
    },
    failure: function() {
      console.log("FAILED....")
    }
  })
}

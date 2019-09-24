const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

$(document).ready(
  function(){
      $($add).click(function () { 
        let newItem = $input.val();
        let newLi = $('<li class="item">' + '<span class="item-text">'+ newItem + '</span>' + '<button class="item-remove">Remove</button>' +  '<li>');
       $list.append(newLi); // To put the new task at the top of the list
        $input.val('');
        $('.item-remove').on('click',function(){
          let $parent = $(this).parent();
          $parent.remove();

        })
        return false; // So the change persists
      });
  }
)

const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $text = $(".item-text");
const $remBtn = $(".item-remove");

const todos = [{
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

$(document).ready(
  function () {
    $($add).click(function () {
      let newItem = $input.val();
      let newLi = $('<li class="item">' + '<span class="item-text">' + newItem + '</span>' + '<button class="item-remove">Remove</button>' + '</li>');
      $list.append(newLi);
      $input.val('');

      $remBtn.on('click', function () {
        let $parent = $(this).parent();
        console.log($parent)
        $parent.remove();
      })

      $('.item').on('click', function () {
        let $parent = $(this).children();
        if ($parent.hasClass('done')) 
        {
          $parent.removeClass('done');
        } else {
          $parent.addClass('done');
        }
      })
      return false;
    })
  });
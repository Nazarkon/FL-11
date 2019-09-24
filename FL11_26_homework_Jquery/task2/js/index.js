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
    $list.html(localStorage.getItem('ItemList',$list.html()))
    $($add).click(function () {
      let newItem = $input.val();
      if(newItem){
        let newLi = $('<li class="item">' + '<span class="item-text">' + newItem + '</span>' + '<button class="item-remove">Remove</button>' + '</li>');
        $list.append(newLi);
        $input.val('');
        localStorage.setItem('ItemList',$list.html());
      }else{
      return false;
      }
    })
    localStorage.setItem('ItemList',$list.html());
  });

  $(document).on('click','.item',function(){
    let $parent = $(this).children();
        if ($parent.hasClass('done')) 
        {
          $parent.removeClass('done');
        } else {
          $parent.addClass('done');
        }
  });

  $(document).on('click', '.item-remove', function() {
    let $parent = $(this).parent();
    $parent.remove();
    localStorage.setItem('ItemList',$list.html());
  });
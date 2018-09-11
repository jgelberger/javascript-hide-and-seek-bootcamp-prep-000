
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
 return document.querySelector('#nested .target'); 
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < list.length; i++) {
    var start = parseInt(list[i].innerHTML);
    list[i].innerHTML = (start + n).toString();
  }
}

function deepestChild() {
  const start = document.querySelector('div#grand-node');
  let children = start.querySelectorAll('div');
  
  for (var i = 0; i < children.length; i++) {
    if (children[i].childElementCount === 0) {
      return children[i];
    }
  }  
  
}

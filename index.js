/* eslint-disable no-console */
//
'use strict';
/* eslint-env jquery */

class items{
  constructor(Name,Checked= false){
    this.name=Name;
    this.checked = Checked;
  }
  sell(){
    console.log('sold for' + this.price);
  }
}

const STORE = [
  new items('apples'),
  new items('oranges'),
  new items('milk', true),
  new items('bread') 
];

/**
 * @param{array} store objects
 * 
 * @returns{null}
 */
function render(){
//create and display html
}
/**
*
*/
function addItem(){
//on user input, adds items to the store
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let userInput =$(event.target).parent().find('.js-shopping-list-entry').val();
    STORE.push(new items(userInput));
    //console.log(STORE);
  });
}

function deleteItem(){
//on user input,removes items to the store
}
function checkItem(){
//on user input, toggle the state of the item
}
function main(){
  addItem();
}
$(main);
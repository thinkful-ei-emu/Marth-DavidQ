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
}
function deleteItem(){
//on user input,removes items to the store
}
function checkItem(){
//on user input, toggle the state of the item
}
function main(){
}
$(main);
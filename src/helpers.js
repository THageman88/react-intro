import React from 'react';

function choice(items){
    let randChoice = Math.floor(Math.random()*items.length);
    return items[randChoice] ;   
}

function remove(items, item){

}

export { choice , remove } ;
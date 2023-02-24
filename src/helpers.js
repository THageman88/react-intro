import React from 'react';

function choice(items){
    let randChoice = Math.floor(Math.random()*items.length);
    return items[randChoice] ;   
}

function remove(items, item){
    for (let i = 0 ; i < items.length ; i++){
        if(items[i]===item){
        return [...items.slice(0,i), ...items.slice(+1)]
        }
    }

}

export { choice , remove } ;
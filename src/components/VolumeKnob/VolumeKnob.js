import React from 'react';

export const VolumeKnob = () => {

    let list = [];
    for (let i = 1; i <= 100; i++) {
        list.push(i);
    }
    const listItems = list.map((list) =>
        <li key={list}>{list}</li>
    );

    return(
        <ul className="volumeKnob">
            {listItems}
        </ul>
    )
}
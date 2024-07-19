import React from 'react';

import {Item} from "../Item";

const TodoNonCompleteComponent = (
    {
        items,
        handlerAddItem,
        // lastItemRef
    }) => {

    return (
        <>
            {items.filter(item => !item.completed).map((itemNoComplete, index) => (
                <Item
                    key={itemNoComplete.id}
                    item={itemNoComplete}
                    handlerAddItem={handlerAddItem}
                    // inputRef={index === items.filter(i => !i.completed).length - 1 ? lastItemRef : null}  // Устанавливаем ссылку только для последнего элемента
                />
            ))}


        </>
    );
};

export default TodoNonCompleteComponent;
import React { useState, use Effect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
    const [inputValue, setInputValue] = useState("");
    
    use Effect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue(");
                }
            }, [itemToEdit]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim()) {
            addOrUpdateItem(inputValue);
            setInputValue(");
        }
    }
}
return (
    <form onSubmit={handleSubmit}>
    <input
    type="text"
    value={inputValue}
    onChange={(e) =>
setInputValue(e.target.value)}
/>

)
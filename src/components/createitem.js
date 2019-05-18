import React from 'react';

function CreateItem(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Add items here..."
          onChange={props.onChange}
          value={props.value}
          />
        <input 
          type="submit"
          value="Create"
           />
      </form>
    )
  }

  export default CreateItem;
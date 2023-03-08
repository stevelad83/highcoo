import React from 'react';

export default function Form() {
  return (
    <div>
      <form>
        <label>Line one</label>
        <input type="text" />
        <label>Line two</label>
        <input type="text" />
        <label>Line three</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

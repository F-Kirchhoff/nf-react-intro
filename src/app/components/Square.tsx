import React, { useState } from 'react';

function Square(props): JSX.Element {
  return (
    <button className="square" onClick={() => !props.value && props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;

import React from 'react';
import '../style/Pin.css';

const Pin = (props) => {
  let sizePin = 'medium';

  // if (imageHeight = 4000) {
  //   sizePin = "medium"
  // } else {
  //   sizePin = "small"
  // }

  return (
    <div className="pin">
      <div className="pin_container">
        <div className={`pin_container ${sizePin}`}>
          <img
            src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="skincare products"
          />
        </div>
      </div>
    </div>
  );
};

export default Pin;

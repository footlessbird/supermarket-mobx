// import React from "react";
// import './SupermarketTemplate.css'

// const SupermarketTemplate = ({ items, basket }) => {
//   return (
//     <div className="supermarketTemplate">
//       <div className="items-wrapper">
//         <h2>Products</h2>
//         {items}
//       </div>
//       <div className="basket-wrapper">
//         <h2>basket</h2>
//         {basket}
//       </div>
//     </div>
//   );
// };

// export default SupermarketTemplate;


import React from 'react';
import './SupermarketTemplate.css';

const SupermarketTemplate = ({ items, basket }) => {
  return (
    <div className="supermarketTemplate">
      <div className="items-wrapper">
        <h2>product</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>basket</h2>
        {basket}
      </div>
    </div>
  );
};

export default SupermarketTemplate;
// PencilIcon.js
import React from 'react';
// import './PencilIcon.css'; // Optional: use this for styling

function EditIcon() {

  function handleEditClick(){
    
    console.log('edit button clicked!')
  }
  return (
    <svg
      className="pencil-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      onClick = {(e) => {e.stopPropagation(); handleEditClick()}}
    >
      <g
        fill="#ffffff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: 'normal' }}
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M18.41406,2c-0.256,0 -0.51203,0.09797 -0.70703,0.29297l-2,2l-1.41406,1.41406l-11.29297,11.29297v4h4l14.70703,-14.70703c0.391,-0.391 0.391,-1.02406 0,-1.41406l-2.58594,-2.58594c-0.195,-0.195 -0.45103,-0.29297 -0.70703,-0.29297zM18.41406,4.41406l1.17188,1.17188l-1.29297,1.29297l-1.17187,-1.17187zM15.70703,7.12109l1.17188,1.17188l-10.70703,10.70703h-1.17187v-1.17187z" />
        </g>
      </g>
    </svg>
  );
};

export default EditIcon;

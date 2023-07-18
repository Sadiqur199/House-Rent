import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Authcontext/AuthContext';

const HouseCard = ({ house }) => {
  const { city, bedrooms, bathrooms, size, available, rent, img } = house;
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  const handleClick = () => {
    if (isLoggedIn) {
      if (available) {
        Swal.fire({
          title: 'Yes Book This House',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      } else {
        Swal.fire({
          title: 'Sorry Not Available This House',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow w-[75%]">
      <img className="h-auto w-full" src={img} alt="" />
      <h2 className="text-lg font-bold mb-2">{city}</h2>
      <p>Bedrooms: {bedrooms}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Size: {size}</p>
      <p>Availability: {available ? 'Available' : 'Not available'}</p>
      <p>Rent per month: ${rent}</p>
      <button className="btn btn-wide" onClick={handleClick}>
        Book Now
      </button>
    </div>
  );
};

export default HouseCard;

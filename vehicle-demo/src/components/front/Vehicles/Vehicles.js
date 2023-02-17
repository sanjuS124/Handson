import React from 'react';
import './Vehicles.css'

const Vehicles = ({ Vehicleslist, handleAddVehicle }) => {
    return (
        <div className="Vehicles">
            {Vehicleslist.map((Vehicles) => (
                <div className='card'>
                    <div>
                        <img className='Vehicle-image'
                            src={Vehicles.image}
                            alt={Vehicles.name} />
                    </div>
                    <div>
                        <h3 className='Vehicle-name'>{Vehicles.name}</h3>
                    </div>
                    <div>
                        <h3 className='Vehicle-price'>Price :{Vehicles.Price}</h3>
                    </div>
                    <div>
                        <button className='Vehicle-add-button' onClick={() => handleAddVehicle(Vehicles)}> Add to Favourite</button>
                    </div>
                    <div>
                <a href={Vehicles.link} target="_blank">
                     <button className="btnStyle"> Buy Now </button>
                </a>
                </div>
                </div>
            ))}
        </div>
    );
}

export default Vehicles;
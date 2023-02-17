import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';

// import Games from'../Vehicles/Vehicles';
import SignIn from '../Signin/Signin';
//import Animes from '../Animes/Animes';
import Vehicles from '../Vehicles/Vehicles';
import Favourite from '../Favourites/Favourite';

const Myroutes = ({     Vehicleslist, favourites, handleAddVehicle, handleRemoveVehicle, handleClearance }) => {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={
                    <Vehicles Vehicleslist={Vehicleslist}
                        handleAddVehicle={handleAddVehicle} />}>
                </Route>

                <Route path='/signin' exact element={<SignIn />}>
                </Route>

                <Route path='/cart' exact element={
                    <Favourite favourites={favourites}
                        handleAddVehicle={handleAddVehicle} 
                        handleRemoveVehicle= {handleRemoveVehicle}
                        handleClearance={handleClearance}
                        /> }>
                </Route>

            </Routes>
        </div>
    );
}

export default Myroutes;
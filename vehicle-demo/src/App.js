import React from 'react';
import data from './components/back/Data/Data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/front/Header/Header'
import Myroutes from './components/front/Routes/Routes'


function App() {
  const { Vehicleslist } = data;
  const [favourites, setfavourites] = useState([]);

  const handleAddVehicle = (Vehicle) => {
    const VehicleExist = favourites.find((VehicleItem) => VehicleItem.id === Vehicle.id);

    if (VehicleExist) {
      setfavourites(
        favourites.map((VehicleItem) =>
          VehicleItem.id === Vehicle.id
            ? { ...VehicleExist, quantity: VehicleExist.quantity + 1 } : VehicleItem)
      );
    }
    else {
      setfavourites([...favourites, { ...Vehicle, quantity: 1 }]);
    }
  }

  const handleRemoveVehicle = (Vehicle) => {
    const VehicleExist = favourites.find((VehicleItem) => VehicleItem.id === Vehicle.id);

    if (VehicleExist.quantity === 1) {
      setfavourites(favourites.filter((VehicleItem) => VehicleItem.id !== Vehicle.id));
    }
    else {
      setfavourites(
      favourites.map((VehicleItem) =>
        VehicleItem.id === Vehicle.id
          ? { ...VehicleExist, quantity: VehicleExist.quantity - 1 } : VehicleItem)
      );
    }
  }

  const handleClearance = ()=> {
    setfavourites([]);
  }

  return (
    <div className="App">
     
       <Header/>
       <Myroutes Vehicleslist={Vehicleslist} favourites={favourites}
          handleAddVehicle={handleAddVehicle}
          handleRemoveVehicle={handleRemoveVehicle}
          handleClearance={handleClearance}
        />
   
    </div>
  );
}

export default App;

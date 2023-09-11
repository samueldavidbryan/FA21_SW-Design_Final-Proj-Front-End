import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import AssignItemLoc from "../corporate/AssignItemLoc";
import CreateItem from "../corporate/CreateItem";
import CreateStore from "../corporate/CreateStore";
import Inventory from "../corporate/Inventory";
import RemoveStore from "../corporate/RemoveStore";
import TotalInventory from "../corporate/TotalInventory";
import ListStores from "../corporate/ListStores";
import './Layout';

  
function Corporate() {

  function Layout() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="./Create_Item">Create Item</Link>
            </li>
            <li>
              <Link to="./List_Stores">List Stores</Link>
            </li>
            <li>
              <Link to="./Assign_Item_Loc">Assign Item Location</Link>
            </li>
            <li>
              <Link to="./Create_Store">Create Store</Link>
            </li>
            <li>
              <Link to="./Remove_Store">Remove Store</Link>
            </li>
            <li>
              <Link to="./Total_Inventory">Generate Total Inventory Report</Link>
            </li>
            <li>
              <Link to="./Inventory">Generate Inventory Report</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </div>
    )
  };
  
  return (
    <div>
        <div>
          <h1 className="layout">Corporate</h1>
              <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="Create_Item" element={<CreateItem /> }/>
                <Route path="List_Stores" element={<ListStores /> }/>
                <Route path="Assign_Item_Loc" element={<AssignItemLoc />} />
                <Route path="Create_Store" element={<CreateStore /> }/>
                <Route path="Remove_Store" element={<RemoveStore /> }/>
                <Route path="Inventory" element={<Inventory /> }/>
                <Route path="Total_Inventory" element={<TotalInventory /> }/>
                </Route>
              </Routes>
        </div>
      </div>

  );
};
  
export default Corporate;


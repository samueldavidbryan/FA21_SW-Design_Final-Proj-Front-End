import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import ListStores from "../customer/ListStores";
import FindItemInStore from '../customer/FindItemInStore';
import ItemsInAisleShelf from "../customer/ItemsInAisleShelf";
import BuyItem from "../customer/BuyItem";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./Find_Item_In_Store">Find Item in Store</Link>
          </li>
          <li>
            <Link to="./List_Stores">List Stores</Link>
          </li>
          <li>
            <Link to="./List_Items_In_Aisle_Shelf">List Items on Aisle/Shelf in Store</Link>
          </li>
          <li>
          <Link to ="./Buy_Item">Buy Item</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

function Customer() {
  return (
    <div>
        <div>
          <h1 className="layout">Customer</h1>
              <Routes>
                <Route path="/" element={<Layout />}>
                <Route path="Find_Item_In_Store" element={<FindItemInStore /> }/>
                <Route path="List_Stores" element={<ListStores /> }/>
                <Route path="List_Items_In_Aisle_Shelf" element={<ItemsInAisleShelf /> }/>
                <Route path="Buy_Item" element={<BuyItem />} />
                </Route>
              </Routes>
        </div>
      </div>
  );
};
  
export default Customer;
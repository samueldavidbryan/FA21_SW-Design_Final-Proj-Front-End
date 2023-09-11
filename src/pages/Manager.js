import { Outlet, Link, Routes, Route } from "react-router-dom";
import GenerateInventory from "../manager/GenerateInventory";
import ProcessShipment from "../manager/ProcessShipment";
import GenerateOverstockReport from "../manager/GenerateOverstockReport";
import FillShelves from "../manager/FillShelves";
import ShowMissingItems from "../manager/ShowMissingItems";
// import NoPage from "./NoPage";

function Layout() {
  return(
    <>
    <h1 className="layout"> Manager</h1>
    <nav>
      <ul>
        <li>
          <Link to="./GenerateInventory">Generate Inventory</Link>
        </li>
        <li>
          <Link to="./ProcessShipment">Process Shipment</Link>
        </li>
        <li>
          <Link to="./Generate_Overstock_Report">Generate Overstock Report</Link>
        </li>
        <li>
          <Link to="./Fill_Shelves">Fill Shelves</Link>
        </li>
        <li>
          <Link to="./Show_Missing_Items">Show Missing Items</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>  
  )
};

function Manager() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="GenerateInventory" element={<GenerateInventory />} />
        <Route path="ProcessShipment" element={<ProcessShipment /> }/>
        <Route path="Generate_Overstock_Report" element={<GenerateOverstockReport /> }/>
        <Route path="Fill_Shelves" element={<FillShelves /> }/>
        <Route path="Show_Missing_Items" element={<ShowMissingItems /> }/>
      </Route>
    </Routes>
  )
};
  
export default Manager;
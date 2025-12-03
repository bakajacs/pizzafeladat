import { Routes, Route } from "react-router-dom";
import PizzaList from "./components/PizzaList";
import PizzaDetails from "./components/PizzaDetails";


export default function App() {
return (
<div className="p-6 font-sans">
<Routes>
<Route path="/" element={<PizzaList />} />
<Route path="/pizza/:id" element={<PizzaDetails />} />
</Routes>
</div>
);
}

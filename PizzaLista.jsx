import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function PizzaList() {
const [pizzas, setPizzas] = useState([]);


useEffect(() => {
fetch("https://pizza.sulla.hu/pizza")
.then((res) => res.json())
.then((data) => setPizzas(data));
}, []);


return (
<div>
<h1 className="text-3xl font-bold text-center mb-6">Pizzák listája</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{pizzas.map((pizza) => (
<Link
key={pizza.id}
to={`/pizza/${pizza.id}`}
className="bg-white rounded-2xl shadow-md hover:scale-105 transition p-3 cursor-pointer"
>
<img
src={pizza.kepURL}
alt={pizza.nev}
className="w-full h-48 object-cover rounded-xl"
/>
<div className="mt-3">
<h2 className="text-xl font-bold">{pizza.nev}</h2>
<p>{pizza.leiras}</p>
<p className="text-red-600 font-bold mt-2">{pizza.ar} Ft</p>
</div>
</Link>
))}
</div>
</div>
);
}

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function PizzaDetails() {
const { id } = useParams();
const [pizza, setPizza] = useState(null);


useEffect(() => {
fetch(`https://pizza.sulla.hu/pizza/${id}`)
.then((res) => res.json())
.then((data) => setPizza(data));
}, [id]);


if (!pizza) return <div className="text-center text-xl">Betöltés...</div>;


return (
<div className="flex justify-center">
<div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg">
<Link to="/" className="text-blue-600">← Vissza</Link>
<img
src={pizza.kepURL}
alt={pizza.nev}
className="w-full h-64 object-cover rounded-xl mt-3"
/>
<h2 className="text-3xl font-bold mt-4">{pizza.nev}</h2>
<p className="mt-2">{pizza.leiras}</p>
<p className="text-red-600 font-bold text-2xl mt-4">{pizza.ar} Ft</p>
</div>
</div>
);
}

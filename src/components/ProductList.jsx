import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { addItem } from '../redux/CartSlice.jsx';

const plants = [
 {id:1,name:'Snake Plant',category:'Air-Purifying Plants',price:450,emoji:'🪴',desc:'Architectural leaves, easy-care nature.'},
 {id:2,name:'Spider Plant',category:'Air-Purifying Plants',price:320,emoji:'🌿',desc:'A cheerful classic with arching leaves.'},
 {id:3,name:'Peace Lily',category:'Air-Purifying Plants',price:550,emoji:'🤍',desc:'Elegant foliage and graceful white blooms.'},
 {id:4,name:'Rubber Plant',category:'Air-Purifying Plants',price:650,emoji:'🌱',desc:'Glossy leaves with a bold silhouette.'},
 {id:5,name:'Areca Palm',category:'Air-Purifying Plants',price:720,emoji:'🌴',desc:'Bring a tropical feel to your room.'},
 {id:6,name:'Boston Fern',category:'Air-Purifying Plants',price:390,emoji:'🌿',desc:'Soft, lush fronds for a fresh corner.'},
 {id:7,name:'Aloe Vera',category:'Succulents',price:220,emoji:'🌵',desc:'Sculptural succulent that loves sunlight.'},
 {id:8,name:'Jade Plant',category:'Succulents',price:280,emoji:'🪴',desc:'A compact favourite with plump leaves.'},
 {id:9,name:'Echeveria',category:'Succulents',price:180,emoji:'🌸',desc:'Rosette-shaped leaves in a petite pot.'},
 {id:10,name:'Haworthia',category:'Succulents',price:240,emoji:'🌵',desc:'Striking striped leaves, low fuss.'},
 {id:11,name:'Zebra Plant',category:'Succulents',price:260,emoji:'🌱',desc:'Distinctive white stripes and tidy form.'},
 {id:12,name:'Panda Plant',category:'Succulents',price:250,emoji:'🍃',desc:'Velvety leaves with a silvery finish.'},
 {id:13,name:'ZZ Plant',category:'Low-Light Plants',price:480,emoji:'🪴',desc:'Glossy green leaves and forgiving care.'},
 {id:14,name:'Golden Pothos',category:'Low-Light Plants',price:350,emoji:'🌿',desc:'Trailing vines that brighten shelves.'},
 {id:15,name:'Chinese Evergreen',category:'Low-Light Plants',price:520,emoji:'🍃',desc:'Patterned leaves for a quiet corner.'},
 {id:16,name:'Cast Iron Plant',category:'Low-Light Plants',price:590,emoji:'🌱',desc:'A resilient plant for lower-light rooms.'},
 {id:17,name:'Heartleaf Philodendron',category:'Low-Light Plants',price:420,emoji:'💚',desc:'Heart-shaped leaves on graceful vines.'},
 {id:18,name:'Parlor Palm',category:'Low-Light Plants',price:610,emoji:'🌴',desc:'A compact palm with a soft tropical look.'}
];
const colors = ['sage','sand','rose','mint','cream','olive'];
export default function ProductList() {
 const dispatch=useDispatch(); const items=useSelector(s=>s.cart.items); const added=new Set(items.map(i=>i.id));
 const categories=[...new Set(plants.map(p=>p.category))];
 return <><Navbar/><main className="catalog page-wrap"><div className="page-heading"><div><span className="eyebrow">THE INDOOR JUNGLE</span><h1>Find your green thing.</h1><p>Thoughtful plants for every corner, every light, every plant parent.</p></div><Link className="text-link" to="/cart">View your bag →</Link></div>{categories.map((category,idx)=><section className="plant-category" key={category}><div className="category-heading"><h2>{category}</h2><span>{String(idx+1).padStart(2,'0')} / 03</span></div><div className="plant-grid">{plants.filter(p=>p.category===category).map((plant,i)=><article className="plant-card" key={plant.id}><div className={`plant-art ${colors[(plant.id-1)%colors.length]}`}><span className="plant-number">PLANT Nº {String(plant.id).padStart(2,'0')}</span><span className="plant-emoji" role="img" aria-label={plant.name}>{plant.emoji}</span><span className="art-caption">GROW AT YOUR OWN PACE</span></div><div className="plant-info"><div><h3>{plant.name}</h3><p>{plant.desc}</p></div><strong>₹{plant.price}</strong></div><button className="button add-button" disabled={added.has(plant.id)} onClick={()=>dispatch(addItem(plant))}>{added.has(plant.id)?'✓ Added to Cart':'Add to Cart +'}</button></article>)}</div></section>)}</main></>;
}

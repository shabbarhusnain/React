import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const textDefault="Display Tandem OLED touch display with 1,000 nits sustained brightness, 2,000 nits peak HDR/SDR brightness, and a 10,000,000:1 contrast ratio. Features touch gestures and a Dynamic Island replacing the notch.Design: Thinner and lighter aluminum build in Space Black or Silver with the return of the glowing Apple logo.Chips: M5 Pro or M5 Max.Battery & Weight: Up to 24-hour battery life; starts at 3.0 lbs.Price (US) Starts around $2,899 for the 14-inch model"
 const products =[ {
  name:"MacBook Pro",
  text:"Display Tandem OLED touch display with 1,000 nits sustained brightness, 2,000 nits peak HDR/SDR brightness, and a 10,000,000:1 contrast ratio. Features touch gestures and a Dynamic Island replacing the notch.Design: Thinner and lighter aluminum build in Space Black or Silver with the return of the glowing Apple logo.Chips: M5 Pro or M5 Max.Battery & Weight: Up to 24-hour battery life; starts at 3.0 lbs.Price (US) Starts around $2,899 for the 14-inch model",
  image:"https://www.apple.com/v/macbook-pro/proled-xdr-display/a/images/overview/display/display_hero__yusiu2eockyq_large_2x.avif"
 },
 
{
  name:"Dell XPS 13 (2026)",
  text:"Display: 13.4-inch IPS anti-glare display with 2560 x 1600 resolution and crisp color accuracy. Restores a physical function row and a clearly identifiable tactile trackpad area. Design: Ultraportable, thinner and lighter premium aluminum chassis. Chips: Intel Core 5 CPU with integrated Intel Graphics. Battery & Storage: Extended all-day battery efficiency; includes up to 512GB NVMe SSD and up to 16GB RAM. Price (US): Entry-level configuration starts around $999.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZg3FiDRlWnFXuxpdQ-JL1bomEKcmiacOHe1Sp6c2iw&s=10"
},

{
  name:"Lenovo ThinkPad X1 Carbon Gen 13 (Aura Edition)",
  text:"Display: 14-inch premium display equipped with Aura Edition smart features like Shield, Collaboration, and Wellness modes. Features a flexible 180-degree lay-flat hinge. Design: High-durability MIL-STD-810H certified chassis built from premium recycled carbon fiber and magnesium, weighing under 1kg (2.2 lbs). Chips: Intel Core Ultra 7 (Series 2) with an NPU delivering over 40 TOPS for advanced AI tracking. Battery & Hardware: Integrated 57Whr fast-charging battery; pairs with Intel Arc Xe2 graphics and up to 32GB LPDDR5x RAM. Price (US): Starts around $1,999.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6M_lXitULmeAeX_GEP4Cuo1F1uZ8Squxt-mXVz1r0w&s=10"
},

{
  name:"Asus ROG Zephyrus G14 (2026)",
  text:"Display: 14-inch high-refresh-rate ROG Nebula OLED gaming display with ultra-low response times and vibrant HDR colors. Design: Sleek, lightweight aesthetic aluminum gaming frame with customizable rear lighting zones. Chips: Powered by the flagship Intel Core Ultra 9 386H processor with a dedicated NPU pushing up to 50 TOPS for AI gaming enhancements. Battery & Gaming: High-capacity battery with specialized rapid cooling fans; built for intensive 3D rendering and ray-tracing. Price (US): Starts around $1,799.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsmKdOU56jvLI-paZVLKSNk4S60kU61d7YQWs4Ddh588EXo_lf3Vdb0w&s=10"
},

{
  name:"MacBook Air M4",
  text:"Display: 13-inch or 15-inch Liquid Retina display with slim borders, high color fidelity, and anti-reflective coating. Design: Extremely slim, fanless lightweight aluminum design that operates completely silently. Available in Midnight, Starlight, Silver, and Sky Blue. Chips: Next-gen Apple M4 chip with an advanced Neural Engine for everyday AI tasks. Battery & Hardware: Up to 18-hour real-world battery life; configurations start at 16GB unified memory paired with 256GB or 512GB SSD options. Price (US): Starts at $1,099 for the 13-inch version.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFHlJvQ9tCM5MyQIwmS0-O1E4GAGGR2jMn2S92aVcFA&s=10"
}, {
  name:"MacBook Pro",
  text:"Display Tandem OLED touch display with 1,000 nits sustained brightness, 2,000 nits peak HDR/SDR brightness, and a 10,000,000:1 contrast ratio. Features touch gestures and a Dynamic Island replacing the notch.Design: Thinner and lighter aluminum build in Space Black or Silver with the return of the glowing Apple logo.Chips: M5 Pro or M5 Max.Battery & Weight: Up to 24-hour battery life; starts at 3.0 lbs.Price (US) Starts around $2,899 for the 14-inch model",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKP51MoNNEfMX3xjRLNIKVLEUwFSAwRRMemY848H4YQ&s=10"
},
{
  name:"MacBook Air M4",
  text:"Display: 13-inch or 15-inch Liquid Retina display with slim borders, high color fidelity, and anti-reflective coating. Design: Extremely slim, fanless lightweight aluminum design that operates completely silently. Available in Midnight, Starlight, Silver, and Sky Blue. Chips: Next-gen Apple M4 chip with an advanced Neural Engine for everyday AI tasks. Battery & Hardware: Up to 18-hour real-world battery life; configurations start at 16GB unified memory paired with 256GB or 512GB SSD options. Price (US): Starts at $1,099 for the 13-inch version.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Ke6WduFNAtjIEVufKZIh2gNdGCexMEp38MDBoPo6iA&s=10"
},
{
  name:"MacBook Air M4",
  text:"Display: 13-inch or 15-inch Liquid Retina display with slim borders, high color fidelity, and anti-reflective coating. Design: Extremely slim, fanless lightweight aluminum design that operates completely silently. Available in Midnight, Starlight, Silver, and Sky Blue. Chips: Next-gen Apple M4 chip with an advanced Neural Engine for everyday AI tasks. Battery & Hardware: Up to 18-hour real-world battery life; configurations start at 16GB unified memory paired with 256GB or 512GB SSD options. Price (US): Starts at $1,099 for the 13-inch version.",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsIctkqbjFwxEwqRKHLuXg0AmvoFv5BGyihtYkDz-sw&s=10"
}]
const [color,setColor]=useState("#e6e3e3")
  return (<div style={{backgroundColor:color}}>
  
  <div className='heading'>
    <h1>The Lap Machines</h1>
   <h3>Since 1997</h3>
  </div>
   <div className='overflow-hidden p-4 text-black-900'>
    <p className="animate-[slide-loop_30s_linear_infinite] whitespace-nowrap text-lg font-bold text-blue-600">New Arrivals with limited deals <b>Limited Stock</b></p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
{products.map((product)=>(
  <Card props={product}/>
  ))}
  </div>
  </div>
  );
}
export default App;


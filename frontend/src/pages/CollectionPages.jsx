import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';
const CollectionPages = () => {
    const[products,setProducts]=useState([]);
    const sidebarRef=useRef(null);
    const[isSideBarOpen,setIsSideBarOpen]=useState(false);
    const toggleSideBar=()=>{
        setIsSideBarOpen(!isSideBarOpen);
    };
    const handleClickOutside=(e)=>{
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
            setIsSideBarOpen(false);
        }
    }
    useEffect(()=>{
        document.addEventListener("mousedown",handleClickOutside);
        document.removeEventListener("mousedown",handleClickOutside); 
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            const fetchedProducts=[
               {
        _id:"1",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=1",
                altText:"Stylish Jacket"          
            },
        ],
    },
    {
        _id:"2",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=2",
                altText:"Stylish Jacket"          
            },
        ],
    },
    {
        _id:"3",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=3",
                altText:"Stylish Jacket"          
            },
        ],
    },
    {
        _id:"4",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=4",
                altText:"Stylish Jacket"          
            },
        ],
    },
    {
        _id:"5",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=5",
                altText:"Stylish Jacket"          
            },
        ],
    },
    {
        _id:"6",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=6",
                altText:"Stylish Jacket"          
            },
        ],
    },
    {
        _id:"7",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=7",
                altText:"Stylish Jacket"          
            },
        ],
    },
    {
        _id:"8",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=8",
                altText:"Stylish Jacket"          
            },
        ],
    }, 
    {
        _id:"10",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=10",
                altText:"Stylish Jacket"          
            },
        ],
    }, 
    {
        _id:"9",
        name:"Stylish Jacket",
        price:120,
        images:[
            {
                url:"https://picsum.photos/500/500?random=9",
                altText:"Stylish Jacket"          
            },
        ],
    }, 
            ];
            setProducts(fetchedProducts);
        },1000)
    },[])
  return (
    <div className='flex flex-col lg:flex-row'>
        {/*mobile filter buttn */}
        <button onClick={toggleSideBar} className='lg:hidden border p-2 flex justify-center items-center'>
            <FaFilter className='mr-2'/>
        </button>
        {/*filter sidebar */}
        <div ref={sidebarRef} className={`${isSideBarOpen?"translate-x-0":"-translate-x-full"} 
        fixed z-50 inset-y-0 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
            <FilterSidebar/>
        </div>
        <div className="grow  p-4">
            <h2 className='text-2xl uppercase mb-4'> All  collection</h2>
            {/*sort options */}
            <SortOptions/>
            {/*product grid */}
            <ProductGrid products={products}/>
        </div>
    </div>
  )
}

export default CollectionPages

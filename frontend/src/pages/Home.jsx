import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollection from '../components/Products/GenderCollection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import Featuredsection from '../components/Products/Featuredsection'

const placeholderProducts=[
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

]
const Home = () => {
  return (
    <div>
      <Hero/>
      <GenderCollection/>
      <NewArrivals/>
      {/*best seller section */}
      <h2 className='text-3xl text-center font-bold mb-4'>
        Best Seller
      </h2>
      <ProductDetails/>
      <div className='mx-auto max-w-7xl px-4'>
        <h2 className='text-3xl text-center font-bold mb-4'>
          Top Wears For Women
        </h2>
        <ProductGrid products={placeholderProducts}/>
      </div>
      <FeaturedCollection/>
      <Featuredsection/>
    </div>
  )
}

export default Home

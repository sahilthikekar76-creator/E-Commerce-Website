import React, { useState } from 'react'

const EditProductPage = () => {
    const[productData,setProductData]=useState({
        name:"",
        description:"",
        price:0,
        countInStock:0,
        sku:"",
        category:"",
        brand:"",
        sizes:[],
        colors:[],
        collections:"",
        materials:"",
        gender:"",
        images:[
           {
            url:"https://picsum.photos/200?random=1",
           },
           {
            url:"https://picsum.photos/200?random=2"
           },
        ],
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setProductData((prevdata)=>({
            ...prevdata,
            [name]:value,
        }))
    }
    const handleImageUpload=async(e)=>{
        const file=e.target.files[0];
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='mx-auto max-w-5xl p-6 shadow-md rounded'>
      <h2 className="text-3xl font-bold mb-6 ">Edit Product</h2>
      <form onSubmit={handleSubmit} action="" className="">
        <div className="mb-6">
            <label className='block font-semibold mb-2'>Description</label>
            <textarea name="description" value={productData.description}
            className='w-full border border-gray-300 rounded-md p-2' rows={4} required></textarea>
        </div>
        <div className="mb-6">
            <label className='block font-semibold mb-2'>Product Name</label>
            <input type="text" name="name" value={productData.name}
            onChange={handleChange} className="w-full border border-gray-300 rounde-md p-2" required/>
        </div>
        <div className="mb-6">
            <label className='block font-semibold mb-2'>Price</label>
            <input type="number" name="price" value={productData.price}
            onChange={handleChange} 
            className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-6">
            <label className='block font-semibold mb-2'>Count In Stock</label>
            <input type="number" name="countInStock" value={productData.countInStock}
            onChange={handleChange} 
            className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-6">
            <label className='block font-semibold mb-2'>SKU</label>
            <input type="text" name="sku" value={productData.sku}
            onChange={handleChange} 
            className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-6">
            <label className='block font-semibold mb-2'>Sizes (comma-separated)</label>
            <input type="text" name="sizes" value={productData.sizes.join(", ")}
            onChange={(e)=>setProductData({
                ...productData,
                sizes:e.target.value.split(",").map((size)=>size.trim()),
            })} 
            className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        <div className="mb-6">
            <label className='block font-semibold mb-2'>Colors (comma-separated)</label>
            <input type="text" name="colors" value={productData.colors.join(", ")}
            onChange={(e)=>setProductData({
                ...productData,
                colors:e.target.value.split(",").map((color)=>color.trim()),
            })} 
            className="w-full border border-gray-300 rounded-md p-2" />
        </div>
        
        {/*image uplod */}
        <div className="mb-6">
            <label className='block font-semibold mb-2'>Upload Image</label>
            <input type="file" onChange={handleImageUpload}
            className=" w-full border border-gray-300 rounded-md p-2
            file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0
             file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer" ></input>
             <div className="flex gap-4 mt-4">
                {productData.images.map((image,index)=>(
                    <div key={index} className="">
                        <img src={image.url} alt={image.altText || "Product Image"}
                         className="w-20 h-20object-cover rounded shadow-md" />
                    </div>
                ))}
             </div>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2
         rounded-md hover:bg-green-600 transition-colors">Submit</button>
      </form>
    </div>
  )
}

export default EditProductPage

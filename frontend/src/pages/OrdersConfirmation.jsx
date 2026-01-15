import React from 'react'

const checkout={
    _id:"356",
    createdAt: new Date(),
    checkoutItems:[
        {
            productId:1,
            name:"T-Shirt",
            size:"M",
            color:"Red",
            quantity:"1",
            price:15,
            image:"https://picsum.photos/200?random=1"
        },
        {
            productId:2,
            name:"Jeans",
            size:"L",
            color:"Blue",
            quantity:"1",
            price:20,
            image:"https://picsum.photos/200?random=2"
        },
        {
            productId:3,
            name:"Shirt",
            size:"Xl",
            color:"Black",
            quantity:"10",
            price:20,
            image:"https://picsum.photos/200?random=3"
        },
    ],
    shippingAddress:{
        addresss:"gbrvfcd",
        city:"hntgbrfed",
        country:"gfed",
    },
}

const OrdersConfirmation = () => {
    const calculateEstimatedDelivery=(createdAt)=>{
        const OrderDate=new Date(createdAt);
        OrderDate.setDate(OrderDate.getDate()+10);
        //add 10- days 
        return OrderDate.toLocaleDateString();
    }
  return (
    <div className='mx-auto max-w-4xl p-6 bg-white  '>
        <h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>
            Thank You for Your Order!
        </h1>

        {checkout && <div className='p-6 rounded-lg border'>
            <div className="flex justify-between mb-10">
                {/*order id and date */}
                <div className="space-y-1">
                    <h2  className='text-xl font-semibold'>Order ID: {checkout._id}</h2>
                    <p className='text-gray-500'>Order date: {new Date(checkout.createdAt).toLocaleDateString()}</p>
                </div>
                {/*estimated delivery */}
                <div className="">
                    <p className='text-emerald-700 text-sm'>
                        Estimated Delivery:{calculateEstimatedDelivery(checkout.createdAt)}
                    </p>
                </div>
            </div>
                {/*ordered items */}
                <div className="mb-20 border-t">
                    {checkout.checkoutItems.map((item)=>(
                        <div key={item.productId} className="flex items-center mb-4 mt-8">
                            <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded-md mr-4'></img>
                            <div className="">
                                <h4 className='text-md font-semibold'>{item.name}</h4>
                                <p className='text-sm text-gray-500'>
                                    {item.color} | {item.size}
                                </p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className='text-md'>${item.price}</p>
                                <p className='text-sm text-gray500 '>Qty:{item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/*payment and delivery info */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="">
                        <h4 className='text-lg font-semibold mb-2'>Payment</h4>
                        <p className='text-gray-600'>PayPal</p>
                    </div>
                    {/*delivery info */}
                    <div className="">
                        <h4 className='text-lg font-semiboldmb-2'>Delivery</h4>
                        <p className='text-gray-600'>
                            {checkout.shippingAddress.addresss}
                        </p>
                        <p className='text-gray-600'>{checkout.shippingAddress.city},{},{checkout.shippingAddress.country}</p>
                    </div>
                </div>
            
            </div>}
    </div>
  )
}

export default OrdersConfirmation

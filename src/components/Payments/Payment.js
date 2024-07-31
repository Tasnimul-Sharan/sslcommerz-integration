// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// const Payment = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = async (data) => {
//         const tran_id = new Date().getTime().toString();

//         const paymentData = {
//             ...data,
//             tran_id: tran_id,
//             success_url: 'http://localhost:3000/success',
//             fail_url: 'http://localhost:3000/fail',
//             cancel_url: 'http://localhost:3000/cancel',
//         };

//         try {
//             const response = await axios.post('http://localhost:5000/initiate-payment', paymentData);
//             if (response.data.GatewayPageURL) {
//                 window.location.href = response.data.GatewayPageURL;
//             }
//         } catch (error) {
//             console.error('Error initiating payment:', error);
//         }
//     };

//     // const onSubmit = (data) => {
//     //     console.log(data);
//     //     fetch("http://localhost: 5000/initiate-payment", {
//     //     method: "POST",
//     //     headers: { "content-type": "application/json" },
//     //     body: (data),
//     //     })
//     //     .then((res) => res.json())
//     //     .then((result) => {
//     //     window.location.replace(result.url);
//     //     console.log(result);
//     //     });
//     //     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-semibold mb-6 text-center">SSLCOMMERZ Payment Integration</h2>
//                 <form onSubmit={handleSubmit(onSubmit)} className="w-full">
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Amount"
//                             {...register('amount', { required: 'Amount is required' })}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Currency"
//                             defaultValue="BDT"
//                             {...register('currency', { required: 'Currency is required' })}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         {errors.currency && <p className="text-red-500 text-sm">{errors.currency.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Customer Name"
//                             {...register('cus_name', { required: 'Customer Name is required' })}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         {errors.cus_name && <p className="text-red-500 text-sm">{errors.cus_name.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="email"
//                             placeholder="Customer Email"
//                             {...register('cus_email', { required: 'Customer Email is required' })}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         {errors.cus_email && <p className="text-red-500 text-sm">{errors.cus_email.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Customer Phone"
//                             {...register('cus_phone', { required: 'Customer Phone is required' })}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         {errors.cus_phone && <p className="text-red-500 text-sm">{errors.cus_phone.message}</p>}
//                     </div>
//                     <div className="mb-4">
//                         <input
//                             type="text"
//                             placeholder="Customer Address"
//                             {...register('cus_add1', { required: 'Customer Address is required' })}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         {errors.cus_add1 && <p className="text-red-500 text-sm">{errors.cus_add1.message}</p>}
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         Pay Now
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Payment;


import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Payment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const tran_id = new Date().getTime().toString();

        const paymentData = {
            ...data,
            tran_id: tran_id,
            success_url: 'http://localhost:3000/success',
            fail_url: 'http://localhost:3000/fail',
            cancel_url: 'http://localhost:3000/cancel',
        };

        try {
            const response = await axios.post('http://localhost:5000/initiate-payment', paymentData);

            if (response.data.GatewayPageURL) {
                window.location.href = response.data.GatewayPageURL;
            } else {
                console.error('Payment initiation failed:', response.data);
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">SSLCOMMERZ Payment Integration</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="mb-4">
                        <input
                            type="number"
                            placeholder="Amount"
                            {...register('amount', { required: 'Amount is required' })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Currency"
                            defaultValue="BDT"
                            {...register('currency', { required: 'Currency is required' })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.currency && <p className="text-red-500 text-sm">{errors.currency.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Customer Name"
                            {...register('cus_name', { required: 'Customer Name is required' })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.cus_name && <p className="text-red-500 text-sm">{errors.cus_name.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Customer Email"
                            {...register('cus_email', { required: 'Customer Email is required' })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.cus_email && <p className="text-red-500 text-sm">{errors.cus_email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Customer Phone"
                            {...register('cus_phone', { required: 'Customer Phone is required' })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.cus_phone && <p className="text-red-500 text-sm">{errors.cus_phone.message}</p>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Customer Address"
                            {...register('cus_add1', { required: 'Customer Address is required' })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.cus_add1 && <p className="text-red-500 text-sm">{errors.cus_add1.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;

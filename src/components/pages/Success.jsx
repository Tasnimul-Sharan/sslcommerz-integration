// import React from 'react';

// const Success = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
//             <h1 className="text-2xl font-semibold">Payment Successful!</h1>
//             <p>Thank you for your payment.</p>
//         </div>
//     );
// };

// export default Success;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
            <h1 className="text-2xl font-semibold mb-4">Payment Successful!</h1>
            <p className="mb-6">Thank you for your payment.</p>
            <button
                onClick={handleBackToHome}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Back to Home
            </button>
        </div>
    );
};

export default Success;

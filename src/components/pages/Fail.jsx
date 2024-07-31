import React from 'react';

const Fail = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
            <h1 className="text-2xl font-semibold">Payment Failed!</h1>
            <p>There was an issue with your payment. Please try again.</p>
        </div>
    );
};

export default Fail;

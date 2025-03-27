import React from 'react';

const DonateNow = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] p-6 font-Lora">
            <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Thank You for Choosing to Help! 🐾</h2>
                <img
                    src="assets/image/happy.png"
                    alt="Happy Dog"
                    className="w-40 h-40 mx-auto mb-4"
                />
                <p className="mb-4 text-gray-600">Scan the QR code below to donate:</p>
                <img
                    src="/assets/image/donation-qr.png"
                    alt="Donation QR Code"
                    className="w-64 h-64 mx-auto"
                />
            </div>
        </div>
    );
};

export default DonateNow;

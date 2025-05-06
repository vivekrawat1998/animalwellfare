import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Photos = () => {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/gallery/all`);

                if (Array.isArray(res.data)) {

                    const formattedData = res.data.map(item => ({
                        id: item._id,
                        heading: item.heading || "Untitled",
                        imageUrl: item.images?.length > 0 ? item.images[0].url : "",
                    }));

                    setGalleryData(formattedData);
                } else {
                    console.error("Unexpected API response:", res.data);
                    setGalleryData([]);
                }
            } catch (error) {
                console.error("Error fetching gallery data:", error);
                setGalleryData([]);
            }
        };
        fetchData();
    }, []);

    const gridSpans = [
        'col-span-1 row-span-1',
        'col-span-2 row-span-1',
        'col-span-1 row-span-1',
        'col-span-2 row-span-3',
        'col-span-1 row-span-1',
        'col-span-3 row-span-1',
        'col-span-2 row-span-1',
        'col-span-1 row-span-1',
        'col-span-2 row-span-2',
        'col-span-1 row-span-1',
    ];

    return (
        <div className="w-full h-auto p-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {galleryData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ${gridSpans[index % gridSpans.length]}`}
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.heading || `img-${index + 1}`}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photos;

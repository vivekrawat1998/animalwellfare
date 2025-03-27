import React from 'react';

const Photos = () => {
    const images = [
        '/assets/image/img1.jpg',
        '/assets/image/img2.jpg',
        '/assets/image/img3.jpg',
        '/assets/image/img4.jpg',
        '/assets/image/img5.jpg',
        '/assets/image/img6.jpg',
        '/assets/image/img7.jpg',
        '/assets/image/img8.jpg',
        '/assets/image/img9.jpg',
        '/assets/image/img10.jpg',
    ];

    const gridSpans = [
        'col-span-2 row-span-2',
        '',
        'row-span-2',
        '',
        'col-span-2',
        'row-span-2',
        '',
        'col-span-2',
        '',
        '',
    ];

    return (
        <div className="grid grid-cols-3 grid-rows-6 gap-4 p-4">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`img-${index + 1}`}
                    className={`object-cover w-full h-full rounded-lg ${gridSpans[index]}`}
                />
            ))}
        </div>
    );
};

export default Photos;

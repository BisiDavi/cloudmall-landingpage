import React from "react";

const MovingImage = () => {
    const images = [
        "Ellipse6",
        "Eliipse7",
        "Ellipse8",
        "Ellipse9",
        "Ellipse10",
        "Ellipse11",
        "Ellipse12",
        "Ellipse13",
    ];
    return (
        <div className="animation">
            {images.map((image, index) => (
                <img key={index} src={`/${image}.png`} />
            ))}
        </div>
    );
};

export default MovingImage;

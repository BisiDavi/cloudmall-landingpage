import React from "react";

const HomepageSlider = () => {
    const imgArr = [
        { id: 1, content: [1, 2] },
        { id: 2, content: [3, 4] },
        { id: 3, content: [5, 6] },
        { id: 4, content: [7] },
        { id: 5, content: [8, 9] },
        { id: 6, content: [10, 11] },
        { id: 7, content: [12, 13] },
    ];
    const displayImage = () =>
        imgArr.map((img) => {
            const { content } = img;
            return (
                <div
                    key={img.id}
                    className={`imageplaceholder block-${img.id}`}
                >
                    <div className={`block item-${img.id}`}>
                        {content.map((item) => (
                            <div
                                key={item}
                                className={`item-child child${item}`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <style jsx>{`
                        .block {
                            display: flex;
                            flex-direction: column;
                        }
                        .item-child {
                            color: white;
                            text-align: center;
                            border: none;
                            display: flex;
                            align-items: center;
                            height: 300px;
                            width: 220px;
                            background-color: gray;
                            justify-content: center;
                            border-radius: 20px;
                            margin: 10px 15px;
                        }
                        .imageplaceholder.block-2,
                        .imageplaceholder.block-6 {
                            top: 80px;
                        }

                        .imageplaceholder.block-3,
                        .imageplaceholder.block-5 {
                            top: 160px;
                        }

                        .imageplaceholder.block-4 {
                            top: 190px;
                        }
                        .imageplaceholder {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            position: relative;
                        }
                    `}</style>
                </div>
            );
        });
    return (
        <div className="display-image">
            {displayImage()}
            <style jsx>
                {`
                    .display-image {
                        display: flex;
                        margin-top: 100px;
                        justify-content: center;
                        overflow: hidden;
                    }
                `}
            </style>
        </div>
    );
};

export default HomepageSlider;

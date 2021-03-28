import React from "react";
import Image from "next/image";
import styles from "../../styles/Homepageslider.module.css";

const Slider1 = () => {
    const imgArr = [
        {
            id: 1,
            contents: [
                { url: "/amala.jpeg", id: 1, name: "Order for Amala" },
                {
                    url: "/beansplantain.jpeg",
                    id: 2,
                    name: "Order Beans and Plantain",
                },
            ],
        },
        {
            id: 2,
            contents: [
                {
                    url: "/creamy_icecream.jpeg",
                    id: 3,
                    name: "Order Ice cream",
                },
                { url: "/eba.jpeg", id: 4, name: "Order Eba" },
            ],
        },
        {
            id: 3,
            contents: [
                { url: "/friedrice.jpeg", id: 5, name: "Order Fried rice" },
                { url: "/icecream.jpeg", id: 6, name: "Order Ice cream" },
            ],
        },
        {
            id: 4,
            contents: [{ url: "/pizza.jpeg", id: 7, name: "Order Pizza" }],
        },
        {
            id: 5,
            contents: [
                {
                    url: "/stationary.webp",
                    id: 8,
                    name: "Order for Stationeries",
                },
                { url: "/wine.webp", id: 9, name: "Order for Wine" },
            ],
        },
        {
            id: 6,
            contents: [
                { url: "/yam.jpeg", id: 10, name: "Order Yam and Egg" },
                { url: "/whiterice.webp", id: 11, name: "Order for Rice" },
            ],
        },
        {
            id: 7,
            contents: [
                { url: "/shawarma.jpeg", id: 12, name: "Order Shawarma" },
                {
                    url: "/drugs.jpeg",
                    id: 13,
                    name: "Order for prescribed drugs",
                },
            ],
        },
    ];

    return (
        <div className="display-image">
            {imgArr.map(({ id, contents }) => (
                <div key={id} className={`imageplaceholder block-${id}`}>
                    {contents.map((content) => (
                        <div
                            key={content.id}
                            className={`item-child child-${content.id}`}
                        >
                            <Image
                                className={styles.image}
                                src={content.url}
                                height={240}
                                width={240}
                            />
                            <span className={`back-view ${styles.backView}`}>
                                <h3>{content.name}</h3>
                            </span>
                        </div>
                    ))}
                </div>
            ))}
            <style jsx>
                {`
                    .item-child:hover .back-view {
                        display: flex;
                        position: absolute;
                        top: 0px;
                    }
                    @-webkit-keyframes slideup {
                        from {
                            transform: scaleY(0);
                        }
                        to {
                            transform: scaleY(1);
                        }
                    }
                    @keyframes slideup {
                        from {
                            transform: scaleY(0);
                        }
                        to {
                            transform: scaleY(1);
                        }
                    }
                    .display-image {
                        display: flex;
                        margin-top: 0px;
                        justify-content: center;
                        margin-bottom: 10%;
                    }
                    .block {
                        display: flex;
                        flex-direction: column;
                    }
                    .item-child.child-1 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 1s;
                    }
                    .item-child.child-2 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 2s;
                    }
                    .item-child.child-3 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 3s;
                    }
                    .item-child.child-4 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 4s;
                    }
                    .item-child.child-5 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 5s;
                    }
                    .item-child.child-6 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 6s;
                    }
                    .item-child.child-7 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 7s;
                    }
                    .item-child.child-8 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 8s;
                    }
                    .item-child.child-9 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 9s;
                    }
                    .item-child.child-10 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 10s;
                    }
                    .item-child.child-11 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 11s;
                    }
                    .item-child.child-12 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 12s;
                    }
                    .item-child.child-13 {
                        -webkit-animation: 1s ease-in alternate slideup;
                        animation: 1s ease-in alternate slideup;
                        animation-delay: 13s;
                    }
                    .item-child {
                        color: white;
                        text-align: center;
                        border: none;
                        flex-direction: column;
                        display: flex;
                        align-items: center;
                        height: 240px;
                        position: relative;
                        width: 240px;
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
                    .child-7 {
                        margin-top: 70%;
                    }

                    .imageplaceholder {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        flex-direction: column;
                    }

                    @media (max-width: 768px) {
                        .imageplaceholder.block-4 {
                            height: 100%;
                            width: 100%;
                            margin-top: 50px;
                            border-radius: 50%;
                            margin-left: 5px;
                        }

                        .item-child.child-7 {
                            height: 100%;
                            width: 100%;
                            padding: 0;
                            margin: 0;
                        }

                        .item-child {
                            height: 100%;
                            width: 100%;
                        }
                        .imageplaceholder {
                            margin: 0px 5px;
                            width: 100%;
                            height: 100%;
                        }

                        .item-child:hover .back-view {
                            display: flex;
                            font-size: 10px;
                            border-radius: 50%;
                            height: 100%;
                            width: 100%;
                            top: 0px;
                        }
                    }
                    @media (max-width: 370px) {
                        .display-image {
                            margin-bottom: 55%;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Slider1;

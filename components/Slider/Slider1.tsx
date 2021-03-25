import React from "react";
import Image from "next/image";
import styles from "../../styles/Homepageslider.module.css";
const Slider1 = () => {
    const imgArr = [
        {
            id: 1,
            contents: [
                { url: "/amala.jpeg", name: "Order for Amala" },
                {
                    url: "/beansplantain.jpeg",
                    name: "Order Beans and Plantain",
                },
            ],
        },
        {
            id: 2,
            contents: [
                {
                    url: "/creamy_icecream.jpeg",
                    name: "Order Ice cream",
                },
                { url: "/eba.jpeg", name: "Order Eba" },
            ],
        },
        {
            id: 3,
            contents: [
                { url: "/friedrice.jpeg", name: "Order Fried rice" },
                { url: "/icecream.jpeg", name: "Order Ice cream" },
            ],
        },
        {
            id: 4,
            contents: [{ url: "/pizza.jpeg", name: "Order Pizza" }],
        },
        {
            id: 5,
            contents: [
                { url: "/stationary.jpeg", name: "Order Staionary" },
                { url: "/wine.jpeg" },
            ],
        },
        {
            id: 6,
            contents: [
                { url: "/yam.jpeg", name: "Order Yam and Egg" },
                { url: "/whiterice.jpeg", name: "Order for Rice" },
            ],
        },
        {
            id: 7,
            contents: [
                { url: "/shawarma.jpeg", name: "Order Shawarma" },
                { url: "/drugs.jpeg", name: "Order for prescribed drugs" },
            ],
        },
    ];

    return (
        <div className="display-image">
            {imgArr.map(({ id, contents }) => (
                <div key={id} className={`imageplaceholder block-${id}`}>
                    {contents.map((content) => (
                        <div
                            key={content.name}
                            className={`item-child child-${content}`}
                        >
                            <Image src={content.url} height={280} width={260} />
                        </div>
                    ))}
                </div>
            ))}
            <style jsx>
                {`
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
                        margin-top: 100px;
                        justify-content: center;
                        overflow: hidden;
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
                `}
            </style>
        </div>
    );
};

export default Slider1;

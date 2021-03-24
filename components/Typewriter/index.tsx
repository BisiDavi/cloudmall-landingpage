import React from "react";
import Typewriter from "typewriter-effect";
import styles from "../../styles/Typewriter.module.css";

const TypewriterEffect = () => {
    const data = [
        "Do you need Groceries,Pastries or Raw Foods?",
        "We have you covered, with our reliable delivery services",
    ];

    return (
        <span className={styles.typewriter}>
            <Typewriter
                options={{
                    strings: data,
                    autoStart: true,
                    loop: true,
                }}
            />
        </span>
    );
};

export default TypewriterEffect;

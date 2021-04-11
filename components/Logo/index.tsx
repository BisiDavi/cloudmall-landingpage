import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
    <div className="logo">
        <Link href="/">
            <Image
                src="/Logo-Blue.png"
                alt="Cloudmall Africa logo"
                height={50}
                width={200}
            />
        </Link>
        <style jsx>{`
            .logo {
                display: flex;
                align-items: center;
                cursor: pointer;
            }

            @media (max-width: 500px) {
                .logo {
                    margin-left: -20px;
                }
            }
        `}</style>
    </div>
);

export default Logo;

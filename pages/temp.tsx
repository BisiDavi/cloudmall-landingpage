import React from "react";
import Header from "../components/temp/Header";
import PageSection from "../components/temp/PageSection";
import Footer from "../components/temp/Footer";

const Temp = () => {
    return (
        <>
            <Header />
            <div className="container-fluid content">
                <PageSection />
                <Footer />
                <style jsx>{`
                    .container-fluid.content {
                        padding: 0px 80px;
                        margin-top: 100px;
                    }
                    @media (max-width: 1024px) {
                        .container-fluid.content {
                            padding: 0px 30px;
                        }
                    }
                    @media (max-width: 768px) {
                        .container-fluid.content {
                            padding: 10px 10px 0px 0px;
                            margin-top: 50px;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default Temp;

import React, { FC } from "react";
import DownloadBtn from "./DownloadBtn";
import contents from "./json/content.json";

const displaySection = () =>
    contents.map((content, index) => (
        <section key={index} className="row">
            {content.row.map((row, index) => (
                <div className="col-6" key={index}>
                    <h1>{row.title}</h1>
                    <p>{row.text}</p>
                    <img src={row.image} />
                    {row.downloadBtn && <DownloadBtn />}
                </div>
            ))}
        </section>
    ));

const PageSection: FC = (): JSX.Element => {
    return <>{displaySection()}</>;
};
export default PageSection;

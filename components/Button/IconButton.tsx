import React from "react";
import { Button } from "react-bootstrap";

const IconButton = ({ text, icon }) => {
    return (
        <Button>
            <span>{icon}</span>
            {text}
        </Button>
    );
};
export default IconButton;

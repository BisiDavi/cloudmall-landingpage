import { Modal, Button } from "react-bootstrap";
const PageModal = ({ show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>COOKIE POLICY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>What are Cookies?</p>
                <p>
                    Cookies are small files placed on your computer’s hard drive
                    that enables the website to identify your computer as you
                    view different pages. Cookies allow websites and
                    applications to store your preferences in order to present
                    contents, options or functions that are specific to you.
                    Like most interactive websites, our website uses cookies to
                    enable the tracking of your activity for the duration of a
                    session.{" "}
                </p>
                <p>What Kind of Cookies do we Collect?</p>
                <ul>
                    <p>We collect the following cookies:</p>
                    <li>
                        <p>• Required Cookies</p>
                    </li>
                    <li>
                        <p>• Analytics and Performance Cookies</p>
                    </li>
                    <li>
                        <p>• Security Cookies</p>
                    </li>
                    <li>
                        <p>• Third Party/Embedded Content Cookies</p>
                    </li>
                    <li>
                        <p>• Advertising Cookies</p>
                    </li>
                </ul>
                <style jsx>
                    {`
                        li {
                            list-style: none;
                        }
                    `}
                </style>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default PageModal;

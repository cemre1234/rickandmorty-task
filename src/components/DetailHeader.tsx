import { Col, Row } from "react-bootstrap";

import { BackIcon } from "./icons/BackIcon";
import { Link } from "react-router-dom";

export type TDetailHeaderProps = {
    back: () => void;
    title: string;
}

export const DetailHeader: React.FC<TDetailHeaderProps> = ({
    back,
    title
}) => {

    

    return (
        <Row className="mb-20">
            <Col md={2}>
                <button onClick={back}>Back</button>
            </Col>
            <Col md={10} className="justify-content-end">
                <h1>{title}</h1>
            </Col>
        </Row>
    );
}
import React, { useState } from "react";
import Modal from "./Modal/Modal";
import { Button, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import "./CardProduct.css";

const ItemList = ({ title, picture, stock, description, precio }) => {
    const [showModalDetail, setShowModalDetail] = useState(false);
    const onShowModalDetail = () => setShowModalDetail(!showModalDetail);

    const renderBodyModal = () => {
        return (
            <>
                <img
                    className="card-image-product"
                    src={require(`../images/${picture}.jpg`)}
                    />
                <div className="body-text card-product-body">
                    <span>{`$${precio}`}</span>
                    <span>{description}</span>
                </div>
            </>
        )
    }

    const renderFooterModal = () => {
        return (
            <ItemCount initial={1} stock={stock} />
        )
    }
    return (
        <>
            <Card className="card-product">
                <Card.Img
                    className="card-image-product"
                    variant="top"
                    src={require(`../images/${picture}.jpg`)}
                />
                <Card.Body className="card-product-body">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{`Disponibles ${stock}`}</Card.Text>
                    <Button variant="primary" onClick={onShowModalDetail}>Ver Detalle</Button>
                </Card.Body>
            </Card>
            <Modal
                show={showModalDetail}
                headerProps={{
                    closeButton: true,
                }}
                onClose={onShowModalDetail}
                title={title}
                body={renderBodyModal()}
                footer={renderFooterModal()}
            />
        </>
    );
};

export default ItemList;

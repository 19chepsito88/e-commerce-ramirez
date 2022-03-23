import React from 'react';
import { Modal as BModal } from 'react-bootstrap';

const Modal = ({
    show,
    title,
    body,
    header,
    footer,
    onClose,
    headerProps,
    bodyProps,
    footerProps,
    ...props
}) => {

    return (
        <BModal
            show={show}
            onHide={onClose}
            {...props}
        >
            {
                <BModal.Header {...headerProps}>
                    {title ?
                        <BModal.Title>{title}</BModal.Title> :
                        header || null
                    }
                </BModal.Header>
            }
            {body && <BModal.Body {...bodyProps} >
                {body}
            </BModal.Body>}
            {footer &&
                <BModal.Footer {...footerProps}>
                    {footer}
                </BModal.Footer>}
        </BModal>
    )
};

export default Modal;
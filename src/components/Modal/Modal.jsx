import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Backdrop, ModalWrapper, Wrapper, Title, Button } from './Modal.styled';

const Modal = ({ children, onClose }) => {
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    const modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
    setModalRoot(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  useEffect(() => {
    if (modalRoot) {
      const onPessKeyDown = event => {
        if (event.code === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', onPessKeyDown);

      return () => window.removeEventListener('keydown', onPessKeyDown);
    }
  }, [modalRoot, onClose]);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return modalRoot
    ? createPortal(
        <Backdrop onClick={onBackdropClick}>
          <ModalWrapper>
            <Wrapper>
              <Title>Add contact</Title>
              <Button type="button" onClick={onClose}>
                <AiOutlineClose />
              </Button>
            </Wrapper>
            {children}
          </ModalWrapper>
        </Backdrop>,
        modalRoot
      )
    : null;
}

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

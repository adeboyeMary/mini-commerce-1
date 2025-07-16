'use client';

import { useEffect, useState, Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  onHideOverlay: () => void;
  children: ReactNode;
};

const BackDrop = ({ onHideOverlay }: { onHideOverlay: () => void }) => {
  return <div className={styles.backdrop} onClick={onHideOverlay} />;
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return <div className={styles['modal-container']}>{children}</div>;
};

const Modal = ({ onHideOverlay, children }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const portalElement = document.getElementById('portal-root');
  if (!portalElement) return null;

  return (
    <Fragment>
      {createPortal(<BackDrop onHideOverlay={onHideOverlay} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;

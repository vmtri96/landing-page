'use client'

import { createContext, useContext, useState } from 'react';
import { AlertModal } from '@/components/ui/AlertModal';

interface ModalContextType {
  showAlert: (props: {
    title: string
    message: string
    type?: 'success' | 'error' | 'warning' | 'info'
  }) => void
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalProps, setModalProps] = useState<{
    isOpen: boolean
    title: string
    message: string
    type?: 'success' | 'error' | 'warning' | 'info'
  }>({
    isOpen: false,
    title: '',
    message: '',
    type: 'info',
  });

  const showAlert = ({
    title,
    message,
    type = 'info',
  }: {
    title: string
    message: string
    type?: 'success' | 'error' | 'warning' | 'info'
  }) => {
    setModalProps({
      isOpen: true,
      title,
      message,
      type,
    });
  };

  const closeModal = () => {
    setModalProps((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <ModalContext.Provider value={{ showAlert }}>
      {children}
      <AlertModal
        isOpen={modalProps.isOpen}
        onClose={closeModal}
        title={modalProps.title}
        message={modalProps.message}
        type={modalProps.type}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

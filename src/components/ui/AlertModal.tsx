'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
};

export const AlertModal = ({
  isOpen,
  onClose,
  title,
  message,
  type = 'info'
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 border-green-500 text-green-700';
      case 'error':
        return 'bg-red-100 border-red-500 text-red-700';
      case 'warning':
        return 'bg-yellow-100 border-yellow-500 text-yellow-700';
      default:
        return 'bg-blue-100 border-blue-500 text-blue-700';
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className={`rounded-lg border p-4 shadow-lg ${getTypeStyles()}`}>
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{title}</h3>
                <button
                  onClick={onClose}
                  className="cursor-pointer text-2xl ml-4 text-gray-600 hover:text-gray-800"
                >
                  ×
                </button>
              </div>
              <p className="mt-2">{message}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

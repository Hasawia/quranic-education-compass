
import { useState, useCallback } from 'react';

// هوك للتوست
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ title, description, variant = 'default' }) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = {
      id,
      title,
      description,
      variant,
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    // إزالة التوست بعد 5 ثوانٍ
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const dismiss = useCallback((toastId) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toastId));
  }, []);

  return {
    toasts,
    toast,
    dismiss,
  };
};

export const toast = ({ title, description, variant = 'default' }) => {
  // This is a simple implementation for direct usage
  console.log(`Toast: ${title} - ${description}`);
};

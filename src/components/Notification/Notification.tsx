import { useAppStore } from '@/store/hooks/useAppStore';

import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledNotification } from './Notification.styled';

export const Notification = () => {
  const { notification, setNotification } = useAppStore();

  useEffect(() => {
    if (notification?.message) {
      toast(<StyledNotification>{notification?.message}</StyledNotification>, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: notification?.type,
      });

      const timer = setTimeout(() => {
        setNotification({ message: null, type: undefined });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification?.message]);

  return <ToastContainer />;
};

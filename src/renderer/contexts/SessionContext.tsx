import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  FC,
} from 'react';
import { useHistory } from 'react-router-dom';

interface SessionContextType {
  resetSessionTimeout: () => void;
}

const SESSION_TIMEOUT = 600; // 2 minutes of inactivity

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const history = useHistory();
  const [lastActivity, setLastActivity] = useState<number>(Date.now());
  const timeoutRef = useRef<number | null>(null);

  const resetSessionTimeout = () => {
    setLastActivity(Date.now());
  };

  useEffect(() => {
    const handleUserActivity = () => {
      resetSessionTimeout();
    };

    // Add event listeners for user activity
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  useEffect(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    // Set timeout to redirect to home page after inactivity
    timeoutRef.current = window.setTimeout(() => {
      // history.push('/');
    }, SESSION_TIMEOUT);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [lastActivity, history]);

  return (
    <SessionContext.Provider value={{ resetSessionTimeout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSessionContext must be used within a SessionProvider');
  }
  return context;
};

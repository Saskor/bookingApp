export interface IModalFullScreenProps {
  id: string;
  isOpen: boolean;
  close: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
}

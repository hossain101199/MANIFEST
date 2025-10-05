import { Eye, EyeOff } from "lucide-react";

interface PasswordToggleProps {
  show: boolean;
  onToggle: () => void;
}

const PasswordToggle = ({ show, onToggle }: PasswordToggleProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
    >
      {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
    </button>
  );
};

export default PasswordToggle;

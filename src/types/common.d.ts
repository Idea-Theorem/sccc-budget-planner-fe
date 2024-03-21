import { ButtonProps } from "@mui/material/Button";

interface Children {
  children?: ReactNode;
}

interface SidebarAction {
  role: string;
  title: string;
  path?: string;
  more?: { title: string; path?: string }[];
}

interface ActionsType {
  title: string;
  icon: ReactNode;
  variant: ButtonProps['variant'];
  color:ButtonProps['color'];
  size: ButtonProps['size'];
  onClick: () => void;
}

interface BudgetDetailProps {
  actions: ActionsType[]
  clickBack: () => void
}

interface Children {
  children?: ReactNode;
}

interface SidebarAction {
  role: string;
  title: string;
  path?: string;
  icon?: string;
  more?: { title: string }[];
}

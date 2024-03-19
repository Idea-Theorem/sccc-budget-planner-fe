interface Children {
  children?: ReactNode;
}

interface SidebarAction {
  role: string;
  title: string;
  path?: string;
  more?: { title: string; path?: string }[];
}

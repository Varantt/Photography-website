// File: src/models/types.ts

interface UseFetchArgs<T> {
  isLoading: boolean;
  error: string | null;
  data: T | null;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// props

// project props
interface ProjectProps {
  title: string;
  description: string;
  id: string;
}

// navbar props

interface NavbarProps {
  categoryDropdownItems: DropdownItem[];
}

interface HeaderDropdownProps {
  linkedNavItem: React.RefObject<HTMLElement>;
  data: DropdownItem[];
}

// error props
interface ErrorProps {
  message: string;
}

// end of props

// styles
interface HeaderDropdownStyle {
  visibility: "visible" | "hidden";
  transform: string;
  opacity: string;
  position?: "absolute" | "relative";
}

interface DropdownItem {
  name: string;
  id: number;
  // link: string
}

interface ScrollState {
  isVisible: boolean;
}
export type {
  UseFetchArgs,
  Pagination,
  ProjectProps,
  HeaderDropdownProps,
  DropdownItem,
  ErrorProps,
  NavbarProps,
  HeaderDropdownStyle,
  ScrollState
};

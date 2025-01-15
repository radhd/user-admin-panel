import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import { NAVIGATION_PATH } from "./navigationPath";

export const getNavigationPanelItems = (
  handleDashboardNavigation: () => void,
  handleTableNavigation: () => void,
  currentPath: string
) => [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    action: handleDashboardNavigation,
    disabled: currentPath === NAVIGATION_PATH.dashboard,
  },
  {
    text: "User Management",
    icon: <GroupIcon />,
    action: handleTableNavigation,
    disabled: currentPath === NAVIGATION_PATH.users,
  },
];

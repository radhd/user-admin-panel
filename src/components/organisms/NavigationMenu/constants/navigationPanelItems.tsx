import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
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
  {
    text: "Settings",
    icon: <SettingsIcon />,
    action: () => console.log("Settings clicked"),
  },
  {
    text: "Reports",
    icon: <BarChartIcon />,
    action: () => console.log("Reports clicked"),
  },
  {
    text: "Notifications",
    icon: <NotificationsIcon />,
    action: () => console.log("Notifications clicked"),
  },
  {
    text: "Help",
    icon: <HelpOutlineIcon />,
    action: () => console.log("Help clicked"),
  },
];

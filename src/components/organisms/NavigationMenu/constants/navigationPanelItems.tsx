import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BackupTableIcon from "@mui/icons-material/BackupTable";

export const getNavigationPanelItems = (
  handleDashboardNavigation: () => void,
  handleTableNavigation: () => void
) => [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    action: handleDashboardNavigation,
  },
  {
    text: "Table",
    icon: <BackupTableIcon />,
    action: handleTableNavigation,
  },
  {
    text: "User Management",
    icon: <GroupIcon />,
    action: () => console.log("User Management clicked"),
    disabled: true,
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    action: () => console.log("Settings clicked"),
    disabled: true,
  },
  {
    text: "Reports",
    icon: <BarChartIcon />,
    action: () => console.log("Reports clicked"),
    disabled: true,
  },
  {
    text: "Notifications",
    icon: <NotificationsIcon />,
    action: () => console.log("Notifications clicked"),
    disabled: true,
  },
  {
    text: "Help",
    icon: <HelpOutlineIcon />,
    action: () => console.log("Help clicked"),
    disabled: true,
  },
];

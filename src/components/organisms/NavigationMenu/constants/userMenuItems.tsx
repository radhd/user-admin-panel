const handleProfile = () => console.log("Profile clicked");
const handleSettings = () => console.log("Settings clicked");
const handleDashboard = () => console.log("Dashboard clicked");
const handleLogout = () => console.log("Logout clicked");

export const userMenuItems = [
  {
    label: "Profile",
    action: handleProfile,
  },
  {
    label: "Settings",
    action: handleSettings,
  },
  {
    label: "Dashboard",
    action: handleDashboard,
  },
  {
    label: "Logout",
    action: handleLogout,
  },
];

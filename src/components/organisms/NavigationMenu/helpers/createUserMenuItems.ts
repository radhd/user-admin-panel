export const createUserMenuItems = (handleLogout: () => void) => [
  {
    label: "Profile",
    action: () => console.log("Profile clicked"),
  },
  {
    label: "Settings",
    action: () => console.log("Settings clicked"),
  },
  {
    label: "Dashboard",
    action: () => console.log("Dashboard clicked"),
  },
  {
    label: "Logout",
    action: handleLogout,
  },
];

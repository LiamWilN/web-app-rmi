const BASE_URL = "https://api.dev.readymaninc.com/api/v1";

export const MENU_ITEMS = {
  menu: [
    { id: 0, name: "Overview", link: "/recruitment/overview" },
    { id: 1, name: "Jobs", link: "/recruitment/jobs" },
    { id: 2, name: "Applicants", link: "/recruitment/applicants" },
    { id: 3, name: "Messages", link: "/recruitment/messages" },
    { id: 4, name: "Settings", link: "/recruitment/settings" },
  ],
};

export const OVERVIEW_ITEMS = [
  {
    id: 0,
    name: "Jobs",
    link: "/recruitment/jobs",
  },
  {
    id: 1,
    name: "Applicants",
    link: "/recruitment/jobs",
  },
  {
    id: 2,
    name: "Messages",
    link: "/recruitment/jobs",
  },
];

export default BASE_URL;

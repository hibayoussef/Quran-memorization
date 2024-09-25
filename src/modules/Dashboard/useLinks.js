import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import MuseumIcon from "@mui/icons-material/Museum";
import PreviewIcon from "@mui/icons-material/Preview";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useLinks = () => {
  const location = useLocation();

  const links = useMemo(() => {
    const dynamicLinks = [];
    const staticLinks = [];

      const allLinks = [
        {
          name: "إدارة الحسابات",
          link: location.pathname,
          icon: <PreviewIcon />,
          list: [
            {
              name: "الطّلاب",
              link: "/dashboard/accounts/students",
              icon: <HomeIcon />,
            },
            {
              name: "المدرّسين",
              link: "/dashboard/accounts/teachers",
              icon: <DoorSlidingIcon />,
            },
            {
              name: "المستخدمين",
              link: "/dashboard/accounts/users",
              icon: <AssistantDirectionIcon />,
            },
          ],
        },

        {
          name: "إدارة الدّورات",
          link: location.pathname,
          icon: <PreviewIcon />,
          list: [
            {
              name: "الدّورات",
              link: "/dashboard/courses/all",
              icon: <HomeIcon />,
            },
            {
              name: "طلبات التّسجيل",
              link: "/dashboard/courses/registration-requests",
              icon: <DoorSlidingIcon />,
            },
          ],
        },

        {
          name: "إدارة المستويات",
          link: location.pathname,
          icon: <PreviewIcon />,
          list: [
            {
              name: "المستويات",
              link: "/dashboard/levels/all",
              icon: <HomeIcon />,
            },
            {
              name: "طلبات تحديد المستوى",
              link: "/dashboard/levels/placement-requests",
              icon: <DoorSlidingIcon />,
            },
          ],
        },
        {
          name: "إدارة التّقييمات",
          link: location.pathname,
          icon: <PreviewIcon />,
          list: [
            {
              name: "تقييمات الطّلاب",
              link: "/dashboard/evaluations/student-reviews",
              icon: <FolderSpecialIcon />,
            },
            {
              name: "تقييمات المدرّسين",
              link: "/dashboard/evaluations/teacher-reviews",
              icon: <MuseumIcon />,
            },
          ],
        },
        {
          name: "طلبات النّدريس",
          link: "/dashboard/teaching-requests/all",
          icon: <LockIcon />,
        },
        // {
        //   name: "التّحكم بالموقع الإلكتروني",
        //   link: "/dashboard/admins",
        //   icon: <AdminPanelSettingsIcon />,
        // },
      ];

    for (const link of allLinks) {
      const moduleName = link.name.replace(/_/g, " ");
      const displayName = moduleName.endsWith("s")
        ? moduleName
        : `${moduleName}s`;

        dynamicLinks.push({
          name: displayName,
          link: link.link,
          icon: link.icon,
          list: link.list,
        });
    }

    return [...dynamicLinks, ...staticLinks];
  }, [location.pathname]);

  return {
    links,
  };
};

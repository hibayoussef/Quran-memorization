import loadable from "@loadable/component";

export const AllResponsibleRouting = loadable(() =>
  import("../../modules/teachers/pages/responsibleCourses/ResponsibleRouting")
);
export const TeacherProfileRouting = loadable(() =>
  import("../../modules/teachers/pages/profile/ProfileRouting")
);

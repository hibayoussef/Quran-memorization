import loadable from "@loadable/component";

export const TeacherProfileRouting = loadable(() =>
  import("../../modules/teachers/pages/profile/ProfileRouting")
);

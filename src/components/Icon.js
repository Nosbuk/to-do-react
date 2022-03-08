import React from "react";
import { GoProject, GoOrganization, GoTools, GoPerson, GoBriefcase, GoBeaker, GoDeviceCamera, GoGitCompare, GoRocket } from "react-icons/go";

export default function Icon({ size, name, className }) {
  const categoryIcons = {
    Project: <GoProject className={className} size={size} />,
    Organization: <GoOrganization className={className} size={size} />,
    Tools: <GoTools className={className} size={size} />,
    Person: <GoPerson className={className} size={size} />,
    Briefcase: <GoBriefcase className={className} size={size} />,
    Beaker: <GoBeaker className={className} size={size} />,
    DeviceCamera: <GoDeviceCamera className={className} size={size} />,
    Compare: <GoRocket className={className} size={size} />,
    Rocket: <GoGitCompare className={className} size={size} />,
  };
  return categoryIcons[name];
}

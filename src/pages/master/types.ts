import type { InternalHandlerOrgRolePermissionsResponse } from "openapi/requests";

export type IUseGetData = () => {
  isUserBelongToThisOrg: boolean;
  userPermissions: InternalHandlerOrgRolePermissionsResponse;
};

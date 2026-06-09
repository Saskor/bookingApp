import { useParams } from "@vkontakte/vk-mini-apps-router";
import { useGetMeContext } from "openapi/queries";
import type { InternalHandlerOrgRoleEntryResponse } from "openapi/requests";
import type { IUseGetData } from "./types";
import { nonExistentPositiveNumber } from "constants/shared";

export const useOrgId = () => {
  const { id: orgId } = useParams<string>() || { id: `${nonExistentPositiveNumber}` };

  return { orgId: Number(orgId) };
};

export const useGetData: IUseGetData = () => {
  const { orgId: orgIdUrlParam } = useOrgId();

  const { data: { orgRoles = [] } = {} } = useGetMeContext();
  const currentOrgUserRoles = orgRoles.filter(
    (orgRole: InternalHandlerOrgRoleEntryResponse) => orgRole.orgId === orgIdUrlParam
  );
  const {
    roleId: userRoleId = nonExistentPositiveNumber,
    permissions: userPermissions = {},
  }: InternalHandlerOrgRoleEntryResponse = currentOrgUserRoles?.[0] || {};

  return { isUserBelongToThisOrg: userRoleId >= 0, userPermissions };
};

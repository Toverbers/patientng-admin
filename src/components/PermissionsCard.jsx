import React from "react";
import PermissionItem from "./PermissionItem";


const PermissionsCard = () => {
  return (
    <div className="rounded-lg border p-3 bg-white">
      <PermissionItem title="Dashboard" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Users" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Weekly Challenge" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Products" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Learning hub" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Quiz" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Webinars" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Raffles" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Games" />
      <hr className="my-4 w-full" />
      <PermissionItem title="Roles & Admin" />
    </div>
  );
};

export default PermissionsCard;

"use client";

import React, { Suspense } from "react";
import PublicUserProfile from "./UserClient";

export default function UserProfilePage() {
  return (
    <Suspense fallback={
      <div className="pt-32 flex flex-col items-center justify-center space-y-4">
        <span className="material-symbols-outlined animate-spin text-[36px] text-primary">progress_activity</span>
        <p className="text-sm font-semibold text-outline-variant font-label-caps tracking-wider">LOADING PROFILE...</p>
      </div>
    }>
      <PublicUserProfile />
    </Suspense>
  );
}

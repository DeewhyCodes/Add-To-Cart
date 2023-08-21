import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useSharedContext } from "../../context/SharedAppContex";

const AuthDetails = () => {
  const { isUserMenuVisible, authUser, closeUserMenu } = useSharedContext();

  const userSignOut = () => {
    setTimeout(() => {
      signOut(auth)
        .then(() => {
          closeUserMenu();
        })
        .catch((error) => {
          console.log("Error signing out:", error);
        });
    }, 1000);
  };

  return (
    <div className={`auth_user ${isUserMenuVisible ? "show" : ""}`}>
      {authUser ? (
        <div>
          <p>{`Signed In as: ${authUser.email}`}</p>
          <input type="button" value="Sign Out" onClick={userSignOut} />
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;

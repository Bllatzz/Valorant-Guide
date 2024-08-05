import React from "react";
import '../scss/home.scss';
export default function MainContent({ children }){
    return(
      <main className="main-content">
         {children}
      </main>
    )
}
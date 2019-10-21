import React from "react";
import { loadingGif } from "../imageSouce";

export default function Loading() {
  return (
    <div className="loading">
      <img src={loadingGif} alt="loading" />
    </div>
  );
}

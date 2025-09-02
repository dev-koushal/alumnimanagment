import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import ExplorePage from "./ExplorePage";

function StudenProfileButton() {
  const [image, setImage] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const photo = ExplorePage.find((photo) => photo.id === 1);
    if (photo) setImage(photo.alumniImg);
  }, []);

  return (
    <div
      onClick={() => navigate("/student/profile")}
      className="btn btn-circle btn-secondary btn-dash w-16 h-16 overflow-hidden mr-2 mt-1 mb-1"
    >
      <img className="" src={image} alt="alumniImage" />
    </div>
  );
}

export default StudenProfileButton;

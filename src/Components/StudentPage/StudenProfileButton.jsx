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
      className="btn btn-circle btn-white hover:border-2 border-2 btn-outline w-14 h-14 overflow-hidden mr-4 mt-1 mb-1"
    >
      <img className="" src={image} alt="alumniImage" />
    </div>
  );
}

export default StudenProfileButton;

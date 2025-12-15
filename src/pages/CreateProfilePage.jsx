import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateProfilePage({ profile, onSaveProfile, onDeleteProfile }) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState ("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      setFullName(profile.fullName || "");
      setUsername(profile.username || "");
      setPassword(profile.password || "")
      setImage(profile.image || "");
      setPhone(profile.phone || "");
      setEmail(profile.email || "");
    }
  }, [profile]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      fullName,
      username,
      image,
      phone,
      email,
    };

    onSaveProfile(newProfile);
    navigate("/ProfilePage");

    console.log("Submitted Profile Data:", newProfile);
  };

  const handleDeleteProfile = () => {
    if (window.confirm("Do you want to permanently delete your profile?")) {
      onDeleteProfile();
      navigate("/");
    }
    console.log("Profile deletion initiated.");
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleFormSubmit} className="profileForm">
        <span>Profile Management</span>
        <div className="profileInnerForm">
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              value={fullName}
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label>
            Username
            <input
              name="username"
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              value={image}
              placeholder="Profile Image"
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="create-profile-btn">
          <button type="submit" className="save-profile">
            {profile ? "Update Profile" : "Save Profile"}
          </button>

          <Link to="/ProfilePage" className="go-to-profile-link">
            Go to Profile View
          </Link>

          <Link to="/" className="delete-profile">
            <button type="button" onClick={handleDeleteProfile}>
              Delete Profile
            </button>
          </Link>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
}

export default CreateProfilePage;

// ProfilePage.jsx
import { Link } from "react-router-dom";

function ProfilePage({ profile, isLoggedIn, openLoginModal }) {
  if (!profile) {
    return (
      <div className="profile-page-container">
        <div className="profile-card">
          <h2 className="profile-title">No profile yet</h2>
          <p>Create your profile to see it here.</p>
          <Link to="/CreateProfile" className="profile-action-btn edit-btn">
            Create Profile
          </Link>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="profile-page-container">
        <div className="profile-card">
          <h2 className="profile-title">You are not logged in</h2>
          <p>Log in to view your profile.</p>
          <button class="profile-action-btn edit-btn" onClick={openLoginModal}>
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page-container">
      <div className="profile-card">
        <h2 className="profile-title">Profile</h2>

        <div className="profile-image-section">
          {profile.image && (
            <img
              src={profile.image}
              alt={`${profile.fullName}'s profile`}
              className="profile-picture"
            />
          )}
          <h3 className="profile-full-name">{profile.fullName}</h3>
          <p className="profile-username">@{profile.username}</p>
        </div>

        <div className="profile-details-section">
          <div className="detail-item">
            <span className="icon">📞</span>
            <span>{profile.phone}</span>
          </div>
          <div className="detail-item">
            <span className="icon">✉️</span>
            <span>{profile.email}</span>
          </div>
        </div>

        <div className="profile-actions">
          <Link to="/CreateProfile" className="profile-action-btn edit-btn">
            Edit Profile
          </Link>
          <Link to="/" className="profile-action-btn back-btn">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

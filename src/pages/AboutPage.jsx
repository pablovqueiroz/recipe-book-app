import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="content">
      <div className="profileForm">
        <span>About Us</span>
        
        <div className="profileInnerForm">
          <p className="about-us-p">
            I'm Hungry was created for one simple reason: figuring out what to eat shouldn't be harder than cooking it and
            we know that feeling of opening the fridge, feeling hungry, and having no clue what to make and that's where I'm Hungry comes in. 
          </p>

          <p className="about-us-p">
            Our app helps you discover delicious, easy-to-follow recipes made for your cravings and lifestyle
            whether you're a beginner or a seasoned home cook, we make cooking approachable, fun, and stress-free.
          </p>

          <p className="about-us-p">
            From quick weekday meals to comfort food favorites and new flavors to explore, I'm Hungry is here to inspire you every time hunger strikes. 
          </p>

          <p className="about-us-p">
            Because when you're hungry, the answer should be simple - <span> cook, eat, enjoy.</span>
          </p>
        </div>

        <div className="profile-actions">
          <Link to="/" className="profile-action-btn edit-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;



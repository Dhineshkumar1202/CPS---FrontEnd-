import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../services/authService';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const data = await getUserProfile();
      setUser(data);
    };
    fetchUserProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateUserProfile(user);
    alert('Profile updated successfully!');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <form onSubmit={handleUpdate}>
      <input 
        type="text" 
        value={user.name} 
        onChange={(e) => setUser({ ...user, name: e.target.value })} 
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfile;

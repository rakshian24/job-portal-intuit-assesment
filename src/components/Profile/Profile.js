import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { EXPERIENCE } from '../../constants';
import Card from '../Common/Card/Card';
import FormInput from '../Common/FormInput/FormInput';
import Select from '../Common/Select/Select';
import './Profile.style.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  useEffect(() => {
    console.log('FormData = ', formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="profile-form-wrapper">
      <form className="form">
        <Card>
          <div className="card-title">Personal Details</div>
          <div className="card-content">
            <div className="form-first-row">
              <div>
                <FormInput
                  type="text"
                  label="First name"
                  name="firstName"
                  onChange={handleInputChange}
                  placeholder={'Enter First Name'}
                />
              </div>
              <div>
                <FormInput
                  type="text"
                  label="Last name"
                  name="lastName"
                  onChange={handleInputChange}
                  placeholder={'Enter Last Name'}
                />
              </div>
              <div>
                <FormInput
                  type="text"
                  label="Preferred Location"
                  name="preferredLocation"
                  onChange={handleInputChange}
                  placeholder={'Enter Preferred Location'}
                />
              </div>
            </div>

            <div>
              <Select
                label="Experience"
                name="experience"
                options={EXPERIENCE}
                handleDropdownChange={handleInputChange}
              />
            </div>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default Profile;

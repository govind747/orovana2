import { useState } from 'react';
import { CreditCard as Edit3, Save, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const ProfileSection = () => {
  const { userProfile, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: userProfile?.first_name || '',
    last_name: userProfile?.last_name || '',
    mobile_no: userProfile?.mobile_no || '',
    address_1: userProfile?.address_1 || '',
    address_2: userProfile?.address_2 || '',
    city: userProfile?.city || '',
    state: userProfile?.state || '',
    postal_code: userProfile?.postal_code || '',
    country: userProfile?.country || 'India'
  });

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      first_name: userProfile?.first_name || '',
      last_name: userProfile?.last_name || '',
      mobile_no: userProfile?.mobile_no || '',
      address_1: userProfile?.address_1 || '',
      address_2: userProfile?.address_2 || '',
      city: userProfile?.city || '',
      state: userProfile?.state || '',
      postal_code: userProfile?.postal_code || '',
      country: userProfile?.country || 'India'
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-playfair font-bold text-charcoal">Profile Information</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center space-x-2 text-forest-green hover:text-green-800 transition-colors"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit</span>
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex items-center space-x-2 bg-forest-green text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? 'Saving...' : 'Save'}</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            First Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.first_name || 'Not provided'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Last Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.last_name || 'Not provided'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Email Address
          </label>
          <p className="text-gray-700 py-3">{userProfile?.email}</p>
          <p className="text-xs text-gray-500">Email cannot be changed</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Mobile Number
          </label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.mobile_no}
              onChange={(e) => setFormData({ ...formData, mobile_no: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.mobile_no || 'Not provided'}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-charcoal mb-2">
            Address Line 1
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.address_1}
              onChange={(e) => setFormData({ ...formData, address_1: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
              placeholder="Street address, P.O. Box, company name"
            />
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.address_1 || 'Not provided'}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-charcoal mb-2">
            Address Line 2
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.address_2}
              onChange={(e) => setFormData({ ...formData, address_2: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
              placeholder="Apartment, suite, unit, building, floor, etc."
            />
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.address_2 || 'Not provided'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            City
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.city || 'Not provided'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            State
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.state || 'Not provided'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Postal Code
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.postal_code}
              onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
            />
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.postal_code || 'Not provided'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Country
          </label>
          {isEditing ? (
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent"
            >
              <option value="India">India</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
          ) : (
            <p className="text-gray-700 py-3">{userProfile?.country || 'Not provided'}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
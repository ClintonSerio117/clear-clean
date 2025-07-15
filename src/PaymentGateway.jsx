import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import flameIcon from './assets/flame-icon.png'
import AccessRequest from "./pages/AccessRequest";

const PaymentGateway = ({ onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    paymentMethod: 'stripe'
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsProcessing(true)
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Generate access code
      const accessCode = Math.random().toString(36).substring(2, 15).toUpperCase()
      
      // Store user data (in a real app, this would go to your backend)
      const userData = {
        ...formData,
        accessCode,
        purchaseDate: new Date().toISOString(),
        workshopAccess: true
      }
      
      localStorage.setItem('clintonSerioWorkshopAccess', JSON.stringify(userData))
      
      // Show success message
      alert(`Payment successful! 
      
Welcome to the 7-Day Blessing Week Workshop, ${formData.firstName}!

Your access code: ${accessCode}

You will receive an email at ${formData.email} with:
- Your workshop access link
- PDF downloads for all 7 days
- Bonus content access
- WhatsApp group invitation

Check your email within the next 5 minutes.`)
      
      onSuccess(userData)
      
    } catch (error) {
      alert('Payment failed. Please try again or contact support.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleAccessRequestSubmit = (e) => {
    e.preventDefault();
    // You can send the value to your backend or email service here
    setSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-gray-900 border border-yellow-400/30 rounded-lg p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <img src={flameIcon} alt="flame" className="w-8 h-8 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">
            Join the 7-Day Blessing Week Workshop
          </h2>
          <p className="text-gray-300">
            Transform your energy field with Clinton Serio's proven techniques
          </p>
        </div>

        {!submitted ? (
        <form onSubmit={handleAccessRequestSubmit} className="space-y-4">
          {/* Personal Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full p-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-600'
                }`}
                placeholder="Enter first name"
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-medium">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full p-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-600'
                }`}
                placeholder="Enter last name"
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-medium">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
            <p className="text-gray-400 text-xs mt-1">
              Workshop access and materials will be sent to this email
            </p>
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm font-medium">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="For WhatsApp group invitation"
            />
            <p className="text-gray-400 text-xs mt-1">
              Optional: For WhatsApp support group access
            </p>
          </div>

          {/* Payment Method Selection */}
          <div>
            <label className="block text-gray-300 mb-3 text-sm font-medium">
              Payment Method
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center p-3 bg-gray-800 border border-gray-600 rounded-lg cursor-pointer hover:border-yellow-400/50 transition-all">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={formData.paymentMethod === 'stripe'}
                  onChange={handleInputChange}
                  className="mr-3 text-yellow-400"
                />
                <div>
                  <div className="text-white font-medium">Stripe</div>
                  <div className="text-gray-400 text-xs">Credit/Debit Card</div>
                </div>
              </label>
              
              <label className="flex items-center p-3 bg-gray-800 border border-gray-600 rounded-lg cursor-pointer hover:border-yellow-400/50 transition-all">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                  className="mr-3 text-yellow-400"
                />
                <div>
                  <div className="text-white font-medium">PayPal</div>
                  <div className="text-gray-400 text-xs">PayPal Account</div>
                </div>
              </label>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">$97 USD</div>
            <div className="text-gray-300 mb-4">Complete 7-Day Workshop Package</div>
            <div className="text-sm text-gray-400 space-y-1">
              <div>✓ 7 Days of Energy Mastery Content</div>
              <div>✓ Downloadable PDF Guides</div>
              <div>✓ Bonus: Blessing Mix Recipe</div>
              <div>✓ WhatsApp Support Group Access</div>
              <div>✓ Lifetime Access to Materials</div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="text-xs text-gray-400 space-y-2">
            <p>
              By proceeding with payment, you agree to our terms of service and privacy policy. 
              This is a digital product with immediate access upon payment confirmation.
            </p>
            <p>
              For support, contact: support@clintonserio.com
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                isProcessing
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
              }`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  Processing Payment...
                </div>
              ) : (
                `Secure Payment - $97 USD`
              )}
            </button>
            
            <button
              type="button"
              onClick={onClose}
              disabled={isProcessing}
              className="w-full bg-gray-700 text-gray-300 py-3 rounded-lg hover:bg-gray-600 transition-all disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Thank you!</h2>
            <p>
              We’ve received your request. We’ll send you a code soon to unlock further access.
            </p>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure 256-bit SSL encryption
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaymentGateway />} />
      <Route path="/access-request" element={<AccessRequest />} />
    </Routes>
  );
}

export default App


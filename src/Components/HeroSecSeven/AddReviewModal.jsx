import React, { useState } from 'react';
import { X } from 'lucide-react';
import './AddReviewModal.css';

const AddReviewModal = ({ isOpen, onClose, onAddReview }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    review: '',
    rating: 5
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.review) return;

    onAddReview(formData);
    setFormData({ name: '', role: '', review: '', rating: 5 });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">Share Your Experience</h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">Let us know how our services impacted your brand or platform.</p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Your Full Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter Your Name"
              className="modal-input"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Your Role & Company</label>
            <input 
              type="text" 
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
              placeholder="e.g. CEO, TechNova"
              className="modal-input"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Rating (1-5)</label>
              <select 
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                className="modal-input cursor-pointer"
              >
                <option value={5} className="bg-slate-900">5 - Excellent</option>
                <option value={4} className="bg-slate-900">4 - Very Good</option>
                <option value={3} className="bg-slate-900">3 - Good</option>
                <option value={2} className="bg-slate-900">2 - Fair</option>
                <option value={1} className="bg-slate-900">1 - Poor</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">Your Review</label>
            <textarea 
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Write your feedback here..."
              className="modal-input resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <button 
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-semibold transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Submit Review
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddReviewModal;
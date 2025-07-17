
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Eye, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

interface ComplaintData {
  type: string;
  description: string;
  image?: File;
  idNumber: string;
}

const ComplaintForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<ComplaintData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<ComplaintData>();

  const complaintTypes = [
    'Street Lighting',
    'Waste Management',
    'Road Infrastructure',
    'Water & Drainage',
    'Parks & Green Spaces',
    'Public Utilities',
    'Noise Pollution',
    'Traffic Issues',
    'Other'
  ];

  const onSubmit = (data: ComplaintData) => {
    const finalData = { ...data, image: selectedImage };
    setFormData(finalData);
    setSubmitted(true);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto"
        >
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Complaint Submitted!</h1>
          <p className="text-white/80 mb-8">
            Thank you for your report. We'll review it and get back to you within 24 hours.
          </p>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            File a <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Complaint</span>
          </h1>
          <p className="text-xl text-white/80">Help us improve your community by reporting issues</p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-center space-x-8">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                  step >= num ? 'bg-blue-500 text-white' : 'bg-white/20 text-white/60'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {num}
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-4 text-white/60">
            <span className={step >= 1 ? 'text-white' : ''}>Type</span>
            <span className={step >= 2 ? 'text-white' : ''}>Description</span>
            <span className={step >= 3 ? 'text-white' : ''}>Image</span>
            <span className={step >= 4 ? 'text-white' : ''}>Verification</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Step 1: Complaint Type */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Select Complaint Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {complaintTypes.map((type) => (
                  <motion.label
                    key={type}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <input
                      {...register('type', { required: 'Please select a complaint type' })}
                      type="radio"
                      value={type}
                      className="sr-only"
                    />
                    <span className="text-white font-medium">{type}</span>
                  </motion.label>
                ))}
              </div>
              {errors.type && <p className="text-red-400 mt-2">{errors.type.message}</p>}
            </motion.div>
          )}

          {/* Step 2: Description */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Describe the Issue</h2>
              <textarea
                {...register('description', { required: 'Please provide a description' })}
                rows={6}
                placeholder="Please provide a detailed description of the issue..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              />
              {errors.description && <p className="text-red-400 mt-2">{errors.description.message}</p>}
              <p className="text-white/60 text-sm mt-2">
                {watch('description')?.length || 0} / 500 characters
              </p>
            </motion.div>
          )}

          {/* Step 3: Image Upload */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Upload Image (Optional)</h2>
              <ImageUpload 
                onImageSelect={setSelectedImage}
                selectedImage={selectedImage}
              />
            </motion.div>
          )}

          {/* Step 4: ID Verification */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6">AADHAR Verification</h2>
              <input
                {...register('idNumber', { required: 'ID number is required' })}
                type="text"
                placeholder="Enter your Aadhar number"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {errors.idNumber && <p className="text-red-400 mt-2">{errors.idNumber.message}</p>}
              
              {/* Preview */}
              <div className="mt-8 p-6 bg-white/10 rounded-lg">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Preview
                </h3>
                <div className="space-y-2 text-white/80">
                  <p><strong>Type:</strong> {watch('type') || 'Not selected'}</p>
                  <p><strong>Description:</strong> {watch('description') || 'No description'}</p>
                  <p><strong>Image:</strong> {selectedImage ? selectedImage.name : 'No image uploaded'}</p>
                  <p><strong>ID:</strong> {watch('idNumber') || 'Not provided'}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <motion.button
                type="button"
                onClick={prevStep}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Previous
              </motion.button>
            )}

            {step < 4 ? (
              <motion.button
                type="button"
                onClick={nextStep}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all flex items-center gap-2 ml-auto"
              >
                Next
                <ArrowRight size={20} />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all font-semibold ml-auto"
              >
                Submit Complaint
              </motion.button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;

"use client";

import { useState } from "react";

const FormValidator = ({ children, onSubmit, className = "" }) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value, rules) => {
    const fieldErrors = [];

    if (rules.required && !value.trim()) {
      fieldErrors.push("Trường này là bắt buộc");
    }

    if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      fieldErrors.push("Email không hợp lệ");
    }

    if (rules.phone && value && !/^[0-9+\-\s()]{10,}$/.test(value)) {
      fieldErrors.push("Số điện thoại không hợp lệ");
    }

    if (rules.minLength && value && value.length < rules.minLength) {
      fieldErrors.push(`Tối thiểu ${rules.minLength} ký tự`);
    }

    if (rules.maxLength && value && value.length > rules.maxLength) {
      fieldErrors.push(`Tối đa ${rules.maxLength} ký tự`);
    }

    if (rules.pattern && value && !rules.pattern.test(value)) {
      fieldErrors.push(rules.patternMessage || "Định dạng không hợp lệ");
    }

    return fieldErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {};
    const newErrors = {};

    // Validate all fields
    for (let [name, value] of formData.entries()) {
      const field = e.target.elements[name];
      const rules = field.dataset.rules ? JSON.parse(field.dataset.rules) : {};

      const fieldErrors = validateField(name, value, rules);
      if (fieldErrors.length > 0) {
        newErrors[name] = fieldErrors;
      }
      data[name] = value;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      if (onSubmit) {
        await onSubmit(data);
      }
      setSubmitStatus("success");
      setErrors({});
      e.target.reset();
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (name) => {
    return errors[name] ? errors[name][0] : null;
  };

  const isFieldValid = (name) => {
    return !errors[name];
  };

  return (
    <div className={className}>
      {children({
        handleSubmit,
        errors,
        getFieldError,
        isFieldValid,
        isSubmitting,
        submitStatus,
      })}

      {submitStatus === "success" && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-green-800 font-medium">
              Gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-red-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-red-800 font-medium">
              Có lỗi xảy ra. Vui lòng thử lại sau.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormValidator;

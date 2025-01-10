import React, { useState } from "react";
import { toast } from "react-toastify";

import Button from "../Button";

import error from "../../messages/error";
import notification from "../../messages/toast-notification";

interface ContactFormProps {
  onContactFormSubmit: () => void;
}

const ContactForm = ({ onContactFormSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phoneNumber" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      phoneNumber: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = error.INVALID_NAME;
    }

    if (!/^\+?\d{10}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = error.PHONE;
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success(notification.ORDER_SUCCESS);
      onContactFormSubmit();
    }
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto">
      <div className="mb-4">
        <label className="text-primary-100 mb-2 block font-bold">
          Full Name
        </label>
        <input
          data-testid="fullName-input"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          className={`w-full border p-2 ${
            errors.fullName ? "border-danger" : "border-accent-200"
          } rounded-lg`}
        />
        {errors.fullName && (
          <small className="text-danger mt-1 block">{errors.fullName}</small>
        )}
      </div>

      <div className="mb-4">
        <label className="text-primary-100 mb-2 block font-bold">
          Phone Number
        </label>
        <input
          data-testid="phoneNumber-input"
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onChange}
          className={`w-full border p-2 ${
            errors.phoneNumber ? "border-danger" : "border-accent-200"
          } rounded-lg`}
        />
        {errors.phoneNumber && (
          <small className="text-danger mt-1 block">{errors.phoneNumber}</small>
        )}
      </div>

      <Button onClick={() => {}} type="submit" text="Submit" />
    </form>
  );
};

export default ContactForm;

'use client'
import { useState } from 'react';
import { sendEmail } from '../services/EmailSender';
import { ContactForm } from '@/models/Contact';
import { ContactErrors } from '@/models/Contact';
import { useModal } from '@/contexts/ModalContext';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactErrors>({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const { showAlert } = useModal();

  const validateForm = (): boolean => {
    const formErrors: ContactErrors = { name: '', phoneNumber: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      formErrors.phoneNumber = 'Phone number is required';
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return;
    }

    console.info('Form submitted:', formData);
    sendEmail(formData).then(() => {
      showAlert({
        title: 'Thành công!',
        message: 'Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ sớm liên hệ đến bạn!',
        type: 'success'
      });
    }).catch((error) => {
      console.error('Email was sent failed.', error)
    });
    
    setFormData({ name: '', email: '', phoneNumber: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-gray-600">
              Bạn đã sẵn sàng bắt đầu quá trình chuyển đổi số chưa? Hãy liên hệ với chúng tôi ngay hôm nay.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="md:flex md:flex-row gap-6">
              <div className="flex-1 mb-5 md:mb-0">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-transparent"
                  placeholder="Họ và tên của bạn"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                { errors.name && <span className="text-red-500 text-xs">{errors.name}</span> }
              </div>
              <div className="flex-1">
                <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-transparent"
                  placeholder="Số điện thoại của bạn"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                { errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber}</span> }
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-transparent"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              { errors.email && <span className="text-red-500 text-xs">{errors.email}</span> }
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Nội dung liên hệ
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-transparent"
                placeholder="Nội dung liên hệ"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              { errors.message && <span className="text-red-500 text-xs">{errors.message}</span> }
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors cursor-pointer"
              >
                Gửi liên hệ
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

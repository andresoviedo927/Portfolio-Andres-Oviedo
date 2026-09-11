import React, { useState } from 'react';
import { CONTACT_DATA, TEXTS } from '../constants';
import { Icon } from './ui/Icon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: TEXTS.contactModal.projectTypes[0],
    message: '',
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-surface-dark/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-modal-container"
        className="bg-surface-primary w-full max-w-xl rounded-[32px] shadow-elevation-large overflow-hidden relative border border-divider-soft animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-border-subtle flex items-center justify-between bg-surface-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
            <h3 className="font-semibold text-text-primary text-title-md sm:text-title-lg">
              {TEXTS.contactModal.title}
            </h3>
          </div>

          <button
            id="close-contact-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-divider-soft/60 text-text-primary transition-colors cursor-pointer"
            aria-label={TEXTS.contactModal.close}
          >
            <Icon name="close" className="icon-lg" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Direct Email Card */}
          <div className="p-4 rounded-2xl bg-surface-secondary border border-divider-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0">
                <Icon name="email" className="icon-lg" />
              </div>
              <div>
                <div className="text-body-sm text-text-secondary font-medium">
                  {TEXTS.contactModal.directEmail}
                </div>
                <div className="text-body-md font-semibold text-text-primary select-all">
                  {CONTACT_DATA.email}
                </div>
              </div>
            </div>

            <button
              id="copy-email-btn"
              onClick={handleCopyEmail}
              className="px-3.5 py-1.5 rounded-xl bg-surface-primary border border-divider hover:border-brand-primary text-body-sm font-medium text-text-primary flex items-center gap-1.5 transition-all shadow-elevation-small cursor-pointer"
            >
              {copied ? (
                <>
                  <Icon name="check" className="icon-sm text-status-success" />
                  <span className="text-status-success-text font-semibold">
                    {TEXTS.contactModal.copied}
                  </span>
                </>
              ) : (
                <>
                  <Icon name="copy" className="icon-sm text-brand-primary" />
                  <span>{TEXTS.contactModal.copyEmail}</span>
                </>
              )}
            </button>
          </div>

          {formSent ? (
            <div className="py-8 text-center space-y-3 bg-status-success-soft rounded-2xl border border-status-success-border p-6">
              <div className="w-12 h-12 rounded-full bg-status-success text-text-inverse flex items-center justify-center mx-auto shadow-elevation-small">
                <Icon name="check" className="icon-xl" />
              </div>
              <h4 className="text-title-lg font-semibold text-status-success-text">
                {TEXTS.contactModal.successTitle}
              </h4>
              <p className="text-body-sm sm:text-body-md text-status-success-text max-w-sm mx-auto">
                {TEXTS.contactModal.successPrefix} <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setFormSent(false);
                  onClose();
                }}
                className="mt-2 px-5 py-2 rounded-xl bg-status-success text-text-inverse text-body-sm font-medium cursor-pointer"
              >
                {TEXTS.contactModal.back}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-body-sm font-semibold text-text-primary mb-1">
                    {TEXTS.contactModal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={TEXTS.contactModal.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-divider-soft bg-surface-secondary text-body-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-primary"
                  />
                </div>

                <div>
                  <label className="block text-body-sm font-semibold text-text-primary mb-1">
                    {TEXTS.contactModal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={TEXTS.contactModal.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-divider-soft bg-surface-secondary text-body-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-text-primary mb-1">
                  {TEXTS.contactModal.projectTypeLabel}
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-divider-soft bg-surface-secondary text-body-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-primary"
                >
                  {TEXTS.contactModal.projectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-body-sm font-semibold text-text-primary mb-1">
                  {TEXTS.contactModal.messageLabel}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={TEXTS.contactModal.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-divider-soft bg-surface-secondary text-body-md focus:outline-none focus:ring-2 focus:ring-brand-primary text-text-primary resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-body-sm font-medium text-text-secondary hover:text-text-primary cursor-pointer"
                >
                  {TEXTS.contactModal.cancel}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-text-inverse text-body-sm font-semibold transition-all shadow-elevation-medium flex items-center gap-2 cursor-pointer"
                >
                  <span>{TEXTS.contactModal.send}</span>
                  <Icon name="send" className="icon-sm" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

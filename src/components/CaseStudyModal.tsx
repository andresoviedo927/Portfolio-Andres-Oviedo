import React, { useState } from 'react';
import { TEXTS } from '../constants';
import type { ProjectItem } from '../types';
import { Icon } from './ui/Icon';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'impact'>('overview');

  if (!project) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-surface-dark/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="case-study-modal-container"
        className="bg-surface-primary w-full max-w-4xl max-h-[90vh] rounded-[32px] shadow-elevation-large overflow-hidden flex flex-col relative border border-divider-soft animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-border-subtle flex items-center justify-between bg-surface-secondary">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="text-body-sm font-lexend font-semibold uppercase tracking-wider text-text-secondary">
              {project.category} • {project.year}
            </span>
          </div>

          <button
            id="close-case-study-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-divider-soft/60 text-text-primary transition-colors cursor-pointer"
            aria-label={TEXTS.caseStudy.close}
          >
            <Icon name="close" className="icon-lg" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-title-lg sm:text-headline-sm font-semibold text-text-primary tracking-tight mb-1">
              {project.title}
            </h2>
            <p className="text-brand-primary font-medium text-body-md sm:text-body-lg">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-surface-secondary border border-divider/40">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center">
                  <div
                    className="text-title-lg sm:text-headline-sm font-semibold tracking-tight"
                    style={{ color: project.accentColor }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-body-sm text-text-secondary font-medium mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Section Navigation Tabs */}
          <div className="flex border-b border-divider-soft gap-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 text-title-sm font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-brand-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {TEXTS.caseStudy.tabs.overview}
              {activeTab === 'overview' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-2 text-title-sm font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'features'
                  ? 'text-brand-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {TEXTS.caseStudy.tabs.features}
              {activeTab === 'features' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`pb-2 text-title-sm font-semibold transition-colors relative cursor-pointer ${
                activeTab === 'impact'
                  ? 'text-brand-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {TEXTS.caseStudy.tabs.impact}
              {activeTab === 'impact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary" />
              )}
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-title-sm font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  {TEXTS.caseStudy.context}
                </h3>
                <p className="text-body-md sm:text-body-lg text-text-body">
                  {project.overview || project.description}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-status-warning-soft/60 border border-status-warning-border/60">
                <h4 className="text-title-sm font-semibold uppercase tracking-wider text-status-warning-text mb-1">
                  {TEXTS.caseStudy.challenge}
                </h4>
                <p className="text-body-sm sm:text-body-md text-status-warning-text">
                  {project.challenge || TEXTS.caseStudy.fallbackChallenge}
                </p>
              </div>

              <div>
                <h3 className="text-title-sm font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  {TEXTS.caseStudy.tags}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-surface-secondary text-text-primary text-body-sm font-medium border border-divider-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Solution & Features */}
          {activeTab === 'features' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-title-sm font-semibold uppercase tracking-wider text-text-secondary mb-2">
                  {TEXTS.caseStudy.solution}
                </h3>
                <p className="text-body-md sm:text-body-lg text-text-body">{project.solution}</p>
              </div>

              {project.features && (
                <div>
                  <h4 className="text-title-sm font-semibold uppercase tracking-wider text-text-primary mb-3">
                    {TEXTS.caseStudy.keyFeatures}
                  </h4>
                  <div className="space-y-2.5">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-body-sm sm:text-body-md text-text-body"
                      >
                        <Icon
                          name="checkCircle"
                          className="icon-md shrink-0 mt-0.5"
                          style={{ color: project.accentColor }}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Impact */}
          {activeTab === 'impact' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-title-sm font-semibold uppercase tracking-wider text-text-secondary mb-3">
                  {TEXTS.caseStudy.deliverables}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables?.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface-secondary border border-divider-soft flex items-center gap-2.5 text-body-sm sm:text-body-md font-medium text-text-primary"
                    >
                      <Icon name="layers" className="icon-md text-brand-primary" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-brand-soft/20 border border-brand-soft/60">
                <h4 className="text-title-sm font-semibold uppercase tracking-wider text-brand-primary mb-1">
                  {TEXTS.caseStudy.client}
                </h4>
                <p className="text-body-sm sm:text-body-md text-text-body">
                  {TEXTS.caseStudy.clientPrefix} <strong>{project.client}</strong>{' '}
                  {TEXTS.caseStudy.clientSuffix}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-8 py-4 border-t border-border-subtle bg-surface-secondary flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-body-sm text-text-secondary">
            <span>{TEXTS.caseStudy.invitation}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-body-sm font-medium text-text-secondary hover:text-text-primary cursor-pointer"
            >
              {TEXTS.caseStudy.closeAction}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-5 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-text-inverse text-body-sm font-medium transition-all shadow-elevation-small cursor-pointer"
            >
              {TEXTS.caseStudy.contactAction}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

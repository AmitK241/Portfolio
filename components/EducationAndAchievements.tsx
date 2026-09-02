"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Award, BadgeCheck, Calendar, Eye, GraduationCap, ShieldCheck, X } from "lucide-react";
import { achievements, certifications, education, type Certification } from "@/lib/data";
import { SectionHeading } from "./ui";

export default function EducationAndAchievements() {
  const [previewCert, setPreviewCert] = useState<Certification | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!previewCert) return;

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreviewCert(null);
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [previewCert]);

  return (
    <section id="education" className="scroll-mt-28 border-t border-line py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="04 / Origin"
          title="Education, certifications &amp; honors"
          description="Academic foundation at MNNIT Allahabad, verified credentials in deep learning &amp; software engineering, and recognized hackathon honors."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="panel panel-hover flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-line pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-violet-soft">
                    <GraduationCap size={16} />
                  </div>
                  <p className="eyebrow !text-violet-soft">Education</p>
                </div>
                <span className="rounded-full border border-green/30 bg-green/10 px-2 py-0.5 font-mono text-[11px] uppercase text-green">
                  Enrolled
                </span>
              </div>

              {education.map((ed) => (
                <div key={ed.degree} className="space-y-2">
                  <h3 className="font-display text-base font-bold tracking-tight text-ink">{ed.degree}</h3>
                  <p className="text-[13.5px] font-medium text-muted">{ed.institution}</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-violet-soft">
                    {ed.period}
                  </p>
                  <p className="pt-2 text-[13px] leading-relaxed text-dim">{ed.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-line/60 pt-3.5 font-mono text-[11px] text-muted">
              Core Subjects: OOPs &middot; OS &middot; CN &middot; DBMS &middot; DSA
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="panel panel-hover flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-line pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-violet-soft">
                    <BadgeCheck size={16} aria-hidden="true" />
                  </div>
                  <h3 className="eyebrow !text-violet-soft">Certifications</h3>
                </div>
                <span className="flex items-center gap-1 font-mono text-[11px] text-dim">
                  <ShieldCheck size={12} className="text-green" /> Verified
                </span>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) =>
                  cert.url ? (
                    <a
                      key={cert.name}
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-xl border border-line bg-panel2/40 p-3.5 transition-all hover:border-violet-soft hover:bg-panel2/80"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-semibold leading-snug text-ink transition-colors group-hover:text-violet-soft">
                            {cert.name}
                          </p>
                          <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                            <p className="font-mono text-[11px] text-dim">
                              Issuer: <span className="text-muted">{cert.issuer}</span>
                            </p>
                            {cert.date && (
                              <span className="flex items-center gap-1 font-mono text-[11px] text-dim">
                                <Calendar size={11} className="shrink-0" />
                                {cert.date}
                              </span>
                            )}
                          </div>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="mt-0.5 shrink-0 text-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-soft"
                        />
                      </div>
                    </a>
                  ) : cert.image ? (
                    <button
                      key={cert.name}
                      type="button"
                      onClick={(e) => {
                        triggerRef.current = e.currentTarget;
                        setPreviewCert(cert);
                      }}
                      className="group block w-full rounded-xl border border-line bg-panel2/40 p-3.5 text-left transition-all hover:border-violet-soft hover:bg-panel2/80 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-semibold leading-snug text-ink transition-colors group-hover:text-violet-soft">
                            {cert.name}
                          </p>
                          <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                            <p className="font-mono text-[11px] text-dim">
                              Issuer: <span className="text-muted">{cert.issuer}</span>
                            </p>
                            {cert.date && (
                              <span className="flex items-center gap-1 font-mono text-[11px] text-dim">
                                <Calendar size={11} className="shrink-0" />
                                {cert.date}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="mt-0.5 flex shrink-0 items-center text-dim transition-colors group-hover:text-violet-soft">
                          <Eye size={14} className="transition-transform group-hover:scale-110" />
                        </div>
                      </div>
                    </button>
                  ) : null
                )}
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-3.5 font-mono text-[11px] text-dim">
              Click to verify credentials or preview certificate
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="panel panel-hover flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              <div className="mb-5 flex items-center justify-between border-b border-line pb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet/30 bg-violet/10 text-violet-soft">
                    <Award size={16} aria-hidden="true" />
                  </div>
                  <h3 className="eyebrow !text-violet-soft">Honors</h3>
                </div>
                <span className="rounded-full border border-amber/30 bg-amber/10 px-2 py-0.5 font-mono text-[11px] uppercase text-amber">
                  Highlights
                </span>
              </div>

              <div className="space-y-3.5">
                {achievements.map((a) => (
                  <div key={a.label} className="rounded-lg border border-line/50 bg-panel2/30 p-3">
                    {a.url ? (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start justify-between gap-2"
                      >
                        <span className="text-[13.5px] font-semibold text-ink transition-colors group-hover:text-violet-soft">
                          {a.label}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="mt-0.5 shrink-0 text-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-soft"
                        />
                      </a>
                    ) : (
                      <p className="text-[13.5px] font-semibold text-ink">{a.label}</p>
                    )}
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{a.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-3.5 font-mono text-[11px] text-dim">
              Global hackathons &amp; competitive rankings
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {previewCert && previewCert.image && (
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Certificate preview: ${previewCert.name}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setPreviewCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-6">
                <div className="min-w-0 pr-4">
                  <h3 className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                    {previewCert.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 font-mono text-xs text-dim">
                    <span>{previewCert.issuer}</span>
                    {previewCert.date && (
                      <>
                        <span>·</span>
                        <span>{previewCert.date}</span>
                      </>
                    )}
                  </div>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-panel2/80 text-muted transition-colors hover:border-line2 hover:text-ink cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="relative flex items-center justify-center overflow-auto bg-black/40 p-4 sm:p-6">
                <div className="relative flex max-h-[70vh] w-full items-center justify-center">
                  <Image
                    src={previewCert.image}
                    alt={`Certificate of completion for ${previewCert.name}`}
                    width={1024}
                    height={724}
                    className="max-h-[70vh] w-auto max-w-full rounded-lg border border-line/60 object-contain shadow-lg"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between border-t border-line/60 bg-panel2/40 px-5 py-3 sm:px-6 font-mono text-[11px] text-dim">
                <span>Participation &amp; Project Recognition</span>
                <button
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  className="text-violet-soft transition-colors hover:text-ink cursor-pointer"
                >
                  Close preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

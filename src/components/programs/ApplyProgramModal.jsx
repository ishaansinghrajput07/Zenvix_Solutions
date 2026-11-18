import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Mail,
  Phone,
  User,
  X,
  MessageSquareText,
  MessageCircle,
  BriefcaseBusiness,
} from 'lucide-react'

const WHATSAPP_NUMBER = '13072927889'

export default function ApplyProgramModal({
  isOpen,
  onClose,
  program,
}) {
  const [whatsappUrl, setWhatsappUrl] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    message: '',
    consent: false,
  })

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setWhatsappUrl('')
      setFormData({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        message: '',
        consent: false,
      })
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.consent) {
      return
    }

    const message = [
      'Hello Zenvix, I would like to apply for a program.',
      '',
      `Program: ${program?.name}`,
      `Name: ${formData.name}`,
      `WhatsApp Number: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Education: ${formData.education}`,
      `Experience: ${formData.experience}`,
      formData.message ? `Message: ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    setWhatsappUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  if (!program) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* BACKDROP */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-md"
          />

          {/* MODAL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut',
            }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-[620px] flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.25)]"
          >
            {/* TOP GLOW */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-electric-500/10 blur-3xl" />

            <div className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

            {/* HEADER */}

            <div className="relative flex items-start justify-between border-b border-slate-100 px-6 py-5 sm:px-7">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white shadow-sm">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Program Application
                  </p>

                  <h2 className="mt-1 text-[19px] font-semibold tracking-tight text-slate-950">
                    {whatsappUrl
                      ? 'WhatsApp message ready'
                      : 'Start your career journey'}
                  </h2>

                  {!whatsappUrl && (
                    <p className="mt-1 text-[12px] text-slate-500">
                      Apply for{' '}
                      <span className="font-semibold text-slate-700">
                        {program.name}
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close application form"
              >
                <X size={18} />
              </button>
            </div>

            {/* CONTENT */}

            <div className="relative overflow-y-auto px-6 py-6 sm:px-7">
              {whatsappUrl ? (
                /* SUCCESS */

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                    <CheckCircle2 size={30} />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                    WhatsApp message ready
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                    Your application for{' '}
                    <span className="font-semibold text-slate-700">
                      {program.name}
                    </span>{' '}
                    is ready in WhatsApp. Review the details and tap Send to
                    share it with our admissions team.
                  </p>

                  <div className="mx-auto mt-6 max-w-md rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 text-left">
                    <div className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />

                      <div>
                        <p className="text-[13px] font-semibold text-slate-800">
                          WhatsApp didn't open?
                        </p>

                        <p className="mt-1 text-[12px] leading-5 text-slate-500">
                          Use the button below to open your prefilled message.
                          Your application is sent only after you tap Send in
                          WhatsApp.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7 inline-flex items-center gap-2"
                  >
                    Open WhatsApp
                    <MessageCircle size={16} />
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* PROGRAM */}

                  <div className="mb-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-electric-500 shadow-sm">
                        <BriefcaseBusiness size={17} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                          Selected Program
                        </p>

                        <p className="mt-0.5 truncate text-[13px] font-semibold text-slate-800">
                          {program.name}
                        </p>
                      </div>

                      <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-semibold text-emerald-600">
                        Job Ready
                      </span>
                    </div>
                  </div>

                  {/* BASIC DETAILS */}

                  <div>
                    <div className="mb-3">
                      <p className="text-[12px] font-semibold text-slate-900">
                        Your details
                      </p>

                      <p className="mt-0.5 text-[11px] text-slate-400">
                        Tell us a little about yourself.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {/* NAME */}

                      <div>
                        <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Full Name
                        </label>

                        <div className="relative">
                          <User
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-electric-400 focus:ring-4 focus:ring-electric-500/10"
                          />
                        </div>
                      </div>

                      {/* PHONE */}

                      <div>
                        <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          WhatsApp Number
                        </label>

                        <div className="relative">
                          <Phone
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your number, including country code"
                            required
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-electric-400 focus:ring-4 focus:ring-electric-500/10"
                          />
                        </div>
                      </div>

                      {/* EMAIL */}

                      <div>
                        <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Email Address
                        </label>

                        <div className="relative">
                          <Mail
                            size={15}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-[13px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-electric-400 focus:ring-4 focus:ring-electric-500/10"
                          />
                        </div>
                      </div>

                      {/* EDUCATION */}

                      <div>
                        <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Education
                        </label>

                        <select
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          required
                          className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-[13px] text-slate-700 outline-none transition focus:border-electric-400 focus:ring-4 focus:ring-electric-500/10"
                        >
                          <option value="">Select education</option>
                          <option value="12th / Higher Secondary">
                            12th / Higher Secondary
                          </option>
                          <option value="Diploma">Diploma</option>
                          <option value="Undergraduate">
                            Undergraduate
                          </option>
                          <option value="Graduate">Graduate</option>
                          <option value="Postgraduate">
                            Postgraduate
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* EXPERIENCE */}

                      <div>
                        <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          Experience Level
                        </label>

                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          required
                          className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-[13px] text-slate-700 outline-none transition focus:border-electric-400 focus:ring-4 focus:ring-electric-500/10"
                        >
                          <option value="">Select experience</option>
                          <option value="Student">Student</option>
                          <option value="Fresher">Fresher</option>
                          <option value="0-1 years">0–1 years</option>
                          <option value="1-3 years">1–3 years</option>
                          <option value="3+ years">3+ years</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* MESSAGE */}

                  <div className="mt-5">
                    <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Career Goal / Message
                    </label>

                    <div className="relative">
                      <MessageSquareText
                        size={15}
                        className="absolute left-3 top-3 text-slate-400"
                      />

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us what you want to achieve..."
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white py-3 pl-9 pr-3 text-[13px] leading-5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-electric-400 focus:ring-4 focus:ring-electric-500/10"
                      />
                    </div>
                  </div>

                  {/* CONSENT */}

                  <label className="mt-5 flex cursor-pointer items-start gap-2.5">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-electric-500 focus:ring-electric-500"
                    />

                    <span className="text-[10.5px] leading-5 text-slate-500">
                      I agree to be contacted by Zenvix regarding this
                      application and program-related information.
                    </span>
                  </label>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-950 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,0.15)] transition-all hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Continue with WhatsApp
                    <ArrowRight size={16} />
                  </button>

                  <p className="mt-3 text-center text-[9.5px] text-slate-400">
                    WhatsApp will open with your application details. Tap Send
                    there to submit.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../services/api'
import { useSettings } from '../context/SettingsContext'

export default function ContactModal({ onClose }) {
  const { content } = useSettings()
  const { form } = content
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await toast.promise(api.post('/users', values), {
        pending: form.pending,
        success: form.success,
        error: form.error,
      })
      onClose()
    } catch (error) {
      console.error(error)
    } finally {
      setSending(false)
    }
  }

  const inputClass =
    'w-full border border-primary dark:border-indigo-300 rounded px-3 py-2 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="w-full max-w-md rounded-xl bg-white dark:bg-slate-800 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="contact-title" className="text-2xl font-semibold text-slate-900 dark:text-white">
          {form.title}
        </h2>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder={form.name}
            aria-label={form.name}
            required
            className={inputClass}
          />
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder={form.email}
            aria-label={form.email}
            required
            className={inputClass}
          />
          <textarea
            name="message"
            rows="4"
            value={values.message}
            onChange={handleChange}
            placeholder={form.message}
            aria-label={form.message}
            required
            className={inputClass}
          />
          <div className="flex justify-end gap-3 text-sm">
            <button
              type="button"
              onClick={onClose}
              className="border border-primary text-primary dark:text-indigo-300 dark:border-indigo-300 rounded px-5 py-2 cursor-pointer"
            >
              {form.close}
            </button>
            <button
              type="submit"
              disabled={sending}
              className="bg-primary text-white rounded px-5 py-2 border border-primary disabled:opacity-50 cursor-pointer"
            >
              {form.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
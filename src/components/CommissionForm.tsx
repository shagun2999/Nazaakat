import { useState } from 'react'
import { useForm } from '@formspree/react'
import crafts from '../data/crafts'

const initial = {
  name: '',
  contact: '',
  craft: '',
  occasion: '',
  quantity: '',
  message: '',
}

export function CommissionForm({ defaultCraft = '' }: { defaultCraft?: string }) {
  const [state, handleSubmit] = useForm('meaeaddl')

  const [fields, setFields] = useState({
    ...initial,
    craft: defaultCraft,
  })

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  if (state.succeeded) {
    return (
      <div className="py-16 text-center">
        <p className="font-hindi text-3xl text-gold">धन्यवाद</p>
        <p className="mt-3 font-display text-3xl text-ink">
          Thank you for your enquiry
        </p>

        <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
          I’ll get back to you personally within a day or two. For anything urgent,
          a DM on Instagram is quickest.
        </p>

        <button
          onClick={() =>
            setFields({
              ...initial,
              craft: defaultCraft,
            })
          }
          className="btn-outline mt-8"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-x-8 gap-y-6 sm:grid-cols-2"
    >
      <label className="block">
        <span className="eyebrow">Your name</span>
        <input
          className="field"
          name="name"
          value={fields.name}
          onChange={update}
          required
          placeholder="Shagun Maheshwari"
        />
      </label>

      <label className="block">
        <span className="eyebrow">Instagram, phone or email</span>
        <input
          className="field"
          name="contact"
          value={fields.contact}
          onChange={update}
          required
          placeholder="@yourhandle"
        />
      </label>

      <label className="block">
        <span className="eyebrow">Craft</span>
        <select
          className="field"
          name="craft"
          value={fields.craft}
          onChange={update}
        >
          <option value="">Not sure yet, guide me</option>

          {crafts.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="eyebrow">Occasion & date</span>
        <input
          className="field"
          name="occasion"
          value={fields.occasion}
          onChange={update}
          placeholder="Wedding, 12 December"
        />
      </label>

      <label className="block sm:col-span-2">
        <span className="eyebrow">Quantity</span>
        <input
          className="field"
          name="quantity"
          value={fields.quantity}
          onChange={update}
          placeholder="One piece, or 50 hampers for a corporate order"
        />
      </label>

      <label className="block sm:col-span-2">
        <span className="eyebrow">Tell me about your idea</span>
        <textarea
          className="field min-h-28 resize-y"
          name="message"
          value={fields.message}
          onChange={update}
          required
          placeholder="Colours, size, names to include, inspiration…"
        />
      </label>

      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          className="btn-gold"
          disabled={state.submitting}
        >
          {state.submitting ? 'Sending…' : 'Send enquiry'}
        </button>

        {state.errors && (
          <span className="text-sm text-rose">
            Something went wrong. Please try again.
          </span>
        )}
      </div>
    </form>
  )
}
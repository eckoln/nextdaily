'use client'

import { useRef } from 'react'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { submitResource } from '@/services/actions/resources'

export function SubmitResourceForm() {
  const ref = useRef<HTMLFormElement>(null)

  return (
    <form
      action={async (formData) => {
        const result = await submitResource(formData)

        if (result?.error) {
          toast.error(result.error)
          return
        }

        toast.success('Successfully sent!')
        ref.current?.reset()
      }}
      ref={ref}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="url">URL:</Label>
          <Input type="url" name="url" id="url" min={1} required />
        </div>
        <div className="flex w-full justify-end">
          <SubmitButton />
        </div>
      </div>
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      Submit
    </Button>
  )
}

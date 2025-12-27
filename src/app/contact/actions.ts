'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    company?: string[]
    message?: string[]
  }
  message?: string
}

export async function saveContact(prevState: FormState | null, formData: FormData): Promise<FormState> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Save contact information to a database or send an email
  // For this example, we'll just log the data
  console.log(validatedFields.data)

  return { message: 'Thank you for your message! We will get back to you shortly.' }
}

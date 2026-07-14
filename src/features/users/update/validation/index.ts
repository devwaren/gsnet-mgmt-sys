import { z } from 'zod'

const resetPasswordSchema = z.object({
    email: z.email({ message: 'Invalid email address' }),
    newPassword: z.string().min(6, { message: 'New password must be at least 6 characters' }),
})

export { resetPasswordSchema }
import { loginFormSchema } from '@/features/LoginForm/zod';
import { z } from 'zod';

export const registerFormSchema = loginFormSchema.extend({
    name: z.string('Введите своё имя'),
    surname: z.string('Введите свою фамилию'),
    form: z.string('Введите ваш класс'),
    letter: z.string('Введите букву вашего класса')
})

export type RegisterFormType = z.infer<typeof registerFormSchema>;
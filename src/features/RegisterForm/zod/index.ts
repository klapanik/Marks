import { loginFormSchema } from '@/features/LoginForm/zod';
import { z } from 'zod';

export const registerFormSchema = loginFormSchema.extend({
    name: z.string('Введите своё имя').regex(/^\p{L}+$/u, 'Можно вводить только буквы').min(2, 'Введите минимум 2 символа'),
    surname: z.string('Введите свою фамилию').regex(/^\p{L}+$/u, 'Можно вводить только буквы'),
    form: z.string('Введите ваш класс').min(1, 'Введите ваш класс').regex(/^(1[0-2]|[1-9])$/, 'Введите число от 1 до 13'),
    letter: z.string('Введите букву вашего класса').max(1, 'Введите одну букву')
        .regex(/^$|^\p{L}$/u, 'Можно вводить только буквы')
        .transform(val => val.toUpperCase())
        .optional(),
})

export type RegisterFormType = z.infer<typeof registerFormSchema>;
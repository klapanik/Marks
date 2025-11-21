import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { registerFormSchema, type RegisterFormType } from "./zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ContinueWithGoogle } from '@/shared/ui/ContinueWithGoogle';

type Props = {
    onSubmit: SubmitHandler<RegisterFormType>,
}

export function RegisterForm({ onSubmit }: Props) {
    const form = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema)
    });

    const { handleSubmit, formState: { errors, isSubmitting }, control } = form;

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 my-2'>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className='text-white w-full cursor-pointer'>
                    Создать аккаунт
                </Button>
            </form>

            <ContinueWithGoogle />
        </Form>
    )
}

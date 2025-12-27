import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { registerFormSchema, type RegisterFormType } from "./zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";

import { useState } from "react";

type Props = {
    onSubmit: SubmitHandler<RegisterFormType>,
};

export function RegisterForm({ onSubmit }: Props) {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const form = useForm<RegisterFormType>({
        resolver: zodResolver(registerFormSchema),
    });

    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
    } = form;

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-2">
                <div className="flex gap-2">
                    <FormField
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Имя</FormLabel>
                                <FormControl>
                                    <Input
                                        className={`primary-input ${errors.name ? "invalid" : ""}`}
                                        placeholder="Имя"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className={`${errors.surname ? "min-h-5" : ""}`}>
                                    {errors.name?.message && ""}{" "}
                                </FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Фамилия</FormLabel>
                                <FormControl>
                                    <Input
                                        className={`primary-input ${
                                            errors.surname ? "invalid" : ""
                                        }`}
                                        placeholder="Фамилия"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className={`${errors.name ? "min-h-5" : ""}`}>
                                    {errors.surname?.message && ""}{" "}
                                </FormMessage>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-2">
                    <FormField
                        control={control}
                        name="form"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Класс</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        className={`primary-input ${errors.form ? "invalid" : ""}`}
                                        placeholder="Класс"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className={`${errors.letter ? "min-h-5" : ""}`}>
                                    {errors.form?.message && ""}{" "}
                                </FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={control}
                        name="letter"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <span>Буква</span>

                                    <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
                                        <TooltipTrigger asChild>
                                            <span className="relative -left-1.5 -top-0.5 bg-primary rounded-full size-1"></span>
                                        </TooltipTrigger>
                                        <TooltipContent side="top">
                                            Необязательное поле
                                        </TooltipContent>
                                    </Tooltip>
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        onFocus={() => { setTooltipOpen(true) }}
                                        onBlurCapture={() => { setTooltipOpen(false) }}
                                        className={`primary-input ${errors.letter ? 'invalid' : ''}`}
                                        placeholder="Буква"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className={`${errors.letter?.message ? "min-h-5" : ""}`}>
                                    {errors.letter?.message && ""}{" "}
                                </FormMessage>
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    className={`primary-input ${errors.email ? "invalid" : ""}`}
                                    placeholder="your@email.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage>{errors.email?.message && ""}</FormMessage>
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl>
                                <Input
                                    className={`primary-input ${errors.password ? "invalid" : ""}`}
                                    placeholder="Создайте пароль"
                                    type="password" // todo: add eye for looking password
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage>{errors.password?.message && ""}</FormMessage>
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white w-full cursor-pointer"
                >
                    Создать аккаунт
                </Button>
            </form>
        </Form>
    )
}

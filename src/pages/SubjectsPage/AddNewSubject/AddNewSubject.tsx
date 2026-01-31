import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { addNewSubjectFormSchema } from "./lib/zod";

import { Form, FormItem, FormField, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import type { DocumentData } from "firebase/firestore";
import type { addNewSubjectFormType } from "./lib/zod";

import { useAlertData } from "@/app/providers/AlertProvider";

type Props = {
    onSubmit: (subjectName: string, id: string | number) => void;
    basicSubjects:
        | {
              name: string;
              id: string;
          }[]
        | DocumentData[];
};

export function AddNewSubject({ onSubmit, basicSubjects }: Props) {
    const form = useForm<addNewSubjectFormType>({
        resolver: zodResolver(addNewSubjectFormSchema),
    });

    const { setAlertData } = useAlertData();

    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
    } = form;

    function onFormSubmit(data: addNewSubjectFormType) {
        const isBasicSubject = !!basicSubjects.find((subject) => subject.name === data.subjectName);

        if (isBasicSubject) {
            setAlertData((prev) => ({
                ...prev,
                title: "Предмет есть в списке базовых",
                description: "Вы можете добавить его ниже, просто нажав на '+'",
                variant: "destructive",
                isOpen: true,
            }));

            return;
        }

        onSubmit(data.subjectName, data.subjectName);
    }

    return (
        <div className="primary-block">
            <div className="flex flex-col gap-1 mb-3">
                <h3 className="font-semibold text-2xl leading-none">Добавить новый предмет</h3>
                <p className="text-muted-foreground text-sm">
                    Создайте собственный предмет, если его нет в списке
                </p>
            </div>

            <div>
                <Form {...form}>
                    <form
                        onSubmit={handleSubmit(onFormSubmit)}
                        className="flex w-full gap-3 justify-between"
                    >
                        <FormField
                            control={control}
                            name="subjectName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            className={`primary-input ${errors.subjectName ? "invalid" : ""}`}
                                            placeholder="Введите название предмета"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage>{errors.subjectName?.message && ""}</FormMessage>
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="text-white cursor-pointer w-[10%] mt-1 text-xl flex justify-center items-center"
                        >
                            +
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

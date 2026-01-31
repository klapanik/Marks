import { z } from "zod";

export const addNewSubjectFormSchema = z.object({
    subjectName: z
        .string("Введите название предмета")
        .min(1, "Введите название предмета")
        .max(25, "Максимум 25 символов"),
});

export type addNewSubjectFormType = z.infer<typeof addNewSubjectFormSchema>;

import { BookOpen, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Auth() {
    return (
        <section className="mx-auto w-[448px] py-4">
            <div className="w-full flex flex-col items-center mb-8">
                <GraduationCap className="bg-primary rounded-full p-3 size-14 text-white mb-4" />
                <h1 className="w-auto text-3xl font-bold text-primary">Дневник Оценок</h1>
                <p className="text-muted-foreground">Ведите учет своих академических успехов</p>
            </div>

            <div className="w-full flex flex-col items-center primary-block">
                <div className="mb-6">
                    <div className="flex">
                        <BookOpen className="size-5 my-auto mr-3" />
                        <h2 className="text-2xl font-semibold">Добро пожаловать</h2>
                    </div>

                    <p className="text-muted-foreground">Войдите или создайте новый аккаунт</p>
                </div>

                <div className="w-full">
                    <Tabs defaultValue="login">
                        <TabsList className="w-full flex gap-4">
                            <TabsTrigger value="login" className="text-black data-[state=active]:bg-white w-full cursor-pointer">Account</TabsTrigger>
                            <TabsTrigger value="register" className="text-black data-[state=active]:bg-white w-full cursor-pointer">Password</TabsTrigger>
                        </TabsList>

                        <TabsContent value="login">
                            <div>login</div>
                        </TabsContent>

                        <TabsContent value="register">
                            <div>register</div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
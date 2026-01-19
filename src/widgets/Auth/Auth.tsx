import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "@/features/LoginForm/LoginForm";
import type { LoginFormType } from "@/features/LoginForm/zod";
import { RegisterForm } from "@/features/RegisterForm/RegisterForm";
import type { RegisterFormType } from "@/features/RegisterForm/zod";
import { BookOpen, GraduationCap } from "lucide-react";

import { firebaseAuthService } from "@/services/firebase/auth";
import { firestoreService } from "@/services/firebase/firestore";
import { emailVerification } from "@/services/abstract/email_verification";
import { auth } from "@/services/firebase/config";

import { useAlertData } from "@/app/providers/AlertProvider";
import { useLoading } from "@/app/providers/LoadingProvider";

import { triggerErrorAlert } from "./lib/triggerErrorAlert";

export function Auth() {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) navigate("/");
        });
    }, [navigate]);

    const { setAlertData } = useAlertData();
    const { setIsLoading } = useLoading();

    async function onLoginFormSubmit(data: LoginFormType) {
        if (!data) return;

        try {
            setIsLoading(true);
            triggerErrorAlert(null, setAlertData);
            await firebaseAuthService.signInWithEmailAndPassword(data.email, data.password);
        } catch (error) {
            if (!(error instanceof Error)) return;
            triggerErrorAlert(error, setAlertData);
        } finally {
            setIsLoading(false);
        }
    }

    async function signInWithGoogle() {
        try {
            setIsLoading(true);
            triggerErrorAlert(null, setAlertData);
            await firebaseAuthService.signInWithGoogle();
        } catch (error) {
            if (!(error instanceof Error)) return;
            triggerErrorAlert(error, setAlertData);
        } finally {
            setIsLoading(false);
        }
    }

    async function onRegisterFormSubmit(data: RegisterFormType) {
        if (!data) return;

        try {
            setIsLoading(true);
            triggerErrorAlert(null, setAlertData);

            const isEmailValid = await emailVerification(data.email);

            if (!isEmailValid) {
                throw new Error(`${JSON.stringify({ code: "auth/invalid-email" })}`);
            }

            const userData = await firebaseAuthService.createUserWithEmailAndPassword(
                data.email,
                data.password,
            );

            if (!userData) {
                throw new Error(`${JSON.stringify({ code: "auth/invalid-provider-data" })}`);
            }

            const uid = userData.user.uid;
            console.log(uid);

            await firestoreService.setDoc("users", uid, {
                email: data.email,
                name: data.name,
                surname: data.surname,
                form: data.form,
                letter: data.letter ?? "",
            });
        } catch (error) {
            if (!(error instanceof Error)) return;
            triggerErrorAlert(error, setAlertData);
        } finally {
            setIsLoading(false);
        }
    }

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
                            <TabsTrigger
                                value="login"
                                className="text-black data-[state=active]:bg-white w-full cursor-pointer"
                            >
                                Войти
                            </TabsTrigger>
                            <TabsTrigger
                                value="register"
                                className="text-black data-[state=active]:bg-white w-full cursor-pointer"
                            >
                                Регистрация
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="login">
                            <LoginForm
                                onSubmit={onLoginFormSubmit}
                                signInWithGoogle={signInWithGoogle}
                            />
                        </TabsContent>

                        <TabsContent value="register">
                            <RegisterForm onSubmit={onRegisterFormSubmit} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

const FIREBASE_AUTH_ERRORS = {
    "auth/email-already-exists":
        "Указанный адрес электронной почты уже используется существующим пользователем.",
    "auth/insufficient-permission":
        "Учетные данные, использованные для инициализации Admin, не имеют достаточных прав доступа к запрошенному ресурсу аутентификации.",
    "auth/internal-error":
        "Сервер аутентификации столкнулся с непредвиденной ошибкой при попытке обработки запроса. Пожалуйста, попробуйте повторить попытку позже",
    "auth/invalid-credential":
        "Учетные данные, используемые для аутентификации не могут быть использованы для выполнения желаемого действия.",
    "auth/operation-not-allowed": "Операция не доступна",
    "auth/phone-number-already-exists":
        "Указанный номер телефона уже используется существующим пользователем.",
    "auth/project-not-found":
        "Ошибка, сервера, пожалуйста, напишите нам в поддержку: https://t.me/marksbyru_bot?start=254775. Код ошибки: 'auth/project-not-found'",
    "auth/too-many-requests":
        "Наш сервер устал. Количество запросов превышает максимально допустимое. Пожалуйста, повторите вашу попытку немного позже.",
    "auth/user-disabled": "Пользователь был заблокирован администратором",
    "auth/uid-already-exists": "Такой пользователь уже существует",
    "auth/user-not-found":
        "Пользователь не найден. Перепроверьте ведённые данные или просто зарегестрируйтесь на нашем сайте",

    unknown: "Неизвестная ошибка. Попробуйте еще раз",
};

const SAME_TYPE_FIREBASE_AUTH_ERRORS = [
    "auth/invalid-email",
    "auth/invalid-password",
    "auth/invalid-phone-number",
    "auth/invalid-photo-url",
    "auth/invalid-provider-data",
];

const SAME_TYPE_FIREBASE_AUTH_ERRORS_MESSAGE =
    "Перепроверьте введённые данные, они не могут быть использованы для выполнения желаемого действия";

export function handleFirebaseAuthErrorDescription(errorCode: string = "unknown") {
    if (SAME_TYPE_FIREBASE_AUTH_ERRORS.includes(errorCode)) {
        return SAME_TYPE_FIREBASE_AUTH_ERRORS_MESSAGE;
    }

    if (errorCode in FIREBASE_AUTH_ERRORS) {
        return FIREBASE_AUTH_ERRORS[errorCode as keyof typeof FIREBASE_AUTH_ERRORS];
    }

    return FIREBASE_AUTH_ERRORS["unknown"];
}

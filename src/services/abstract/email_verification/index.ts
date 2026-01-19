export async function emailVerification(email: string) {
    const API_KEY = import.meta.env.VITE_ABSTRACT_API_KEY;

    const url = `https://emailreputation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}`;

    try {
        const responce = await fetch(url);

        if (!responce.ok) {
            throw new Error("Responce error");
        }

        const result = await responce.json();
        const isEmailValid = result.email_deliverability.status === "deliverable";

        return isEmailValid;
    } catch (error) {
        throw new Error(`Error in email verification: ${error}`);
    }
}

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        // Ici, vous pouvez ajouter la logique pour envoyer l'email
        // Par exemple, en utilisant un service comme SendGrid, Mailgun, etc.
        console.log('Données du formulaire:', { name, email, message });

        return new Response(
            JSON.stringify({
                message: 'Message envoyé avec succès!'
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: 'Une erreur est survenue lors de l\'envoi du message.'
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
}; 
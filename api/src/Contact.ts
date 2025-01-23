export interface Contact {
    id: number;
    name: string;
    email: string;
    source: 'linkedin' | 'whatsapp' | 'instagram' | 'facebook' | 'x' | 'tik tok';
    phoneNumber: string;
}

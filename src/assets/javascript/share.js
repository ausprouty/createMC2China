import { Share } from '@capacitor/share';

export async function useShareLesson(title, url) {
    await Share.share({
    title: title,
    text: 'Really awesome thing you need to see right meow',
    url: url,
    dialogTitle: 'Share with buddies',
    });
}
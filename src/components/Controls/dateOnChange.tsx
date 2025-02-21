import dayjs from 'dayjs';

export const dateOnChange = (x: string) => {
    try {
        const newValue = dayjs(new Date(Date.parse(x))).format('YYYY-MM-DD');
        return newValue;
    } catch (error) {
        console.error((error as any)?.message);
        return x;
    }
};


export function toFolderName(str: string) {
    if (str == null || typeof str !== 'string') {
        return undefined; // Or handle other non-string types as needed
    }
    return str
        .toLowerCase()
        .split(/ [_,()%|°・™.:*@#^'’`!?] /)
        .join('')
        .split(/ ?[_,()%°・|™.:*@#^'’`!?] ?/)
        .join('')
        .split(/ [+&/] /)
        .join('-')
        .split(/ ?[+&/-] ?/)
        .join('-')
        .split(/ /)
        .join('-')
        .replaceAll(/[éèêÉë]/g, 'e')
        .replaceAll(/[×]/g, 'x')
        .replaceAll(/[ïíî]/g, 'i')
        .replaceAll(/[Çç]/g, 'c')
        .replaceAll(/[àâ]/g, 'a')
        .replaceAll(/[öøôó]/g, 'o')
        .replaceAll(/[üüü]/g, 'u')
        .replaceAll(/[ı]/g, '1');
}

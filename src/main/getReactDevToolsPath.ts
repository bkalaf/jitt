import fs from 'graceful-fs';
import path from 'path';

const REACT_DEV_TOOLS_ID = 'fmkadmapgofadopljbjfkapdkoienihi';
export function getExtensionPath(id: string) {
    const folder =
        process.platform === 'linux' ? '/home/bobby/.config/google-chrome/Default/Extensions'
        : process.platform === 'win32' ? 'C:\\Users\\bobby\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions'
        : '';
    const devPath = [folder, id].join(path.sep);
    const version = fs.readdirSync(devPath)[0];
    return [devPath, version].join(path.sep);
}
export const getReactDevToolsPath = () => getExtensionPath(REACT_DEV_TOOLS_ID);
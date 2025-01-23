import { BrowserWindow, Menu, MenuItem } from 'electron';
import { camelCaseToProper } from '../common/text/splitStringAt';

function createOnClick(window: BrowserWindow) {
    return (route: string) => {
        console.log(`sending-hash-navigate`, route);~
        window.webContents.send('hash-navigate', route);
    }
}
export const mainMenu = (window: BrowserWindow) => {
    function createMenuItem(route: string): Partial<MenuItem> {
        return {
            label: camelCaseToProper(route),
            click: () => toClick(route)
        };
    }
    const toClick = createOnClick(window);
    return Menu.buildFromTemplate([
        { label: 'File', role: 'fileMenu' },
        { label: 'Edit', role: 'editMenu' },
        { label: 'Data', type: 'submenu', submenu: [
            createMenuItem('brand'),
            createMenuItem('hashTag'),
            createMenuItem('mercariBrand'),
            createMenuItem('mercariTaxonomy')
        ] as any },
        { label: 'View', role: 'viewMenu' },
        { label: 'Window', role: 'windowMenu' },
        { role: 'shareMenu' },
        { label: 'Help', role: 'help' }
    ])
}
import { on } from './eventOnOff';

/* -------------------------------------------------------------------------- */

export const ready = (eventHandler) => on(window, 'DOMContentLoaded', eventHandler);

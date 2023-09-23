import exp from "node:constants";

export interface ItemType {
    id: string|number,
    name: string,
    type: string,
    side: string,
    minLength: string|number,
    maxLength: string|number,
    column: string|number,
    row: string|number,
    selected?: boolean,
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    calculated?: number
}

export interface ItemBoundary {
    x0: number,
    x1: number,
    y0: number,
    y1: number,
    width: number,
    height: number
}

export interface RectBoundary {
    x: number,
    width: number,
    y: number,
    height: number
}

export interface CalculationData {
    m2: number,
    width: number,
    height: number,
    modified?: boolean,
    ratio: number,
    ratioWidth?: number,
    ratioHeight?: number,
}

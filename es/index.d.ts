declare function mul(a: number | string, b: number | string): number;
declare function add(a: number | string, b: number | string): number;
declare function sub(a: number | string, b: number | string): number;
declare function div(a: number | string, b: number | string): number;
export declare const calc: {
    mul: typeof mul;
    add: typeof add;
    sub: typeof sub;
    div: typeof div;
};
export default calc;

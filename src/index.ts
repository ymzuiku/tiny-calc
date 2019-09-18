function mul(a: number | string, b: number | string) {
  let c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split('.')[1].length;
  } catch (f) {}
  try {
    c += e.split('.')[1].length;
  } catch (f) {}
  return (Number(d.replace('.', '')) * Number(e.replace('.', ''))) / Math.pow(10, c);
}

function add(a: number | string, b: number | string) {
  let c: number, d: number, e: number;
  try {
    c = a.toString().split('.')[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split('.')[1].length;
  } catch (f) {
    d = 0;
  }
  e = Math.pow(10, Math.max(c, d));
  return (mul(a, e) + mul(b, e)) / e;
}

function sub(a: number | string, b: number | string) {
  let c: number, d: number, e: number;
  try {
    c = a.toString().split('.')[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split('.')[1].length;
  } catch (f) {
    d = 0;
  }
  e = Math.pow(10, Math.max(c, d));
  return (mul(a, e) - mul(b, e)) / e;
}

function div(a: number | string, b: number | string) {
  let c: number,
    d: number,
    e = 0,
    f = 0;
  try {
    e = a.toString().split('.')[1].length;
  } catch (g) {
    e = 0;
  }
  try {
    f = b.toString().split('.')[1].length;
  } catch (g) {
    f = 0;
  }
  c = Number(a.toString().replace('.', ''));
  d = Number(b.toString().replace('.', ''));
  return mul(c / d, Math.pow(10, f - e));
}

export const calc = {
  mul,
  add,
  sub,
  div,
};

export default calc;

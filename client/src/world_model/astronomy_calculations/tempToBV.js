
const T0 = 4600.0;
const A = 0.92;
const B = 1.7;
const C = 0.62;
  

const tempToBV = (T) => {
    console.log(T)
    let z = T/T0
    let ap = z*Math.pow(A, 2)
    let bp = A*C*z + B*A*z - 2.0*A
    let cp = B*C*z -C - B
    
    let sqrtarg = Math.pow(bp, 2) - 4.0*ap*cp
    let bv1 = (-bp + Math.sqrt(sqrtarg))/(2.0*ap)
    return bv1
}

export default tempToBV

import {
    SHA1
} from 'crypto-js';

// SIGN签名
export default function Sign() {
    let [PRIVATE_KEY, REQ_TIME] = ['09FB84B1-D90E-4C14-84DB-DEE924A87B51', 'reqTime'];
    let ts;
    let a = arguments;
    let o = a[0] || {};
    let pk = a.length > 1 ? a[1] : PRIVATE_KEY;
    let pks = []

    for (let k in o) {
        if (o.hasOwnProperty(k)) {
            if (k === REQ_TIME) {
                ts = o[k];
                continue;
            }
            pks.push(k);
        }
    }

    pks.sort();

    let sign = '';
    if (ts) {
        for (let i in pks) {
            if (pks.hasOwnProperty(i)) {
                let k = pks[i];
                let v = o[k] === 0 ? '0' : o[k] ? o[k].toString() : '';
                sign += v + ts.toString();
            }
        }
        sign += pk;
        //let oSign = new Rusha().digestFromBuffer(sign);
        let oSign = SHA1(sign);
        return oSign.toString();
    } else {
        console.log('缺少必要参数reqTime');
    }
}
 

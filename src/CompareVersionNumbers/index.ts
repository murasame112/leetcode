function compareVersion(version1: string, version2: string): number {
    let v1 = version1.split('.').map((element) => {
        return parseInt(element, 10);
    });

    let v2 = version2.split('.').map((element) => {
        return parseInt(element, 10);
    });

    let length = v1.length;
    let diff = 0;

    if (v1.length > v2.length) {
        length = v1.length;
        diff = v1.length - v2.length;
        v2 = v2.concat(Array(diff).fill(0));
				
    } else if (v2.length > v1.length) {
        length = v2.length;
        diff = v2.length - v1.length;
        v1 = v1.concat(Array(diff).fill(0));
    }

    for (let i = 0; i < length; i++) {
        if (v1[i] > v2[i]) {
            return 1;
        } else if (v1[i] < v2[i]) {
            return -1;
        }
    }

    return 0;
}

let version1 = '1.2.3.4.5.6';
let version2 = '1.10.3';

console.log(compareVersion(version1, version2));

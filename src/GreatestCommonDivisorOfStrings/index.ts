function gcdOfStrings(str1: string, str2: string): string {
	if(str1.length === str2.length){
		if(str1 === str2){
			return str1;
		}else{
			return '';
		}
	}
	let shorter: string, longer: string;
	if(str1.length > str2.length){
		longer = str1;
		shorter = str2;
	}else{
		longer = str2;
		shorter = str1;
	}
	let result = shorter;
	while(result.length > 0){
		if(longer.length % result.length !== 0 || shorter.length % result.length !== 0){
			result = result.slice(0, result.length - 1);
			continue;
		}
		let pointer = 0;

		while(pointer < longer.length || pointer < shorter.length){
			if(pointer < longer.length){
				if(longer.slice(pointer, pointer + result.length) != result){
					result = result.slice(0, result.length - 1);
					pointer = 0;
					break;
				}
			}
			if(pointer < shorter.length){
				if(shorter.slice(pointer, pointer + result.length) != result){
					result = result.slice(0, result.length - 1);
					pointer = 0;
					break;
				}
			}
			
			pointer += result.length;
		}
		if(pointer != 0){
			return result;
		}

	}
	return '';
}

let str1 = 'ABCABC';
let str2 = 'ABC';

// let str1 = "ABABAB";
// let str2 = "ABAB";
// let str1 = "AAABBB";
// let str2 = "BBBAB";
// let str1 = "ABCDEF";
// let str2 = 'ABC';
// let str1 = "ABCDABC";
// let str2 = 'ABC';

console.log(gcdOfStrings(str1, str2));
// two pointers
// jak jeden string sie skonczy to dzielimy dlugosci. jak 0 reszty (modulo) to mamy odpowiedz
// jak nie 0, to -1 z tej dlugosci i ze stringa (czyli ABAB to ABA)

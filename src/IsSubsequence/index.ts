function isSubsequence(s: string, t: string): boolean {
	let a = 0, b = 0;

	while (b < t.length) {

		if (s[a] == t[b]){
			a++;
			b++;
		}else{
			b++;
		}
	}
	if (a == s.length) return true;
  return false;
};


const s = "abc", t = "ahbgdc";

console.log(isSubsequence(s,t));
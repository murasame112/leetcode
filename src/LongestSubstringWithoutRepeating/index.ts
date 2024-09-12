// second solution, based on one i found at leetcode. much faster
function lengthOfLongestSubstring(s: string): number {
	let build = '';
	const chars = s.split('');
	let count = 0;

	for(const char of chars){
		let buildIndex = build.indexOf(char);
		if(buildIndex !== -1){
			build = build.slice(buildIndex + 1);
		}
		build += char;
		count = Math.max(count, build.length);

	}
	return count;
}

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));

// first solution, dynamic sliding window

/*function lengthOfLongestSubstring(s: string): number {
    if (s.length === 1) {
        return 1;
    }

    let left = 0;
    let right = left;
    let count = 0;
    let used = new Map();

    while (right <= s.length - 1) {
        if (!used.get(s[right])) {
            used.set(s[right], s[right]);
            right++;
        } else {
            count = Math.max(used.size, count);
            used = new Map();
            left++;
            right = left;
        }
    }
    count = Math.max(used.size, count);

    return count;
}
*/
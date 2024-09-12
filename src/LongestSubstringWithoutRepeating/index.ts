function lengthOfLongestSubstring(s: string): number {
    if (s.length === 1) {
        return 1;
    }

    let left = 0;
    let right = left;
    let count = 0;
    let build = '';

    while (right <= s.length - 1) {
        if (!build.includes(s[right])) {
            build += s[right];
            right++;
        } else {
            count = Math.max(build.length, count);
            build = '';
            left++;
            right = left;
        }
    }
    count = Math.max(build.length, count);

    return count;
}

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));


// first solution, dynamic sliding window

/*
function lengthOfLongestSubstring(s: string): number {
    if (s.length === 1) {
        return 1;
    }

    let left = 0;
    let right = left;
    let count = 0;
    let build = '';

    while (right <= s.length - 1) {
        if (!build.includes(s[right])) {
            build += s[right];
            right++;
        } else {
            count = Math.max(build.length, count);
            build = '';
            left++;
            right = left;
        }
    }
    count = Math.max(build.length, count);

    return count;
}

*/
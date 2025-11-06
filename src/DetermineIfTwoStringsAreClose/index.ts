function closeStrings(word1: string, word2: string): boolean {
	if(word1.length !== word2.length) return false;
	const rec1: Record<string, number> = {}, rec2: Record<string, number> = {};
	let i = 0;
	while(i < word1.length){
		
		
		if(rec1[word1[i]] == undefined){
			rec1[word1[i]] = 1;
		}else{
			rec1[word1[i]] = rec1[word1[i]] + 1;
		}

		if(rec2[word2[i]] == undefined){
			rec2[word2[i]] = 1;
		}else{
			rec2[word2[i]] = rec2[word2[i]] + 1;
		}

		i++;
	}

	const vals1 = Object.values(rec1) as number[];
	const vals2 = Object.values(rec2) as number[];
	const compareValues: Record<number, number> = {};

	i = 0;
	while(i < vals1.length){
		if(compareValues[vals1[i]] == undefined){
			compareValues[vals1[i]] = 1;
		}else{
			compareValues[vals1[i]] = compareValues[vals1[i]] + 1;
		}
		i++;
	}

	i = 0;
	while(i < vals2.length){
		if(compareValues[vals2[i]] == undefined){
			return false;
		}
		else if(compareValues[vals2[i]] == 1){
			delete compareValues[vals2[i]];
		}else{
			compareValues[vals2[i]] = compareValues[vals2[i]] - 1;
		}
		i++;
	}

	const keys1 = Object.keys(rec1) as string[];
	const keys2 = Object.keys(rec2) as string[];
	const compareKeys: Record<string, number> = {};
	
	i = 0;
	while(i < keys1.length){
		if(compareKeys[keys1[i]] == undefined){
			compareKeys[keys1[i]] = 1;
		}else{
			compareKeys[keys1[i]] = compareKeys[keys1[i]] + 1;
		}
		i++;
	}

	i = 0;
	while(i < keys2.length){
		if(compareKeys[keys2[i]] == undefined){
			return false;
		}
		else if(compareKeys[keys2[i]] == 1){
			delete compareKeys[keys2[i]];
		}else{
			compareKeys[keys2[i]] = compareKeys[keys2[i]] - 1;
		}
		i++;
	}
	
  return true;
};

//const word1 = 'acd', word2 = 'dca';
//const word1 = "cabbbadd", word2 = "acbcbcdd";
const word1 = "aaabbbbccddeeeeefffff", word2 = "aaaaabbcccdddeeeeffff";
console.log(closeStrings(word1, word2));

// musza byc te same litery
// te same ilosci liter? np 3 a, 2 b i 1 c jest git z 3b, 2a i 1c?

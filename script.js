function firstWord(s) {
  // your code here
	if(s.length==0){
		return '';
	}
	s=s.trim();
    let word=s.split(' ');
	return word[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s))

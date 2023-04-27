const DRAW_URL = 'http://localhost:5000/api/draw';

export const reset = async () => {
	const response = await fetch(`${DRAW_URL}/reset`, {
	  method: 'POST'
	});
  
	const data = await response.json();

	console.log(data);
	
  
	if (data.message) {
	  return null;
	} else {
	  return null;
	}
  };
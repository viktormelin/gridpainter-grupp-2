//const DRAW_URL = 'http://localhost:5000/api/draw';
const DRAW_URL = 'https://gridpainter-grupp-2-839p7.ondigitalocean.app/api/draw';

export const reset = async () => {
	const response = await fetch(`${DRAW_URL}/reset`, {
	  method: 'POST'
	});
  
	const data = await response.json();	
  
	if (data.message) {
	  return null;
	} else {
	  return null;
	}
  };
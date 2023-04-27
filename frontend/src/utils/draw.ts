const DRAW_URL = `${import.meta.env.VITE_BASE_URI}/api/draw`;

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

export const showTemplate = async (userId: string) => {
	const response = await fetch(`${DRAW_URL}/showTemplate`, {
	  method: 'POST',
	  body: JSON.stringify({ userId }),
	  headers: {
		'Content-Type': 'application/json',
	  },
	});
  
	const data = await response.json();	
  
	if (data.message) {
	  return null;
	} else {
	  return null;
	}
};


type squareType = {
    squares: {[key: number]: string}          
  };

export const createImage = (colors: string[]) => {

    const image: squareType = {
        squares: {}
    }

    for (let i:number = 0; i <225; i++) {
        const colorAmount = colors.length;
        const colorIndex = Math.floor(Math.random()*colorAmount);         
        image.squares[i] = colors[colorIndex]            
    }         

    return image;
}

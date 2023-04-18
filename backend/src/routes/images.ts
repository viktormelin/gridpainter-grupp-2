const express = require('express');
const router = express.Router();
import {Request, Response} from 'express';


router.post('/create', function(req: Request, res: Response) {
/*     const image = {
        id: 1,
        squares: {
            1: '#ffffff',

        }
        
    } */
   
    const colors = req.body.colors;

    if (colors.length > 1 && colors.length < 5) {
        console.log(colors.length);

        const image = {
            id: 1,
            squares: {}
        }


        // fortsätt här
        for (let i = 0; i <5; i++) {
            let image = {[i]:"testar"}
            console.log(image);
            
        }
        
    }

    
    res.send(req.body);
    
});












module.exports = router;


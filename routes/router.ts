import { Router , Request, Response } from 'express';
const router = Router();

router.get('/mensajes', ( req:Request , res: Response )=>  {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien111'
    });
});

router.post('/mensajes', ( req:Request , res: Response )=>  {
    
    //para recuperar los datos que se estan enviando
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    
    res.json({
        ok: true,
        //mensaje: 'Mensaje POST esta bien'
        cuerpo,
        de
    });
});

router.post('/mensajes/:id', ( req:Request , res: Response )=>  {
    
    //para recuperar los datos que se estan enviando
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    
    res.json({
        ok: true,
        //mensaje: 'Mensaje POST esta bien'
        cuerpo,
        de,
        id
    });
});


export default router;
'use strict'
const multer = require('multer')

module.exports = multer({
    dest: 'server/temp', 
    fileFilter : (req, file, cb)=>{ 

        //Si el archivo es de tipo imagen permitimos que se guarde
            if(file.mimetype.includes('image')){ 
                cb(null, true)
            }
            else{
                error.status = 500;
                error.error = 'INCORRECT FILE UPLOADED'
                error.desc = 'The file uploaded is not an image'
                
                req.error = error; 
                cb(null, false)
            }
    }
}) 
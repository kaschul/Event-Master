
const notFound = (req, res, next) => {      
    console.log( 'I am in not found')         
    const error = new Error(`Not found - ${req.originalUrl}`)     
    res.status(404)        
    next(error)           
      
  }
  

  const errorHandler = (err, req, res, next) => {                           
    console.log("I am in the error handler")                                                       
    console.log(`res.statuscode: ${res.statusCode}`) 
    console.log(`err.message: ${err.message}`) 
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode       
     res.status(statusCode)                                                    
      res.json({
      message: err.message  
                                           
  })
  
  
  }
  
  export {notFound, errorHandler}     
  
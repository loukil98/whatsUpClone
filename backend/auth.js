const jwt = require ('jsonwebtoken')
const auth = (req,res,next) => {
try {
    const token = req.cookies.token
    if (!token) {
        return res.status(402).send("pas de token")
    }
    const verified = jwt.verify(token,process.env.secretPassword)
    if(!verified){
        return res.status(401).send("pas d'authorisation")
    }
    req.userId = verified.user
    next()
}catch (e) {
    console.log(e)
    res.status(400).json({errorMessage :"Unathorized"})
}
}
module.exports = auth
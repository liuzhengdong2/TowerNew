const Router = require("@koa/router");
const userHandler = require("../DB/userhandle");
const config = require("../Routes/config")
const router = new Router();

const { sign } = require("jsonwebtoken"); //签发token



//登录处理
router.post("/login", async ctx => {
    let { email, password } = ctx.request.body;
    if (email&&password) {//判断请求的信息是否正确
        let checkExit = await userHandler.checkEmail(email)
        let check = await userHandler.checkPassWord(email,password)
        if(!checkExit){
            await userHandler.addNewUser(email,password)
            let token = sign({ email,password }, config.secret);
            ctx.body = {
                message: "成功注册",
                token,
            }
            return
        }

        if (check == true) {
            let token = sign({ email, password }, config.secret);
            ctx.body = {
                message: "成功登录",
                token,
            };
        }else{
            
            ctx.body = {
                message: "帐号或密码错误"
        }
        }
    }


});

module.exports = router.routes();






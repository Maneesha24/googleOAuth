const passport = require("passport");

module.exports = app => {

app.get('/api/logout',(req,res)=>{
  req.logout();
  res.redirect('/');
})

app.get('/api/current_user',(req,res)=>{
  res.send(req.user);
})

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );



  app.get("/", (req, res) => {
    res.send({ hi: "there" });
  });
};


//282160311747-un6788uq8qfgfg54r04qm1jeb7q50fu1.apps.googleusercontent.com
//Z8uu_4FPogiVOHOMx4Tec38j

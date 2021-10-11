const User = require('../models/user.model');


exports.user_login = async function (req, res, next) {
    const user = new User ({
        email: req.body.email,
        login: req.body.loin,
        password: req.body.password,

    });
    // const data = await user.save()
}

exports.user_register = async function (req, res, next) {
    const user = new User ({
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
        }
    );
    console.log(user)
    const result = await user.save();
    if (result.ok) {
        res.send('Gooood')
    }
    // const [err, data] = await user.save().then(data => [null, data]).catch(err => [err, null])
    // data.send('Goooooood')
}


exports.users_get = async function (req, res, next) {
    const data = await User.find({});
    res.send(data);
}

exports.user_delete = async function (req, res, next) {
    result = await User.deleteMany(
        {_id: req.params.id},
    );
    res.send(result);
}
function accesoUsuario(req, res) {
    var params = req.body;
    var email = params.email;
    var password = params.password;
    usuariosModelo.findOne({ email: email }, (err, user) => {
                if (!user) {
                    res.status(404).send({ mesagge: 'El usuario no existe' });
                } else {
                    bcrypt.compare(password, usuario.password, function(err, check) {
                        if (check) {
                            //devolver los datos del ususario logeado
                            console.log('coincide el password')
                            if (params.gethash) {
                                //devolver un token de jwt
                            } else {
                                res.status(200).send({ user: user });
                            }
                        } else {
                            res.status(404).send({ mesagge: 'El usuario no se ha identificado' });
                        }
                    });
                }
            });
        }
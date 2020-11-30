const express = require('express');
const router = express.Router();

const Auth = require('./middlewares/Auth');

const AuthValidator = require('./validators/AuthValidator');
const UserValidator = require('./validators/UserValidator');

const AuthController = require('./controllers/AuthController');
const ServicosController = require('./controllers/ServicosController');
const UserController = require('./controllers/UserController');


// Rota de Teste
router.get('/ping', (req, res)=> {
    res.json({pong: true});
});

router.get('/states', UserController.getStates);

router.post('/user/signin', AuthValidator.signin, AuthController.signin); // OK
router.post('/user/signup', AuthValidator.signup, AuthController.signup);// OK

router.get('/user/me', Auth.private, UserController.info); // OK
router.put('/user/me', UserValidator.editAction, Auth.private, UserController.editAction); 

router.get('/categorias', Auth.private, ServicosController.getCategorias);

router.post('/servico/add',Auth.private, ServicosController.addAction);
router.get('/servicos/list', Auth.private,ServicosController.getList);
router.get('/servicos/item',Auth.private, ServicosController.getItem);
router.post('/servico/:id',Auth.private, ServicosController.editAction);

module.exports = router;
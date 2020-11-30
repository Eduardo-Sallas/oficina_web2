const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { validationResult, matchedData} = require('express-validator');

const State = require('../models/State');
const User = require('../models/User');
const Category = require('../models/Category');
const Servico = require('../models/Servico');

module.exports = {
    getStates: async (req, res) => {
        let states = await State.find();
        res.json({states : states});
    },
    
    info: async (req, res) => {
        let token = req.query.token;

        const user = await User.findOne({token});
        const state = await State.findById(user.state);
        const servico = await Servico.find({idUser: user._id.toString()});

        let servicoList = [];
        for(let i in servico) {

            const cat = await Category.findById(servico[i].category);
            servicoList.push({...servico[i], category: cat.slug});
        }

        res.json({
            name: user.name,
            email: user.email,
            state: state.name,
            servico: servicoList
        });
    },

    editAction: async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            res.json({error: errors.mapped()});
            return;
        }

        const data = matchedData(req);

        let updates = {};

        if(data.name) {
            updates.name = data.name;
        }

        if(data.email) {
            const emailCheck = await User.findOne({email: data.email});
            if(emailCheck) {
                res.json({error: 'Email já existente!'});
                return;
            }

            updates.email = data.email;
        }

        if(data.state) {
            if(mongoose.Types.ObjectId.isValid(data.state)){
            const stateCheck = await State.findById(data.state);
            if(!stateCheck) {
                res.json({error: 'Estado não existe'});
                return;
            }

            updates.state = data.state;
        }
    }


        if(data.password) {
            updates.passwordHash = await bcrypt.hash(data.password, 10);
        }

        await User.findOneAndUpdate({token: data.token}, {$set: updates});

        res.json({});
    }
};
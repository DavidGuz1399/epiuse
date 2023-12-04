const { response, request } = require("express");
const {usersGetQuery, usersPostQuery, usersPutQuery, usersDeleteQuery} = require("../models/user")

const usersGet = async ( req = request , res = response ) => {
    const usuarios = await usersGetQuery();
    res.json({
        usuarios: usuarios
    });
}
const usersPost = (req = request , res = response) => {
    const datos = usersPostQuery(req.body);
    res.json(
        'Usuario agregado exitosamente'
    )
}
const usersPut = (req = request , res = response) => {
    const { id } = req.params;
    const usuario = usersPutQuery(req.body,id);
    res.json(
        `Usuario ${req.body.name} agregado exitosamente`
    )
}
const usersDelete = (req = request , res = response) => {
    const usuarioEliminado = usersDeleteQuery(req.params.id);
    res.json(
        `Usuario ${req.params.id} agregado exitosamente`
    )
}
module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}
// configs/helpers.js

const flash = async (ctx, next) => {
  // Recuperar mensajes flash de la sesión anterior
  ctx.flash = ctx.session.flash || {};
  
  // Limpiar los mensajes flash de la sesión actual
  delete ctx.session.flash;
  
  // Métodos helpers para flash con color
  ctx.flashSuccess = (message) => {
    if (!ctx.session.flash) ctx.session.flash = {};
    ctx.session.flash.message = message;
    ctx.session.flash.color = 'success';
  };
  
  ctx.flashError = (message) => {
    if (!ctx.session.flash) ctx.session.flash = {};
    ctx.session.flash.message = message;
    ctx.session.flash.color = 'danger';
  };
  
  ctx.flashInfo = (message) => {
    if (!ctx.session.flash) ctx.session.flash = {};
    ctx.session.flash.message = message;
    ctx.session.flash.color = 'info';
  };
  
  ctx.flashWarning = (message) => {
    if (!ctx.session.flash) ctx.session.flash = {};
    ctx.session.flash.message = message;
    ctx.session.flash.color = 'warning';
  };
  
  // Helper para mensaje personalizado con color
  ctx.flashCustom = (message, color) => {
    if (!ctx.session.flash) ctx.session.flash = {};
    ctx.session.flash.message = message;
    ctx.session.flash.color = color;
  };
  
  // Helper para múltiples mensajes (usa array)
  ctx.flashMultiple = (messages) => {
    if (!ctx.session.flash) ctx.session.flash = {};
    ctx.session.flash.messages = messages.map(msg => ({
      message: msg.text,
      color: msg.color
    }));
  };
  
  // Helper para verificar si hay mensajes flash
  ctx.hasFlash = () => {
    return Object.keys(ctx.flash).length > 0;
  };
  
  // Pasar flash al state para las vistas
  ctx.state.flash = ctx.flash;
  
  await next();
};

const loadEnv = async (ctx, next) => {
  ctx.state.env = {
    BASE_URL: process.env.BASE_URL,
    STATIC_URL: process.env.STATIC_URL, // Only expose non-sensitive data
    APP_NAME: process.env.APP_NAME,
    DB_PASS: process.env.DB_PASS,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
  };
  await next();
}
  
export default {
  flash, loadEnv, 
}
// configs/helpers.js

export const flash = async (ctx, next) => {
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
  
export default {
  flash,
}
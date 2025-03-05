import { useEffect } from 'react';

const Chatbox = () => {
  useEffect(() => {
    // Script de Chatbase
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "KL_JoaxmY5hMPbsOueUfi";
    script.domain = "www.chatbase.co";
    
    // Agregar el script al final del body
    document.body.appendChild(script);
    
    // Inicializar el chat
    script.onload = () => {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {
          if (!window.chatbase.q) {
            window.chatbase.q = [];
          }
          window.chatbase.q.push(args); // Usar 'args' en lugar de 'arguments'
        };
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q;
            }
            return (...args) => target(prop, ...args); // Usar 'args' en lugar de 'arguments'
          },
        });
      }
    };

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // El componente no necesita devolver nada visible, solo cargar el script
};

export default Chatbox;

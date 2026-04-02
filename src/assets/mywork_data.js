import uvlImg from '../assets/uvlauth.png';
import arcdImg from '../assets/arcd.png';

export const mywork_data = [
    {
        w_name: "UvlAuth (Autonomous Agent)",
        w_desc: "Agente de identidad soberana y pagos (ERC-8004) de ultra-bajo consumo. Optimizado para hardware restringido con una huella de memoria <15MB, eliminando la dependencia de infraestructura cloud costosa.",
        w_tech: ["C", "OpenBSD", "Crypto"],
        w_status: "COMPLETED",
        w_img: uvlImg,
        w_link: "https://github.com/nerdemma/uvlauth" 
    },
    {
        w_name: "Arcd Web Server",
        w_desc: "Servidor HTTP de alto rendimiento con integración CGI. Diseñado para ser ligero y seguro, con configuración centralizada mediante archivos .conf, ideal para despliegues en sistemas críticos.",
        w_tech: ["C", "Unix Sockets", "CGI"],
        w_status: "COMPLETED",
        w_img: arcdImg,
        w_link: "https://github.com/nerdemma/arcd" 
    },
    {
        w_name: "Sys Check",
        w_desc: "Suite de scripts para diagnóstico proactivo de servidores (CPU, RAM, logs de seguridad).",
        w_tech: ["Bash", "KornShell", "Awk"],
        w_status: "COMPLETED",
        w_img: null,
        w_link: "https://github.com/nerdemma/sys-check"
    },
    {
        w_name: "CloudWatcher-Lite",
        w_desc: "Monitor de uptime con alertas automáticas vía API de Telegram para servicios críticos.",
        w_tech: ["Python", "Requests", "JSON"],
        w_status: "IN_PROGRESS",
        w_img: null,
        w_link: "#"
    },
    {
        w_name: "NetInventory-Py",
        w_desc: "Escáner de red para inventario automatizado de hardware y SO en redes LAN.",
        w_tech: ["Python", "Nmap-Lib", "SQLite"],
        w_status: "IN_PROGRESS",
        w_img: null,
        w_link: "#"
    },
    {
        w_name: "LogRotate-Master",
        w_desc: "Herramienta de gestión, compresión y backup automático de logs para entornos Linux/Unix.",
        w_tech: ["Bash", "Cron", "Gzip"],
        w_status: "IN_PROGRESS",
        w_img: null,
        w_link: "#"
    }
];

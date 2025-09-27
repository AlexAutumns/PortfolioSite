// app/components/home/skills/skills.ts
import CiscoIcon from "./icons/cisco.png";
import CanvaIcon from "./icons/canva.png";
import PowerBIIcon from "./icons/powerbi.png";
import JavaIcon from "./icons/java.png";
import PythonIcon from "./icons/python.png";
import CSSIcon from "./icons/css.png";
import HTMLIcon from "./icons/html.png";
import JSIcon from "./icons/javascript.png";
import PremiereIcon from "./icons/premiere.png";
import PhotoshopIcon from "./icons/photoshop.png";
import DrawioIcon from "./icons/drawio.png";
import GitIcon from "./icons/git.png";
import LibreOfficeIcon from "./icons/libreoffice.png";
import MySQLIcon from "./icons/mysql.png";
import PostgreSQLIcon from "./icons/postgresql.png";
import PostmanIcon from "./icons/postman.png";
import ReactIcon from "./icons/react.png";

export interface Skill {
    name: string;
    icon: string;
}

export const skills: Skill[] = [
    { name: "Cisco Packet Tracer", icon: CiscoIcon },
    { name: "Canva", icon: CanvaIcon },
    { name: "Microsoft Power BI", icon: PowerBIIcon },
    { name: "Java", icon: JavaIcon },
    { name: "Python", icon: PythonIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "HTML5", icon: HTMLIcon },
    { name: "JavaScript", icon: JSIcon },
    { name: "Adobe Premiere Pro", icon: PremiereIcon },
    { name: "Adobe Photoshop", icon: PhotoshopIcon },
    { name: "draw.io", icon: DrawioIcon },
    { name: "Git", icon: GitIcon },
    { name: "LibreOffice", icon: LibreOfficeIcon },
    { name: "MySQL", icon: MySQLIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "React", icon: ReactIcon },

    // { name: "Backend Web Dev", icon: BackendIcon },
    // { name: "Web Dev", icon: WebIcon },
];

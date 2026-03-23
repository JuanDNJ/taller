import avatar1 from "../assets/images/avatar1.png";
import avatar3 from "../assets/images/avatar3.png";
import avatar4 from "../assets/images/avatar4.png";

export type CustomerReviewProps = {
    comment: string;
    avatar: string;
    name: string;
    position?: string;
    color?: string;
}

export const CoustomersReviews: CustomerReviewProps[] = [
    {
        comment: "Gracias al taller Juan Valdivia, pasé la ITV sin ningún problema. Su atención al detalle y profesionalismo son excepcionales. ¡Recomiendo sus servicios a todos los conductores!",
        avatar: avatar1,
        name: "Maria Gomez",
        position: "left-4",
        color: "text-red-500",
    },
    {
        comment: "Excelente servicio y atención al cliente. Mi coche pasó la ITV sin problemas gracias a su profesionalismo.",
        avatar: avatar3,
        name: "Carlos Rodriguez",
        position: "left-11",
        color: "text-green-500",
    },
    {
        comment: "El taller Juan Valdivia me ayudó a preparar mi coche para la ITV y el proceso fue muy fácil. Su equipo es muy profesional y se nota que saben lo que hacen.",
        avatar: avatar4,
        name: "Ana Martinez",
        position: "left-18",
        color: "text-blue-500",
    }
]
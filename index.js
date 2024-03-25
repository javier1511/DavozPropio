const offerData = [
    {
        src: "./3.jpg",
        text: "Personal altamente capacitado y confiable: Nuestro equipo de agentes de seguridad está compuesto por profesionales altamente capacitados y experimentados en el campo de la seguridad seleccionamos cuidadosamente a nuestros empleados y les proporcionamos una formación rigurosa, lo que nos permite brindar un servicio confiable y de calidad.",
    },
    {
        src: "./2.jpg",
        text: "Reconocemos que cada cliente tiene requerimientos y desafíos únicos en términos de seguridad nos dedicamos a comprender tus necesidades específicas y a diseñar estrategias a medida que aborden tus preocupaciones y te brinden la tranquilidad que mereces. Desde la evaluación inicial de riesgos hasta la implementación de medidas de seguridad personalizadas, nos adaptamos a tu situación para ofrecerte soluciones efectivas.",
    },
    {
        src: "./4.jpg",
        text: "Nos comprometemos a mantener la seguridad de tu inmueble en todo momento nuestros agentes altamente capacitados estarán presentes las 24 horas del día para brindar una protección constante y vigilancia activa. Con nuestra presencia, puedes estar tranquilo sabiendo que tu propiedad está protegida en todo momento.",
    },
    {
        src: "./5.jpg",
        text: "Valoramos a nuestros clientes y nos esforzamos por ofrecer un servicio al cliente excepcional. Nos mantenemos disponibles las 24 horas del día, los 7 días de la semana, para atender tus consultas y brindarte el apoyo que necesitas además, establecemos relaciones de confianza a largo plazo con nuestros clientes, lo que nos permite comprender sus necesidades cambiantes y adaptar nuestras soluciones en consecuencia.",
    }
];

let offerPicture = document.querySelector(".offer__picture");
let offerText = document.querySelector(".offer__text");


const offerDataReplace = function (data) {
    offerPicture.src = data.src; // Corrección aquí
    offerText.textContent = data.text; // Corrección aquí
    console.log("offerPictureSrc:", offerPicture.src);
    console.log("offerText:", offerText.textContent);
}

const offerDataGatherInfoAction = document.querySelector("#offer__titles-text2");
offerDataGatherInfoAction.addEventListener("click", () => {
    offerDataReplace(offerData[1]);
});

const offerDataGatherInfoAction2 = document.querySelector("#offer__titles-text3");

offerDataGatherInfoAction2.addEventListener("click", () => {
    offerDataReplace(offerData[2]);
});

const offerDataGatherInfoAction3 = document.querySelector("#offer__titles-text4");

offerDataGatherInfoAction3.addEventListener("click", () => {
    offerDataReplace(offerData[3]);
});


const offerDataGatherInfoAction1 = document.querySelector("#offer__titles-text1");

offerDataGatherInfoAction1.addEventListener("click", () => {
    offerDataReplace(offerData[0]);
});

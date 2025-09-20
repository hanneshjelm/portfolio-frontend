import hotel_booking from './Hotel booking.png'
import quiz from './QuizCollage.png'
import memeory from './Memeory.png'
import secure_login from './Secure login.png'
import webstore_admin from './webstore login.png'
import webstore from './webstore1.png'







const projects_data = [
    {
        number: 1,
        name: 'Hotel Booking System',
        img: hotel_booking,
        url: "https://github.com/hanneshjelm/Backend1",
        description: "A simple hotel booking system with room and customer management. " +
            "Made with Spring Boot and Thymeleaf with MySQL database"
    },
    {
        number: 2,
        name: 'Quizkampen',
        img: quiz,
        url: "https://github.com/hanneshjelm/Quizkampen",
        description: "A two player quiz game with multiple categories and server connection. " +
            "Built with Java swing. "

    },
    {
        number: 3,
        name: 'Memeory',
        img: memeory,
        url: "https://github.com/hanneshjelm/MemeOry",
        description: "Memory card game with meme images. " +
            "Built with Java swing. "
    },
    {
        number: 4,
        name: 'Webstore with admin',
        img: webstore_admin,
        url: "https://github.com/hanneshjelm/JavaBackend2",
        description: "Webstore with admin dashboard for order management. " +
            "Built with Spring Boot and Thymeleaf with Spring Security integration with MySQL database"
    },
    {
        number: 5,
        name: 'Spring security log in',
        img: secure_login,
        url: "https://github.com/hanneshjelm/securelogin",
        description: "Secure authentication system using Spring Security framework. " +
            "Built with Spring Boot and Spring Security with MySQL database."
    },
    {
        number: 6,
        name: 'Webstore FakeStoreAPI',
        img: webstore,
        url: "https://github.com/hanneshjelm/FrontendUppgiftWebstore",
        description: "Responsive frontend webstore fetching data from FakeStore API. " +
            "Built with JavaScript, HTML and Bootstrap CSS"
    }
]

export default projects_data
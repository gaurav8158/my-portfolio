import React from 'react'
import Title from '../Layout/Title'
import ProjectCards from './ProjectCards'
import { financely,typing,food,ecom, github } from '../../assets/index'
const Project = () => {
  return (
    <section id='projects' 
    className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
        <Title 
        title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
        description="my projects"
        />
        </div>
        <div className='pt-10 flex flex-wrap justify-center gap-4 ' >
            <ProjectCards
            title='Financelly'
            des='Developed a web-based Finance Tracker application using ReactJS, Ant Design, and ChartJS. Implemented Google Authentication for secure sign-up and login. Utilized Firebase for user-specific image storage and integrated a mode of payment feature for income and expenses analysis. Resulted in a user-friendly and personalized financial tracking platform.'
            repo={'https://github.com/gaurav8158/financely'}
            deployee={'https://finanncelyy.netlify.app'}
            src={financely}
            />
           <ProjectCards
            title='Typing-mastery'
            des='Implemented a multimode typing test website with the ability to save results for better analysis ,Used firebase to implement login/signup auth and also used a database to save results, Used various react hooks and context API to implement major functionalities like themes and test modes. Tool and Technologies - React, Material UI, Firebase, Styled Components, Toastify.'
            repo={'https://github.com/gaurav8158/typing-Mastrys'}
            deployee={'https://typing-mastry.netlify.app/'}
            src={typing}
            />
            <ProjectCards
            title='E-commerce website'
            des='MeShop is the dummy shopping website, it contains the required features such as product searching, filtering, cart feature, user login, use signup, user authentication and much more, MeShop is entirely designed and developed in HTML, CSS and Javascript.'
            repo={'https://github.com/gaurav8158/meshop'}
            deployee={'https://gaurav8158.github.io/meshop/shop.html'}
            src={ecom}
            />
            <ProjectCards
            title='Online food delivery'
            des="This involve using HTML to structure the content and layout of the page and CSS to style the visual elements, Have a navigation bar at the top of the page, which includes links to various sections of the website, such as the users profile, order history and help center, it's homepage that displays a list of restaurants in the users area and followed by a grid of restaurant cards, which display the name, logo and cuisine type of each restaurant."
            repo={'https://github.com/gaurav8158/Swiggy-clone'}
            deployee={'https://gaurav8158.github.io/Swiggy-clone/'}
            src={food}
            />
              <ProjectCards
            title='Github profile viewer'
            des="Utilized React to develop a dynamic GitHub profile search project, enabling users to effortlessly search and view GitHub profiles. Implemented an intuitive user interface for inputting search queries, fetching and displaying profile data using GitHub API, and showcasing repository details. This project demonstrates proficiency in React, API integration, and user-centered design."
            repo={'https://github.com/gaurav8158/Github-user-search'}
            deployee={'https://https://animated-daffodil-0ba6b9.netlify.app/.github.io/Swiggy-clone/'}
            src={github}
            />
        </div>
       
    </section>
  )
}

export default Project




// grid grid-cols-3 gap-14
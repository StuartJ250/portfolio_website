import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: 'Expense Tracker App',
            description: 'A mobile application for expense tracking and reporting. Utilizes RoomDB, ViewModel, Kotlin',
            github: 'https://github.com/StuartJ250/Capstone_Project.git',

        },
        {
            title: 'My portfolio website code',
            description: 'A web app developed using TailwindCSS and React.js',
            github: 'https://github.com/StuartJ250/portfolio_website.git',

        },
        {
            title: 'Hotel Scheduling application',
            description: 'Scheduling application that utilized Node.js, Angular, Maven, Spring Boot. Modified from existing sample code',
            github: 'https://github.com/StuartJ250/d387-advanced-java.git',

        },
    ]
    return (
        <section id="projects" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
                    Projects
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index}
                             className="bg-gray-300 dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition-all duration 300 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-soft-teal mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                            </div>
                            <div className="mt-4">
                                <a href={project.github}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-block mt-2 text-sm text-white bg-soft-purple hover:bg-soft-teal transition px-4 py-2 rounded shadow"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects

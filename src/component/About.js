import React from 'react'

export default function About () {
  return (
    <div>
      <main className='container'>
        <section>
          <h2>Welcome to c9book</h2>
          <p>
            c9book is a personal notebook application built with React.js. It
            provides users with a platform to organize their thoughts, ideas,
            tasks, and more in a structured manner.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals to enhance their productivity
            and creativity by providing them with a simple yet powerful tool for
            organizing their daily activities and thoughts.
          </p>
        </section>

        <section>
          <h2>Contribute to c9book</h2>
          <p>
            If you'd like to contribute to the development of c9book, we welcome
            your contributions! Feel free to explore our GitHub repository and
            submit pull requests with your enhancements, bug fixes, or feature
            requests.
          </p>
          <a
            href='https://github.com/c9hariom/react-c9book'
            className='btn btn-primary'
          >
            Frone-End
          </a>
          <br />
          <br />
          <a
            href='https://github.com/c9hariom/react-c9book-backend'
            className='btn btn-primary'
          >
            BackEnd
          </a>
        </section>

        <section>
          <h2>Connect with Us</h2>
          <p>
            Stay connected with us on social media platforms for the latest
            updates, announcements, and tips on using c9book:
          </p>
          <ul className='list-inline'>
            <li className='list-inline-item'>
              <a
                href='https://instagram.com/c9hariom'
                className='text-decoration-none'
              >
                Instagram
              </a>
            </li>
            <li className='list-inline-item'>
              <a
                href='https://linkedin.com/in/c9hariom'
                className='text-decoration-none'
              >
                LinkedIn
              </a>
            </li>
            <li className='list-inline-item'>
              <a
                href='https://github.com/c9hariom'
                className='text-decoration-none'
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

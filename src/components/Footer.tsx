'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:hello@example.com',
      icon: Mail
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Portfolio</h3>
              <p className="text-gray-300 leading-relaxed">
                Building exceptional digital experiences with modern technologies 
                and a passion for clean, maintainable code.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.querySelector(`#${item.toLowerCase()}`)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <div className="mt-6">
                <button
                  onClick={scrollToTop}
                  className="btn-primary px-6 py-2 text-sm"
                >
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Joshua. All rights reserved.
            </p>
            
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
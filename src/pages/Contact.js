import React from 'react'
import './Contact.css'

export default function() {
  return (
    <main className="animate-in">
      <h1 className="page-header">Get In Touch</h1>

      <div className="contact-container">
        <p>
          Thank you for your time checking out the Australian chapter of Kubernetes Community Days.
        </p>
        
        <p>
          To find out more about KCD, visit the follow links:
        </p>

        <p>
          <a href="https://github.com/kcd-australia" target="_blank" rel="noreferrer">KCD Australia's GitHub</a>
        </p>

        <p>
          <a href="https://github.com/cncf/kubernetes-community-days" target="_blank" rel="noreferrer">CNCF Kubernetes Community Days</a>
        </p>

      </div>
    </main>
  )
}
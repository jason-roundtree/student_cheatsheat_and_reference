import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <h2>
                <Link to="/">Home</Link> / About
            </h2>
            <div id="about">
                <p>
                    My goal in making this site is to provide a one-stop resource for students learning web development, as well as for my own edification and as a reference for more experienced coders who may find the content useful. My intent is not for this to be an exhaustive resource on the various topics, but rather, I wanted to include content that I've found helpful and that addresses common questions and oversights that often come up as I've been helping students learn web development and become more productive. It's primarily focused on popular and common web technologies that are often taught in coding bootcamps and online tutorials. I also tend to add things that I constantly find myself having to google and re-reference. Many of the explanations and code examples are taken directly from great websites like Mozilla Developer Network, but I try to only take verbatim when I think a description or example really elucidates a subject nicely and isn't too technical and convoluted, particularly for somebody relatively newer to coding, in which case I'll try to mold or reframe the content to be a little more accessible. I'm planning on continuially adding new topics, examples, refining explanations, editing mistakes and adding enhancements, so if there's anything that you think should be added, or if you see any errors, or if you have any feedback at all, I'd love to hear from you!
                </p>
            </div>
        </div>
    )
}

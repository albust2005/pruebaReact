import { useState } from 'react'
import React from 'react'
import './App.css' 
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán S',
        isFollowing: true
    },
    {
        userName: 'pherald',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App () {
    // const formatUserName = (userName) => `@${userName}`
    // const [name, setName] = useState('midudev')

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return(
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

            {/* <TwitterFollowCard userName='midudev'> 
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName="pherald"> 
                Pablo Hernandez
            </TwitterFollowCard> */}
        </section>
    )
}
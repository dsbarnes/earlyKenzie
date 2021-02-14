import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropdownMenu = () => (
<Menu>
    <Dropdown text='DAW' pointing className='link item'>
        <Dropdown.Menu>
            <Dropdown.Item></Dropdown.Item>
            <Dropdown.Item>Compression & Expansion</Dropdown.Item>
            <Dropdown.Item>Equilization</Dropdown.Item>
            <Dropdown.Item>Automation</Dropdown.Item>
            <Dropdown.Item>How To Articles</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>


    <Dropdown text='Synth' pointing className='link item'>
        <Dropdown.Menu>
            <Dropdown.Item></Dropdown.Item>
            <Dropdown.Item>Oscilators</Dropdown.Item>
            <Dropdown.Item>Generators</Dropdown.Item>
            <Dropdown.Item>Filters and Envalopes</Dropdown.Item>
            <Dropdown.Item>Effects</Dropdown.Item>
            <Dropdown.Item>Sequencing</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>


    <Dropdown text='Drums' pointing className='link item'>
    <Dropdown.Menu>
            <Dropdown.Item>Beginner Rudaments</Dropdown.Item>
            <Dropdown.Item>Beginner looping and sampling</Dropdown.Item>
            <Dropdown.Item>Beginner Practice</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>


    <Dropdown text='Bass' pointing className='link item'>
        <Dropdown.Menu>
            <Dropdown.Item>Beginner Scales</Dropdown.Item>
            <Dropdown.Item>Beginner Arpeggios</Dropdown.Item>
            <Dropdown.Item>Beginner Technique</Dropdown.Item>
            <Dropdown.Item>Advanced Scales</Dropdown.Item>
            <Dropdown.Item>Advanced Arpeggios</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>


    <Dropdown text='Keys' pointing className='link item'>
    <Dropdown.Menu>
            <Dropdown.Item>Beginner Harmony</Dropdown.Item>
            <Dropdown.Item>Beginner Melody</Dropdown.Item>
            <Dropdown.Item>Beginner Rhythm</Dropdown.Item>
            <Dropdown.Item>Advanced Harmony</Dropdown.Item>
            <Dropdown.Item>Advanced Melody</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>


    <Dropdown text='Theory' pointing className='link item'>
    <Dropdown.Menu>
            <Dropdown.Item>Beginner Harmony</Dropdown.Item>
            <Dropdown.Item>Beginner Melody</Dropdown.Item>
            <Dropdown.Item>Beginner Rhythn</Dropdown.Item>
            <Dropdown.Item>Beginner Reharminization</Dropdown.Item>
            <Dropdown.Item>Advanced Harmony</Dropdown.Item>
            <Dropdown.Item>Advanced Melody</Dropdown.Item>
            <Dropdown.Item>Advanced Reharminization</Dropdown.Item>
            <Dropdown.Item></Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>


    <Menu.Item>Blog</Menu.Item>
</Menu>
)

export default DropdownMenu
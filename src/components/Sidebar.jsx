import React from 'react';
import {Stack} from '@mui/material';

import { categories } from '../utils/constants';

// const selectedCategory = 'New'

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack 
        direction="row"
        sx= {{
            overflow: "auto",
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md:'column'},
            
        }}
    >
        {categories.map((category) => (
            <button
            className='category-btn'
            onClick={() => setSelectedCategory(category.name)}
            key={category.name}
            style={{
                background: category.name === selectedCategory && '#FC1503',
                color: '#fff'
            }}
            >
                <span style={{paddingRight: '10px'}}>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        )            
        )}
    </Stack>
)

export default Sidebar;
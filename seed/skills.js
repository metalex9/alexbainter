const mongoose = require('mongoose');
const Skill = require('../models/Skill');
const Rating = require('../models/Rating');

const data = [
    {
        name: 'JavaScript',
        rating: 'Expert'
    },
    {
        name: 'C#',
        rating: 'Expert'
    },
    {
        name: 'React',
        rating: 'Familiar'
    },
    {
        name: 'Redux',
        rating: 'Familiar'
    },
    {
        name: 'Angular',
        rating: 'Beginner'
    },
    {
        name: 'Java',
        rating: 'Proficient'
    },
    {
        name: 'CSS',
        rating: 'Proficient'
    },
    {
        name: 'SQL',
        rating: 'Familiar'
    },
    {
        name: 'Visual Basic',
        rating: 'Proficient'
    },
    {
        name: 'Knockout',
        rating: 'Expert'
    },
    {
        name: 'git',
        rating: 'Proficient'
    },
    {
        name: 'C++',
        rating: 'Familiar'
    },
    {
        name: 'Sass',
        rating: 'Proficient'
    },
    {
        name: 'gulp',
        rating: 'Proficient'
    },
    {
        name: 'ASP.NET',
        rating: 'Proficient'
    },
    {
        name: 'ES6',
        rating: 'Expert'
    },
    {
        name: 'R',
        rating: 'Familiar'
    },
    {
        name: 'Android',
        rating: 'Familiar'
    },
    {
        name: 'jQuery',
        rating: 'Proficient'
    },
    {
        name: 'Design',
        rating: 'Familiar'
    },
    {
        name: 'Mongo',
        rating: 'Familiar'
    },
    {
        name: 'Node',
        rating: 'Familiar'
    }
];

module.exports = Array.prototype.map.bind(data, skillData => {
    return Rating.findOne({'name': skillData.rating}).then(rating => {
        if (!rating) {
            console.log(`"${skillData.name}" Skill Warning: No corresponding rating found for "${skillData.rating}"`);
        }

        return new Skill({
            name: skillData.name,
            rating: rating
        }).save(err => {
            if (err) {
                console.log(`"${skillData.name}" Skill Errotttr: ${insideErr}`);
            }
        });
    });
});